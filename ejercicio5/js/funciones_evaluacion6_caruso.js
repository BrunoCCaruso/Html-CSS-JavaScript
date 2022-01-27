
/////////////////////////////////////////////////////////////////////

function CalcularIVA(){
    var vNum = prompt(`Ingrese un número`)          //Pide al usuario que ingrese el número
    var vNumber=Number(vNum)                        //transforma de string a number
    if(condicionador(vNumber)){                     //invoca al condicionador para números negativos y realiza el cálculo
       var vResult = vNumber + (vNumber*0.21);
       mostrarResultados(vNumber,vResult);          //llama a la función mostrarResultados 
    }
}

function condicionador(a){
    if(a>0){
        return true;                                    
    }else{
        alert("El número ingresado es negativo o igual a 0");
        return false;
    }    
}

function mostrarResultados(a,b){
    var vSinIVA = document.createElement(`h2`)
    var vConIVA = document.createElement(`h2`)
    vSinIVA.textContent = "El número ingresado es: " + a 
    vConIVA.textContent = "El número ingresado + IVA (21%) es: " + b 
    document.body.appendChild(vSinIVA);
    document.body.appendChild(vConIVA);
}

////////////////////////////// ADICIONAL /////////////////////////////////////

function actualizar(){             //////////// actualiza la página para reiniciar los cálculos 
    location.reload();
}


