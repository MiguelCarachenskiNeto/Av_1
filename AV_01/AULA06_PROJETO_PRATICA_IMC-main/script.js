var peso;
var altura;
var imc;
var resultado;
var mensagem;

function Calcular(event) {
  event.preventDefault();
  altura = document.getElementById("altura").value;
  peso = document.getElementById("peso").value;
  mensagem = document.getElementById("mensagen");

  imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
  resultado = imc.toFixed(2);
  if (resultado < 17) {
    mensagem.innerHTML =
      "Muito abaixo do peso -- " + "Seu IMC é de " + resultado;
  } else if (resultado >= 17 && resultado <= 18.49) {
    mensagem.innerHTML = "abaixo do peso -- " + "Seu IMC é de " + resultado;
  } else if (resultado >= 18.5 && resultado <= 24.99) {
    mensagem.innerHTML = "Normal -- " + "Seu IMC é de " + resultado;
  } else if (resultado >= 25 && resultado <= 29.99) {
    mensagem.innerHTML = "Acima do Peso -- " + "Seu IMC é de " + resultado;
  } else if (resultado >= 30) {
    mensagem.innerHTML = "Obeso -- " + "Seu IMC é de " + resultado;
  }
}