function obtenerValor(idProducto) {
  //Asignamos los valores a las variables obtenidos con los ID
  var cantidad = +document.getElementById("cantidad" + idProducto).value;
  var precio = +document.getElementById("precio" + idProducto).value;
  //Realizamos la multiplicación en otra variable
  var resultado = cantidad * precio;
  //Establecer en el Input la variable con el resultado
  document.getElementById('total' + idProducto).value = resultado;
}


function limpiar() {
  for (var i = 1; i <= 10; i++) {
    //Ponemos vacíos cada elemento de los ID que solicita la página
    document.getElementById("cantidad" + i).value = "";
    document.getElementById("resultado" + i).value = "";
  }
}


function calcular () {
  var importeTotal = 0;

  for (var i = 1; i <= 10; i++) {
    //Asignamos los valores a las variables obtenidos con los ID
    var cantidad = +document.getElementById("cantidad" + i).value;
    var precio = +document.getElementById("precio" + i).value;
    //Realizamos la multiplicación en otra variable
    var resultado = cantidad * precio;
    importeTotal += resultado;
  }

  alert(importeTotal);
}
