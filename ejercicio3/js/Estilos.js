//// Aplicar color de fondo #fcf79f al documento
document.body.style.backgroundColor = `#fcf79f`

//// Cambiar el color de todos los párrafos (etiqueta p) a verde (#0ca001).
/*
var vColorP1 = document.getElementById(`Parrafo_1`)
var vColorP2 = document.getElementById(`Parrafo_2`)
var vColorP3 = document.getElementById(`Parrafo_3`)
var vColorP4 = document.getElementById(`Parrafo_4`)                ///// Mal /////////

vColorP1.style.color = `#0ca001`
vColorP2.style.color = `#0ca001`
vColorP3.style.color = `#0ca001`
vColorP4.style.color = `#0ca001`
*/
var vColorParrafo = document.getElementsByTagName(`p`)
for (var i=0;i<vColorParrafo.length;i++){
    if (vColorParrafo[i] = `p`){                          //// corregido /////
         vColorParrafo[i].style.color = `#0ca001`   
    }  
}



//// Aumentar el tamaño de la fuente a 24px, solo del elemento con id "destacado"

var vFuente = document.getElementById(`destacado`)

vFuente.style.fontSize = `24px`

//// Cambiar la familia tipográfica por Arial a los títulos (etiqueta h2)

/*var vFamilia = document.getElementById(`Primer_Titulo`)
var vFamilia2 = document.getElementById(`Segundo_Titulo`)         ///// Mal ////////
                                                             
vFamilia.style.fontFamily = `Arial`
vFamilia2.style.fontFamily = `Arial`
*/

var vFamilia = document.getElementsByTagName(`h2`)
for (var i=0;i<vFamilia.length;i++){
    if (vFamilia[i] = `h2`){                                  ///// Corregido  /////
       vFamilia[i].style.fontFamily = `Arial`               
    }  
}

//// Crear un vínculo con la referencia "https://www.lipsum.com"

var vVinculo = document.createElement(`a`)
vVinculo.id = `vinculo`
vVinculo.href = `https://www.lipsum.com`
vVinculo.textContent = "https://www.lipsum.com"

document.body.appendChild(vVinculo)
