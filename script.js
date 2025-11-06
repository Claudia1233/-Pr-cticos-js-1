document.getElementById("btn-ejecutar").addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio() {
  const valor = 100; // Cambiá este valor si querés probar otros casos
  const resultado = document.getElementById("resultado");

  // Mostrar el resultado (sin ocultar las instrucciones)
  resultado.style.display = "block";

  if (valor === 100) {
    resultado.textContent = "🎉 ¡Felicitaciones! El valor es exactamente igual a 100.";
    resultado.style.color = "#155724";
    resultado.style.backgroundColor = "#e6ffed";
    resultado.style.borderColor = "#b6e8c1";
  } else {
    resultado.textContent = "❌ El valor no es igual a 100.";
    resultado.style.color = "#721c24";
    resultado.style.backgroundColor = "#f8d7da";
    resultado.style.borderColor = "#f5c6cb";
  }
}
