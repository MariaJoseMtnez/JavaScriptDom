export function sumarIVA(precio) {
  return precio * (1 + IVA);
}
export default function formatearEuros(cantidad) {
  return `${cantidad.toFixed(2)}$`;
}
export const IVA_GENERAL = 0.21;

