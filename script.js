function ejecutarEjercicio() {
  const valor = 100; // valor que vamos a comprobar
  const resultado = document.getElementById("resultado");

  if (valor === 100) {
    resultado.textContent = "✅ ¡Correcto! El valor es exactamente igual a 100.";
  } else {
    resultado.textContent = "❌ El valor no es igual a 100.";
  }
}
