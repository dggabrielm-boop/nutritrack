// Contrato inicial del dominio. La implementación definitiva se realizará después de validar el wireframe.
export function calculateBmi(weightKg, heightCm) {
  return weightKg / ((heightCm / 100) ** 2);
}
