function obtenerArea(){
    var areaResultado = document.getElementById("areaResultado");
    var b = parseInt(document.getElementById("base").value);
    var h = parseInt(document.getElementById("altura").value);
    var area = (b * h) / 2;
    var perimetro = (b * 3);
    areaResultado.innerHTML = "" + area;
    perimetroResultado.innerHTML = "" + perimetro;
}