window.onload = function () {
  var operar = document.getElementById("operar");
  operar.addEventListener("click", calculadora);

  var recargar = document.getElementById("borrar");
  recargar.addEventListener("click", borrar);

  var primerCampo = document.getElementById("Valor");
  primerCampo.addEventListener("input", campoUno);
};

var campoUno = function () {
  var valorUnoLleno = document.getElementById("Valor").value;

  if (valorUnoLleno) {
    document.getElementById("errorValor").innerHTML = " ";
    document.getElementById("Valor").style.outline = "1px solid #000";
    return true;
  }
};

var borrar = function () {
  window.location.reload(true);
};

var calculadora = function () {
  var valorUno = parseFloat(document.getElementById("Valor").value);
  var operador1 = document.getElementById("operador1").value;
  var operador2 = document.getElementById("operador2").value;
  var resultadoFinal = document.getElementById("resultado");
  var errorMensaje = document.getElementById("errorValor");
  var valorCampoUno = document.getElementById("Valor");
  var resultado;
  errorMensaje = "No se puede cambiar la moneda consigo misma";

  if (isNaN(valorUno)) {
    var primerErrorMensaje = "Por favor ingrese un Numero";
    errorMensajeUno.innerHTML = primerErrorMensaje;
    valorCampoUno.style.outline = "2px solid #f00";
    return false;
  }

  if (operador1 == "euro") {
    switch (operador2) {
      case "dolar":
        resultado = valorUno * 1.09;
        break;
      case "libra":
        resultado = valorUno * 0.88;
        break;
      case "euro":
        resultado = errorMensaje;
        break;
    }
  }

  if (operador1 == "dolar") {
    switch (operador2) {
      case "euro":
        resultado = valorUno * 0.91;
        break;
      case "libra":
        resultado = valorUno * 0.81;
        break;
      case "dolar":
        resultado = errorMensaje;
        break;
    }
  }

  if (operador1 == "libra") {
    switch (operador2) {
      case "euro":
        resultado = valorUno * 1.13;
        break;
      case "dolar":
        resultado = valorUno * 1.24;
        break;
      case "libra":
        resultado = errorMensaje;
        break;
    }
  }

  resultadoFinal.innerHTML = resultado;
};
