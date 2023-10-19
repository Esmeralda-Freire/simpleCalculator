// Variáveis globais
let equation = "";
let errorMessage = false;

// Works to break the display text line 
const display = document.getElementById('display')
const displayCSS = window.getComputedStyle(display)
display.style.maxWidth = displayCSS.width

// Função para atualizar o visor com um valor
function updateDisplay(value) {
  equation += value;
  document.getElementById("display-error-message").style.display = "none";
  document.getElementById("display-value").innerHTML = equation;
}

// Função para lidar com a exclusão de um caractere
function handleDelete() {
  if (equation.length > 0) {
    equation = equation.slice(0, -1);
    document.getElementById("display-value").innerHTML = equation || "0";
  }
}

// Função para redefinir a calculadora
function handleReset() {
  equation = "";
  document.getElementById("display-value").innerHTML = "0";
}

// Função para calcular o resultado da equação
function calculateResult() {
  if (equation.length === 0) return;

  try {
    const result = eval(equation); // Avaliar a expressão
    equation = String(result); // Converter o resultado em string
    document.getElementById("display-value").innerHTML = result;
  } catch (error) {
    document.getElementById("display-error-message").style.display = "inline-block";
  }
}

// Event listener para capturar as teclas pressionadas
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (/[\d+\-*/().]/.test(key)) {
    document.getElementById(key).focus();
    updateDisplay(key);
  } else if (key === "Backspace") {
    document.getElementById("<").focus();
    handleDelete();
  } else if (key === "=" || key === "Enter") {
    document.getElementById("=").focus();
    calculateResult();
  }
});
