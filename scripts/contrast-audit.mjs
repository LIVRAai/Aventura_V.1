import fs from 'node:fs';

const css = fs.readFileSync(new URL('../design-tokens.css', import.meta.url), 'utf8');
const tokens = new Map();

for (const match of css.matchAll(/--([a-z0-9-]+):\s*(#[0-9a-f]{6})\s*;/gi)) {
  tokens.set(match[1], match[2].toLowerCase());
}

function channel(value) {
  value /= 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const value = hex.replace('#', '');
  const r = channel(parseInt(value.slice(0, 2), 16));
  const g = channel(parseInt(value.slice(2, 4), 16));
  const b = channel(parseInt(value.slice(4, 6), 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const high = Math.max(l1, l2);
  const low = Math.min(l1, l2);
  return (high + 0.05) / (low + 0.05);
}

function token(name) {
  const value = tokens.get(name);
  if (!value) throw new Error(`No se encontró --${name} en design-tokens.css`);
  return value;
}

const checks = [
  ['CTA principal', '#ffffff', 'nova-brand-primary', 4.5],
  ['CTA principal hover', '#ffffff', 'nova-brand-primary-hover', 4.5],
  ['Texto principal', 'nova-ink', '#ffffff', 4.5],
  ['Texto secundario', 'nova-text-secondary', '#ffffff', 4.5],
  ['Texto secundario / fondo', 'nova-text-secondary', 'nova-background', 4.5],
  ['Estado deshabilitado', 'nova-disabled-text', 'nova-disabled-background', 4.5],
  ['Marca sobre soft', 'nova-brand-primary-hover', 'nova-brand-soft', 4.5],
  ['Matemáticas strong / soft', 'nova-subject-math-strong', 'nova-subject-math-soft', 4.5],
  ['Lenguaje strong / soft', 'nova-subject-language-strong', 'nova-subject-language-soft', 4.5],
  ['Ciencias strong / soft', 'nova-subject-science-strong', 'nova-subject-science-soft', 4.5],
  ['Sociales strong / soft', 'nova-subject-social-strong', 'nova-subject-social-soft', 4.5],
  ['Inglés strong / soft', 'nova-subject-english-strong', 'nova-subject-english-soft', 4.5],
  ['Éxito', 'nova-state-success', 'nova-state-success-soft', 4.5],
  ['Atención', 'nova-state-warning', 'nova-state-warning-soft', 4.5],
  ['Error', 'nova-state-error', 'nova-state-error-soft', 4.5],
  ['Información', 'nova-state-info', 'nova-state-info-soft', 4.5],
  ['Foco sobre blanco', 'nova-focus-ring', '#ffffff', 3.0]
];

let failed = false;
console.log('\nNOVA contrast audit\n');

for (const [label, fgRef, bgRef, minimum] of checks) {
  const foreground = fgRef.startsWith('#') ? fgRef : token(fgRef);
  const background = bgRef.startsWith('#') ? bgRef : token(bgRef);
  const value = ratio(foreground, background);
  const ok = value >= minimum;
  if (!ok) failed = true;
  console.log(`${ok ? '✓' : '✗'} ${label.padEnd(31)} ${value.toFixed(2)}:1  mínimo ${minimum}:1`);
}

console.log('\nRegla: los colores vivos de materia no se usan con texto blanco. Para texto se usa strong; para áreas grandes, soft.\n');

if (failed) process.exit(1);
