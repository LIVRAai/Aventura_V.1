# NOVA V25 · Evolución Integral

## Propósito

V25 convierte la base consolidada de V24.4 en un producto que interpreta evidencia de aprendizaje, recomienda el siguiente paso, comunica progreso a la familia y crea una capa de retención sin reemplazar el historial existente.

V25 se desarrolla como una sola actualización comercial, una sola rama y un solo PR. Internamente se divide en módulos reversibles para reducir riesgo.

## Implementado

### 1. Motor pedagógico adaptativo

Estados por habilidad:

- Nuevo
- En proceso
- Reforzar
- Dominado

El motor reutiliza `novaCurriculumGameProgressV1` y no reinicia progreso.

Criterio de dominio compatible con V24:

- ronda de dominio completada o al menos 20 retos medidos;
- mejor desempeño >= 80%.

Priorización:

1. habilidad en refuerzo con menor desempeño reciente;
2. habilidad en proceso con menor evidencia;
3. foco de la primera lectura;
4. exploración de una primera actividad.

### 2. Home adaptativo

Incluye:

- nivel;
- siguiente recomendación;
- motivo verificable de la recomendación;
- CTA para continuar la recomendación;
- meta semanal;
- logros.

### 3. Progreso para la familia

El panel familiar añade:

- dominios;
- habilidades en proceso;
- habilidades por reforzar;
- días y minutos de los últimos 7 días;
- dominios trabajados;
- siguiente recomendación de NOVA;
- aviso explícito de que no es una nota escolar ni un diagnóstico clínico.

### 4. Retención

V25 conserva XP y racha e incorpora:

- nivel;
- seis logros base;
- meta de 4 días de práctica;
- meta de 60 minutos;
- meta de 2 dominios trabajados.

Las metas son motivacionales y no bloquean el aprendizaje.

### 5. Identidad NOVA

Se añade una presencia visual propia de NOVA construida con UI nativa, con estados:

- curious;
- focus;
- guide;
- celebrate.

El mensaje estable de producto es:

> No hago la tarea por ti. Te ayudo a entender cómo resolverla.

### 6. Compartir progreso

Se puede compartir:

- avance general;
- resumen de los últimos 7 días.

Se usa Web Share API cuando está disponible y portapapeles como fallback.

### 7. Nube

`adaptiveProfile` y `engagement` se guardan dentro de `child_progress.curriculum_state`.

No se crea una tabla nueva.

La escritura hace merge con el estado remoto actual para preservar:

- grade;
- activity;
- gameProgress;
- diagnostic;
- demás claves existentes.

### 8. Analítica

Eventos V25:

- adaptive_profile_updated
- adaptive_recommendation_viewed
- adaptive_recommendation_started
- skill_state_changed
- badge_unlocked
- parent_summary_viewed
- achievement_shared
- weekly_summary_shared

También se corrige el caso donde un login o signup llega directamente a Home y V24.2 podía no emitir `login_completed` / `signup_completed`.

### 9. Runtime

`package.json` pasa a Node `24.x`, alineado con el Project Setting de Vercel.

El preview V25 ya construye sin la advertencia histórica Node 22 vs Node 24.

### 10. Hardening Supabase

Aplicado y verificado en Aventura_V.1:

- se revocó ejecución directa de `public.handle_new_parent()` a `PUBLIC`, `anon` y `authenticated`;
- la función conserva ejecución para `postgres` y `service_role` y continúa funcionando como trigger de `auth.users`;
- `search_path` de la función quedó vacío;
- `subscription_events` tiene política explícita que niega acceso a `anon` y `authenticated`.

Después del cambio, el Security Advisor ya no reporta los avisos anteriores de `SECURITY DEFINER` ni `RLS enabled no policy`.

Pendiente de configuración de cuenta: Leaked Password Protection continúa desactivado.

## Quality Gate

Workflow: `.github/workflows/nova-quality.yml`.

Valida:

- sintaxis JS;
- contraste;
- coherencia UI V24.4;
- requisitos V25.

Primer resultado del PR #6: **SUCCESS**.

## Preview certificado a nivel de build

- Rama: `feature/nova-v25-evolucion-integral`
- PR: #6
- HEAD validado: `4f8bff7b13e36f0b7a9db6f1f2abd62e05467914`
- Vercel deployment: `dpl_8SAyymnJasW3zzd2fN9P4dSL7r7w`
- Estado: READY
- Landing: HTTP 200
- Build: completado sin errores en Node 24

## Pendientes antes de merge a producción

### Obligatorios

1. Recorrido funcional autenticado en preview:
   - prueba;
   - registro/login;
   - Home;
   - recomendación;
   - materia/tema/reto;
   - progreso;
   - panel familiar;
   - compartir;
   - gestión del plan.
2. Verificar en una actividad real que `adaptiveProfile` y `engagement` sobreviven recarga y sincronización nube.
3. Verificar que la recomendación cambia después de nueva evidencia.
4. Verificar mobile.

### Deuda que V25 aún debe cerrar

- eliminar referencias internas históricas a “Emiliano” en modos legacy del tutor; la respuesta visible ya se personaliza, pero el prompt interno aún contiene referencias antiguas en Academia/Cuaderno/Expedición;
- habilitar Leaked Password Protection desde configuración de Supabase Auth (no hay acción de configuración Auth expuesta en el conector actual);
- decidir si el resumen semanal evoluciona después a entrega automática por correo/push; V25 actual lo calcula, muestra y permite compartir;
- la base de referidos queda preparada mediante compartir, pero no hay programa económico de referidos todavía.

## Regla de merge

No fusionar V25 hasta que el recorrido funcional del preview confirme que el motor adaptativo no altera negativamente:

- progreso V24;
- navegación;
- suscripción;
- sincronización;
- experiencia mobile.
