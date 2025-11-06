function ejecutarEjercicio() {
  const valor = 100; // Cambiá este valor para probar
  const resultado = document.getElementById("resultado");

  // Mostrar resultado (sin ocultar instrucciones)
  if (valor === 100) {
    resultado.textContent = "🎉 ¡Felicitaciones! El valor es exactamente igual a 100.";
    resultado.style.display = "block";
    resultado.style.color = "#155724";
    resultado.style.backgroundColor = "#e6ffed";
    resultado.style.borderColor = "#b6e8c1";
  } else {
    resultado.textContent = "❌ El valor no es igual a 100.";
    resultado.style.display = "block";
    resultado.style.color = "#721c24";
    resultado.style.backgroundColor = "#f8d7da";
    resultado.style.borderColor = "#f5c6cb";
  }
}
