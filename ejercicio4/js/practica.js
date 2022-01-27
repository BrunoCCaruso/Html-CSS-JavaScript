
var vNum = prompt(`Ingrese un número entre 0 y 25`);       // Pide al usuario el número
var vSigue = true

if (vNum < 0 || vNum > 25){                               // Comprueba si el número es válido
    vSigue = false
    alert(`El número ingresado no es válido`);
        
}
  
if (vSigue==true){                                        // Si es válido sigue la ejecución

    var vletra = prompt(`Ingrese una letra`);            // Pide al usuario una letra

    ///////////////////////////////////////////// Comprueba Coincidencias /////////////////////////////////////////////////////////////////

    var vletras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

    var cont=0

    for(i=0;i<(vletras.length);i++){ 

        if(vletras[i]==vletra.toUpperCase() && vNum ==i){ 
        alert(`El numero `+vNum+` y la letra `+vletra+` coinciden, usted ha ganado!!!`);
        var vGano=true   
        }else{
        cont=cont+1        
        }
    } 
    if (cont==vletras.length){
     alert(`Usted ha perdido`)
     var vGano=false
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////// ADICIONAL ///////////////////////////////////////////////////////////////////////////////////////////////////////////

var result1 = document.createElement(`h4`)
result1.textContent = `número ingresado: `+vNum 
var result2 = document.createElement(`h4`)
result2.textContent = `Letra ingresada: `+vletra

document.body.appendChild(result1)
document.body.appendChild(result2)



if (vGano == true){
    document.body.style.backgroundColor = `green`
    var result3 = document.createElement(`h1`)
    result3.textContent = `¡¡¡ GANÓ !!!`
    document.body.appendChild(result3)


}else{
    document.body.style.backgroundColor = `red`
    var result3 = document.createElement(`h1`)
    result3.textContent = `¡¡¡ PERDIÓ !!!`
    document.body.appendChild(result3)
    }
