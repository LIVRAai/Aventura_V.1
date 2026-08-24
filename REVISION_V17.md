# Revisión V17 · Cancelación autoservicio

## Flujo del adulto

`Perfil → Plan familiar → Administrar → Cancelar renovación`

La confirmación muestra antes de cancelar:
- fecha estimada hasta la que conserva acceso;
- que no habrá nuevos cobros;
- que los pagos ya aprobados no se reembolsan automáticamente.

## Backend

Nuevo endpoint:

`POST /api/subscription-cancel`

Reglas:
1. requiere sesión válida de Supabase;
2. el servidor localiza la suscripción de esa cuenta; el navegador no puede indicar arbitrariamente un ID de otra cuenta;
3. consulta el estado real de `/preapproval/{id}`;
4. conserva `next_payment_date` como `access_until` cuando esa fecha está en el futuro;
5. ejecuta `PUT /preapproval/{id}` con `status: "canceled"`;
6. actualiza Supabase;
7. la operación es idempotente si la suscripción ya estaba cancelada.

## Entitlement

Mercado Pago deja de renovar al pasar la suscripción a `canceled`. La Expedición conserva por su cuenta el derecho de acceso hasta `access_until` cuando había un periodo pagado vigente.

El metadato se guarda dentro de `subscriptions.raw_provider_data._expedicion`, por lo que no se necesita migración SQL.

`subscription-status.js` considera acceso válido cuando:
- `status === "authorized"`, o
- `status === "canceled"` y `access_until` todavía está en el futuro.

## Webhook

El webhook preserva los metadatos internos `_expedicion` cuando refresca el objeto de Mercado Pago, evitando perder `access_until` y `canceled_at`.

## Prevención de cobro duplicado

`subscription-create.js` bloquea una nueva suscripción cuando:
- existe una `authorized`, o
- existe una `canceled` cuyo `access_until` aún no vence.
