// Ejercicio 01
function ejecutarEjercicio1() {
  const valor = 100;
  const resultado = document.getElementById("resultado1");

  if (valor === 100) {
    resultado.textContent = "✅ ¡Correcto! El valor es exactamente igual a 100.";
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

// Ejercicio 02
function ejecutarEjercicio2() {
  const valor = 85;
  const resultado = document.getElementById("resultado2");

  if (valor < 100) {
    resultado.textContent = "✅ ¡Bien! El valor es menor que 100.";
    resultado.style.display = "block";
    resultado.style.color = "#155724";
    resultado.style.backgroundColor = "#e6ffed";
    resultado.style.borderColor = "#b6e8c1";
  } else {
    resultado.textContent = "❌ El valor no es menor que 100.";
    resultado.style.display = "block";
    resultado.style.color = "#721c24";
    resultado.style.backgroundColor = "#f8d7da";
    resultado.style.borderColor = "#f5c6cb";
  }
}
