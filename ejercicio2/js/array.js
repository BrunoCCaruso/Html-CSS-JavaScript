
var vNum1 = 10
var vNum2 = 20
var vValid = true


if (vValid = true) {

    document.write("<br>----- Operaciones básicas -----<br>")

    document.write("<br>"+vNum1 + " + " + vNum2 + " es igual a: " + (vNum1+vNum2) +  "<br>")
    document.write(vNum1 + " - " + vNum2 + " es igual a: " + (vNum1-vNum2) +  "<br>")
    document.write(vNum1 + " * " + vNum2 + " es igual a: " + (vNum1*vNum2) +  "<br>")
    document.write(vNum1 + " / " + vNum2 + " es igual a: " + (vNum1/vNum2) +  "<br>")

    document.write("<br>----- Series favoritas -----<br>")
    var ArrayFavoritas = ["The walking dead", " Squid game", " Ragnarok"," Peaky Blinders"," Cobra Kai"]

    ArrayFavoritas.sort()

    for(var i=0; i<5; i++) {
    document.write("<br>"+ArrayFavoritas[i]+ "<br>") ;
    }
}  









