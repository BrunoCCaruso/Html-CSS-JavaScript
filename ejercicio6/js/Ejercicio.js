
////////////////////////// CREACIÓN DE FORMULARIO ///////////////////////////

vForm1 = document.createElement("form");
vForm1.name = "Formulario";
vForm1.id = "formId";
vForm1.method = "POST";


////////////////// -------------- NOMBRE --------------- ////////////////////////

vLabel_Nombre = document.createElement("label");
vLabel_Nombre.textContent = "Nombre : "
vForm1.appendChild(vLabel_Nombre);


vForm_Input = document.createElement("input");
vForm_Input.type = "text";
vForm_Input.name = "nombre";
vForm_Input.id = "nombre";
vForm_Input.setAttribute("value","");
vForm1.appendChild(vForm_Input);

/////////////////// Salto de línea ///////////////////////////
vSaltodelinea=document.createElement("br");
vForm1.appendChild(vSaltodelinea);
//////////////////////////////////////////////////////////////



//////////////////// ------------- FECHA ---------------- ////////////////////////

vLabel_Nombre = document.createElement("label");
vLabel_Nombre.textContent = "Fecha : "
vForm1.appendChild(vLabel_Nombre);

vFecha_Input = document.createElement("input");
vFecha_Input.type = "date";
vFecha_Input.name = "fecha";
vFecha_Input.id = "fecha";
vFecha_Input.setAttribute("value","");
vForm1.appendChild(vFecha_Input);


//////////////// salto de línea ///////////////////////
vSaltodelinea2=document.createElement("br");
vForm1.appendChild(vSaltodelinea2);
///////////////////////////////////////////////////////



//////////////// --------------- TELÉFONO ----------------- ///////////////////////

vLabel_Nombre = document.createElement("label");
vLabel_Nombre.textContent = "Teléfono : "
vForm1.appendChild(vLabel_Nombre);

vNumber_Input = document.createElement("input");
vNumber_Input.type = "number";
vNumber_Input.name = "telefono";
vNumber_Input.id = "telefono";
vNumber_Input.setAttribute("value","");
vForm1.appendChild(vNumber_Input);


//////////////// salto de línea ///////////////////////
vSaltodelinea3=document.createElement("br");
vForm1.appendChild(vSaltodelinea3);
///////////////////////////////////////////////////////



/////////////////// ------------ EMAIL ----------------- ///////////////////////////////

vLabel_Nombre = document.createElement("label");
vLabel_Nombre.textContent = "Email : "
vForm1.appendChild(vLabel_Nombre);

vEmail_Input = document.createElement("input");
vEmail_Input.type = "email";
vEmail_Input.name = "email";
vEmail_Input.id = "email";
vEmail_Input.setAttribute("value","");
vForm1.appendChild(vEmail_Input);


//////////////// salto de línea ///////////////////////
vSaltodelinea3=document.createElement("br");
vForm1.appendChild(vSaltodelinea3);
///////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////                                           VALIDACIÓN                                              //////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

vForm1_Input2 = document.createElement("input");
vForm1_Input2.type = "submit";
vForm1_Input2.name = "validar";
vForm1_Input2.id = "validar";
vForm1_Input2.setAttribute("onClick","return validarForm()")
vForm1_Input2.value = "Enviar";
vForm1.appendChild(vForm1_Input2);
document.body.appendChild(vForm1);


vInfoValid = document.createElement("div");
vInfoValid.id = "infoValidacion";
document.body.appendChild(vInfoValid);


function actualizarInfo(pText){
    document.getElementById("infoValidacion").innerText = pText;
    document.getElementById("infoValidacion").style.color = "red";
    document.getElementById("infoValidacion").style.fontFamily = "Calibri";
    document.getElementById("infoValidacion").style.fontSize = "x-large";
}

function validarForm(){
    var vCampoNombre = document.getElementById("nombre");
    var vCampoFecha = document.getElementById("fecha");
    var vCampoTelefono = document.getElementById("telefono");
    var vCampoEmail = document.getElementById("email");
    var vValidar = true;
    

    if (vCampoNombre.value.trim() == ""){
        actualizarInfo("*Debe ingresar un nombre");
        diseñosIncorrecto(vCampoNombre);
        vValidar = false;
    }else{
        if(vCampoNombre.value.length < 3 ){
            actualizarInfo("*El nombre debe de tener más de 2 caracteres");
            diseñosIncorrecto(vCampoNombre);
            vValidar = false;
        }else{
            diseñoCorrecto(vCampoNombre);

            if (vCampoFecha.value.trim() == ""){
                actualizarInfo("*Debe ingresar una fecha");
                diseñosIncorrecto(vCampoFecha);
                vValidar = false;
            }else{
                diseñoCorrecto(vCampoFecha);

                if (vCampoTelefono.value.trim() == ""){
                    actualizarInfo("*Debe ingresar un número de teléfono");
                    diseñosIncorrecto(vCampoTelefono);
                    vValidar = false;
                }else{
                    diseñoCorrecto(vCampoTelefono);
    
                    if (validacionEmail(vCampoEmail.value) == false){
                        actualizarInfo("*Debe ingresar una dirección de Email válida");
                        diseñosIncorrecto(vCampoEmail);
                        vValidar = false;
                    }else{
                        diseñoCorrecto(vCampoEmail);
                    }
                }    
            }
        }
    }
    
    return vValidar;
           
}
///////////////////////////////// Pattern //////////////////////////////////////////////

function validacionEmail(pEmail){
    var vPatron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (vPatron.test(pEmail))
    {
        return true;
    }else{
        return false;
    }
}

//////////////////////////////////// DISEÑOS /////////////////////////////////////////////

document.body.style.backgroundColor = "rgb(169, 248, 255)";

vDiseñoForm = document.getElementById("formId");
vDiseñoForm.style.backgroundColor = "rgb(152, 255, 229)"; 
vDiseñoForm.style.padding = "10px";
vDiseñoForm.style.borderRadius = "20px";
vDiseñoForm.style.fontSize = "xx-large";
vDiseñoForm.style.fontFamily = "Calibri";
vDiseñoForm.style.textAlign = "center";
vDiseñoForm.style.borderStyle = "groove"; 

vDiseñoNombre = document.getElementById("nombre");
vDiseñoNombre.style.fontSize = "x-large";
vDiseñoNombre.style.fontFamily = "Calibri";

vDiseñoFecha = document.getElementById("fecha");
vDiseñoFecha.style.fontSize = "x-large";
vDiseñoFecha.style.fontFamily = "Calibri";

vDiseñoTel = document.getElementById("telefono");
vDiseñoTel.style.fontSize = "x-large";
vDiseñoTel.style.fontFamily = "Calibri";

vDiseñoEmail = document.getElementById("email");
vDiseñoEmail.style.fontSize = "x-large";
vDiseñoEmail.style.fontFamily = "Calibri";

vDiseñoValid = document.getElementById("validar");
vDiseñoValid.style.fontSize = "x-large";
vDiseñoValid.style.fontFamily = "Calibri";

function diseñosIncorrecto(vCampo){
    vCampo.style.color = "red";
    vCampo.style.borderColor  = "red";
    vCampo.style.borderWidth = "3px"
    vCampo.style.borderRightWidth = "20px" ;
}

function diseñoCorrecto(vCampo){
    vCampo.style.color = "black";
    vCampo.style.borderColor  = "green";
    vCampo.style.borderWidth = "1px"
    vCampo.style.borderRightWidth = "20px" 
}

