(() => {
  const q = (s, r = document) => r?.querySelector?.(s) || null;
  const qa = (s, r = document) => [...(r?.querySelectorAll?.(s) || [])];
  const norm = (v = '') => String(v).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const state = { signature: '' };

  function ensureStyles() {
    if (q('#v27IntentStyles')) return;
    const style = document.createElement('style');
    style.id = 'v27IntentStyles';
    style.textContent = `
      .v27-intent-order{position:relative;height:100%;min-height:280px;padding:28px 22px 22px;background:linear-gradient(180deg,#eef8ff 0 52%,#e3f2d9 52%)}
      .v27-intent-road{position:absolute;left:4%;right:4%;top:49%;height:12px;border-radius:999px;background:#c9cad8;box-shadow:inset 0 3px 0 rgba(255,255,255,.8)}
      .v27-intent-road:after{content:'';position:absolute;left:3%;right:3%;top:4px;border-top:2px dashed #fff}
      .v27-intent-slots{position:absolute;left:7%;right:7%;top:24%;display:grid;grid-template-columns:repeat(var(--count),1fr);gap:14px;z-index:2}
      .v27-intent-slot{min-height:78px;border:2px dashed rgba(91,75,255,.25);border-radius:18px;background:rgba(255,255,255,.58);display:grid;place-items:center;color:#766f94;font-size:.72rem;font-weight:900;transition:.3s}
      .v27-intent-slot.filled{border-style:solid;border-color:#6c59ff;background:#fff;transform:translateY(-4px);box-shadow:0 10px 24px rgba(91,75,255,.12)}
      .v27-intent-slot b{display:block;font-size:1.4rem;color:#2b2741}
      .v27-intent-cards{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;gap:10px;z-index:4;flex-wrap:wrap;justify-content:center;width:90%}
      .v27-intent-card{border:0;border-radius:16px;background:#fff;min-width:86px;padding:12px 14px;font-size:1.15rem;font-weight:1000;color:#27233e;box-shadow:0 8px 24px rgba(50,45,92,.12);transition:.35s cubic-bezier(.2,.9,.3,1)}
      .v27-intent-card:hover,.v27-intent-card:focus-visible{transform:translateY(-5px);outline:3px solid rgba(91,75,255,.18)}
      .v27-intent-card.used{opacity:.2;transform:translateY(-80px) scale(.8);pointer-events:none}
      .v27-intent-card.no{animation:v27IntentShake .32s ease}
      .v27-intent-compare{position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);font-size:clamp(1.1rem,2vw,1.7rem);font-weight:1000;color:#5b4bff;background:#fff;border-radius:999px;padding:9px 16px;box-shadow:0 8px 20px rgba(45,40,82,.1);opacity:0;transition:.3s}
      .v27-intent-compare.show{opacity:1;transform:translate(-50%,-58%)}
      @keyframes v27IntentShake{0%,100%{transform:translateX(0)}30%{transform:translateX(-8px)}70%{transform:translateX(8px)}}
      @media(max-width:620px){.v27-intent-slots{gap:7px;left:3%;right:3%}.v27-intent-slot{min-height:66px}.v27-intent-card{min-width:72px;padding:10px;font-size:1rem}}
      @media(prefers-reduced-motion:reduce){.v27-intent-card,.v27-intent-slot,.v27-intent-compare{transition:none!important;animation:none!important}}
    `;
    document.head.appendChild(style);
  }

  function extractNumbers(modal) {
    const values = [];
    qa('#curriculumGameOptions button, #curriculumGameOptions [role="button"]', modal).forEach(el => {
      const matches = String(el.textContent || '').match(/\d{1,6}(?:[.,]\d+)?/g) || [];
      matches.forEach(raw => {
        const n = Number(raw.replace(/\./g, '').replace(',', '.'));
        if (Number.isFinite(n) && !values.includes(n)) values.push(n);
      });
    });
    return values.slice(0, 6);
  }

  function intentFor(prompt) {
    const s = norm(prompt);
    if (/menor a mayor|orden ascendente|ascendente|de menor.*mayor/.test(s)) return 'ascending';
    if (/mayor a menor|orden descendente|descendente|de mayor.*menor/.test(s)) return 'descending';
    if (/cual.*mayor|numero mayor|mas grande/.test(s)) return 'largest';
    if (/cual.*menor|numero menor|mas pequeno/.test(s)) return 'smallest';
    return '';
  }

  function deterministicShuffle(values) {
    if (values.length < 3) return [...values].reverse();
    return [values[1], ...values.slice(2), values[0]];
  }

  function renderOrder(scene, values, direction) {
    const world = q('.v27-world', scene);
    const command = q('.v27-command', scene);
    if (!world || !command) return;
    const target = [...values].sort((a, b) => direction === 'ascending' ? a - b : b - a);
    const cards = deterministicShuffle(values);
    scene.dataset.v27Skill = direction;
    command.textContent = direction === 'ascending' ? 'Lleva los números del menor al mayor' : 'Lleva los números del mayor al menor';
    world.innerHTML = `<div class="v27-intent-order"><div class="v27-intent-road"></div><div class="v27-intent-slots" style="--count:${target.length}">${target.map((_, i) => `<div class="v27-intent-slot" data-i="${i}"><span>${i + 1}</span></div>`).join('')}</div><div class="v27-intent-compare"></div><div class="v27-intent-cards">${cards.map(v => `<button class="v27-intent-card" data-value="${v}">${v.toLocaleString('es-CO')}</button>`).join('')}</div></div>`;
    let step = 0;
    qa('.v27-intent-card', world).forEach(btn => btn.addEventListener('click', () => {
      const value = Number(btn.dataset.value);
      if (value !== target[step]) {
        btn.classList.remove('no'); void btn.offsetWidth; btn.classList.add('no');
        command.textContent = direction === 'ascending' ? 'Busca el más pequeño que falta' : 'Busca el más grande que falta';
        return;
      }
      const slot = q(`.v27-intent-slot[data-i="${step}"]`, world);
      slot.classList.add('filled');
      slot.innerHTML = `<b>${value.toLocaleString('es-CO')}</b>`;
      btn.classList.add('used');
      step += 1;
      if (step > 1) {
        const compare = q('.v27-intent-compare', world);
        const a = target[step - 2], b = target[step - 1];
        compare.textContent = `${a.toLocaleString('es-CO')} ${direction === 'ascending' ? '<' : '>'} ${b.toLocaleString('es-CO')}`;
        compare.classList.add('show');
      }
      if (step === target.length) {
        command.textContent = direction === 'ascending' ? 'De menor a mayor' : 'De mayor a menor';
        scene.classList.add('v27-complete');
        const flash = q('.v27-flash', scene);
        if (flash) {
          flash.innerHTML = `<span>★</span><b>${target.map(v => v.toLocaleString('es-CO')).join(direction === 'ascending' ? ' < ' : ' > ')}</b>`;
          flash.classList.remove('show'); void flash.offsetWidth; flash.classList.add('show');
        }
      }
    }));
  }

  function renderCompare(scene, values, intent) {
    const world = q('.v27-world', scene);
    const command = q('.v27-command', scene);
    if (!world || !command) return;
    const target = intent === 'largest' ? Math.max(...values) : Math.min(...values);
    scene.dataset.v27Skill = intent;
    command.textContent = intent === 'largest' ? 'Encuentra el número más grande' : 'Encuentra el número más pequeño';
    world.innerHTML = `<div class="v27-intent-order"><div class="v27-intent-road"></div><div class="v27-intent-cards" style="bottom:95px">${deterministicShuffle(values).map(v => `<button class="v27-intent-card" data-value="${v}">${v.toLocaleString('es-CO')}</button>`).join('')}</div><div class="v27-intent-compare show" style="top:72%">${intent === 'largest' ? 'Mira primero las centenas' : 'Empieza por las centenas'}</div></div>`;
    qa('.v27-intent-card', world).forEach(btn => btn.addEventListener('click', () => {
      const value = Number(btn.dataset.value);
      if (value !== target) { btn.classList.remove('no'); void btn.offsetWidth; btn.classList.add('no'); return; }
      btn.style.transform = 'translateY(-35px) scale(1.12)';
      btn.style.boxShadow = '0 14px 32px rgba(91,75,255,.25)';
      command.textContent = intent === 'largest' ? 'Ese es el mayor' : 'Ese es el menor';
      scene.classList.add('v27-complete');
    }));
  }

  function sync() {
    const modal = q('#curriculumGameModal');
    if (!modal || modal.hidden || !modal.getClientRects().length) return;
    const prompt = String(q('#curriculumGamePrompt', modal)?.textContent || '').trim();
    const intent = intentFor(prompt);
    if (!intent) return;
    const values = extractNumbers(modal);
    if (values.length < 2) return;
    const signature = `${prompt}|${values.join(',')}|${intent}`;
    if (signature === state.signature) return;
    const scene = q('#v27GameStory .v27-story', modal);
    if (!scene) return;
    state.signature = signature;
    ensureStyles();
    if (intent === 'ascending' || intent === 'descending') renderOrder(scene, values, intent);
    else renderCompare(scene, values, intent);
  }

  function init() {
    sync();
    const observer = new MutationObserver(() => requestAnimationFrame(sync));
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['hidden', 'class'] });
    window.NOVAQuestionIntent = { sync, intentFor, extractNumbers };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0), { once: true });
  else setTimeout(init, 0);
})();
