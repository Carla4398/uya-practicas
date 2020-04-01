function getAllParaElems()
{
  var allp = document.getElementsByTagName("p");

  var nump = allp.length;
  
  var alle = document.getElementsByTagName("a");

  var nume = alle.length;
  
  var allh = document.getElementsByTagName("head");

  var numh = allh.length;

  alert("Hay "+ nump + " elementos <p>, " + nume + " elementos <a> y "+ numh + " elementos <head> en este documento");
  
}

