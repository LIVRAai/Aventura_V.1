# Diagnóstico técnico v10

## Hallazgos principales

1. **Alta de suscripción**: el código recibido usaba `status: pending` + redirección a `init_point`. El backend sí lograba crear la suscripción, pero el método de pago quedaba sin asociar.
2. **Frontend**: el botón de suscripción dependía por completo del checkout alojado externo.
3. **Estado**: la consulta tomaba la fila más reciente; varios intentos `pending` podían ocultar una suscripción activa anterior.
4. **Webhook**: registraba eventos, pero no validaba criptográficamente `x-signature`.
5. **Código temporal**: `api/create-mp-test-user.js` no debía permanecer en producción.

## Solución aplicada

- Captura segura con MercadoPago.js CardForm.
- Creación directa de suscripción autorizada mediante `card_token_id`.
- Persistencia del estado real devuelto por Mercado Pago.
- Priorización de suscripciones `authorized`.
- Validación HMAC-SHA256 de Webhooks.
- Diagnóstico con `x-request-id`.

## No modificado deliberadamente

La lógica pedagógica y las mecánicas del juego no se tocaron para reducir riesgo de regresiones.
