//////////////////////////////////////////// CREACIÓN DE USUARIO y validación de DATOS /////////////////////////////////////////////////////////////////////////////////////////

$( function() {
    var dialog, form,  
      
      emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      name = $( "#nombre" ),
      email = $( "#email" ),      
      allFields = $( [] ).add( name ).add( email )
      tips = $( ".validateTips" );
 
    function updateTips( t ) {
      tips
        .text( t )
        .addClass( "ui-state-highlight" );
      setTimeout(function() {
        tips.removeClass( "ui-state-highlight", 1500 );
      }, 500 );
    }
 
    function checkLength( o, n, min, max ) {
      if ( o.val().length > max || o.val().length < min ) {
        o.addClass( "ui-state-error" );
        updateTips( "La longitud de " + n + " debe estar entre " +
          min + " y " + max + "." );
        return false;
      } else {
        return true;
      }
    }
 
    function checkRegexp( o, regexp, n ) {
      if ( !( regexp.test( o.val() ) ) ) {
        o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
      } else {
        return true;
      }
    }
 
    function addUser() {
      var valid = true;
      allFields.removeClass( "ui-state-error" );
 
      valid = valid && checkLength( name, "nombre", 3, 16 );
      valid = valid && checkLength( email, "email", 6, 80 );
      
 
      valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "El nombre de usuario puede constar de a-z, 0-9, guiones bajos, espacios y debe comenzar con una letra." );
      valid = valid && checkRegexp( email, emailRegex, "ejem.plo@ejemplo.com" );
      
 
      if ( valid ) {
        $( "#users tbody" ).append( "<tr>" +
          "<td id='nombre_usuario'>" + name.val() + "</td>" +
          "<td>" + email.val() + "</td>" +
          "<td>" + document.getElementById("conoce").value + "</td>" +
        "</tr>" );
        dialog.dialog( "close" );
      }
      return valid;
    }
 
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: true,
      height: 650,
      width: 450,
      modal: true,
      buttons: {
        "Crear jugador": addUser,
        Cancelar: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });
 
    
  } );


  /////////////////////////// PEDIDO DEL JEFE / CONSIGNA ////////////////////////////////////////////////////////////////////////////////////////////
function pedidojefe(){    
  document.getElementById("pedido").innerHTML = 'Buenas tardes '+document.getElementById("nombre_usuario").textContent+', necesito que organice a nuestros empleados de modo que cada fila y cada columna contengan un trabajador de cada especialización sin repetirse en las mismas. ¡NO QUIERO DESORDEN! Así que no le voy a tomar si no lo organiza adecuadamente. Debe utilizar un patrón. Dele al botón comenzar, le doy 3 minutos.'
  document.getElementById("pedido").style = "background-color: rgb(84, 146, 23); color: white;"  
}

  /////////////////////////////// FUNCIONAMIENTO DEL SELECCIONADOR //////////////////////////////////////////////////////////////////////////////
 
  $( function() {
    $( "#selectable" ).sortable({
      connectWith: ".seleccionador"
    }).disableSelection();
  } );

/////////////////////////////////////////  BOTÓN COMENZAR  //////////////////////////////////////////////////////////////////////////
$( "#comenzar" ).button().on("click", function(){       
         
  document.getElementById("uno").style ="background: url(image/Js.png)";
  document.getElementById("dos").style ="background: url(image/Js.png)";
  document.getElementById("tres").style ="background: url(image/Js.png)";
  document.getElementById("cuatro").style ="background: url(image/Js.png)";
  document.getElementById("cinco").style="background: url(image/html.png)";
  document.getElementById("seis").style="background: url(image/html.png)";
  document.getElementById("siete").style="background: url(image/html.png)";
  document.getElementById("ocho").style = "background: url(image/css.png)";
  document.getElementById("nueve").style = "background: url(image/css.png)";
  document.getElementById("diez").style = "background: url(image/css.png)";
  document.getElementById("once").style = "background: url(image/java.png)";
  document.getElementById("doce").style = "background: url(image/java.png)";
  document.getElementById("trece").style= "background: url(image/php.png)";
  document.getElementById("catorce").style= "background: url(image/php.png)";
  document.getElementById("quince").style="background: url(image/pyton.png)";
  document.getElementById("dieciseis").style="background: url(image/pyton.png)";

  updateClock();
})


///////////////////////////////////////////// CUENTA REGRESIVA ////////////////////////////////////////////////////////////////////////////////////
var totalTime = 180;

function updateClock() {
  
  document.getElementById('cuentaregresiva').innerHTML = totalTime;
  
  if(document.getElementById("pedido").innerHTML == "¡Lo lograste! te subo 20 puntos" ){
    document.getElementById('cuentaregresiva').innerHTML = "Lograste un buen tiempo "+document.getElementById("nombre_usuario").textContent+"!";
  }else{
    if(totalTime==0){
      document.getElementById('cuentaregresiva').innerHTML = 'Se acabó el tiempo '+document.getElementById("nombre_usuario").textContent+', dale a Comenzar juego nuevo.';
      document.getElementById("pedido").innerHTML = "Me fallaste "+document.getElementById("nombre_usuario").textContent+", 20 puntos menos!"
      document.getElementById("pedido").style = "background-color: red; color: white;"
      document.body.style = "background-color: red"
    }else{
      totalTime-=1;
      setTimeout("updateClock()",1000);
    }
  }
}

////////////////////////////// BOTÓN "COMENZAR JUEGO NUEVO" /////////////////////////////////////////////////////////////////////////////////////

$( "#comenzar2" ).button().on("click", function(){
location.reload();                                        // SOLO RECARGA LA PÁGINA
})




///////////////////////////////////// MOSTRAR SOLUCIÓN / AYUDA ////////////////////////////////////////////////////////////////////////////////////

$( "#Seccion_3" ).on("click", function(){
  document.getElementById('Seccion_3').innerHTML = 'Arma todas las diagonales de un mismo sentido con un mismo color';
  document.getElementById('Seccion_3').style = "font-size: 30px";
})



/////////////////////////////////////// VERIFICADORES PARA EL JUEGO //////////////////////////////////////////////////////////////////////////////

var array = document.getElementsByClassName("ui-state-default");       /// UBICO LOS ELEMENTOS EN UN ARRAY 


$( ".seleccionador" ).on("mouseover", function(){
 ///////////////////////////// VERIFICADOR DEL COLOR VERDE ///////////////////////////////////////////////////////////////////////////////////////////////////
 
  var verde1 = false;
  var verde2 = false;
 
 if(array[0].id  == "ui-state-default1" && array[5].id  == "ui-state-default1"&& array[10].id  == "ui-state-default1"&& array[15].id  == "ui-state-default1" ){
  console.log("El color verde 1 está en la posicion correcta")
  verde1 = true;
 }else{
  
 }

 if(array[3].id  == "ui-state-default1" && array[6].id  == "ui-state-default1"&& array[9].id  == "ui-state-default1"&& array[12].id  == "ui-state-default1" ){
  console.log("El color verde 2 está en la posicion correcta")
  verde2 = true;
 }else{
  
 }

 ////////////////////////////// VERIFICADOR DEL COLOR NARANJA /////////////////////////////////////////////////////////////////////////////////////////////// 
 
  var naranja1 = false;
  var naranja2 = false;
  var naranja3 = false;
  var naranja4 = false;

 if(array[1].id  == "ui-state-default2" && array[6].id  == "ui-state-default2"&& array[11].id  == "ui-state-default2"){
  console.log("El color naranja 1 está en la posicion correcta")
  naranja1 = true;
 }else{
  
 }

 if(array[4].id  == "ui-state-default2" && array[9].id  == "ui-state-default2"&& array[14].id  == "ui-state-default2"){
  console.log("El color naranja 2 está en la posicion correcta")
  naranja2 = true;
 }else{
  
 }
 if(array[2].id  == "ui-state-default2" && array[5].id  == "ui-state-default2"&& array[8].id  == "ui-state-default2"){
  console.log("El color naranja 3 está en la posicion correcta")
  naranja3 = true;
 }else{
  
 }

 if(array[7].id  == "ui-state-default2" && array[10].id  == "ui-state-default2"&& array[13].id  == "ui-state-default2"){
  console.log("El color naranja 4 está en la posicion correcta")
  naranja4 = true;
 }else{
  
 }
 

 //////////////////////////// VERIFIVADOR DEL COLOR LILA //////////////////////////////////////////////////////////////////

  var lila1 = false;
  var lila2 = false;
  var lila3 = false;
  var lila4 = false;

 if(array[1].id  == "ui-state-default3" && array[6].id  == "ui-state-default3"&& array[11].id  == "ui-state-default3"){
  console.log("El color lila 1 está en la posicion correcta")
  lila1 = true;
 }else{
  
 }

 if(array[4].id  == "ui-state-default3" && array[9].id  == "ui-state-default3"&& array[14].id  == "ui-state-default3"){
  console.log("El color lila 2 está en la posicion correcta")
  lila2 = true;
 }else{
  
 }
 if(array[2].id  == "ui-state-default3" && array[5].id  == "ui-state-default3"&& array[8].id  == "ui-state-default3"){
  console.log("El color lila 3 está en la posicion correcta")
  lila3 = true;
 }else{
  
 }

 if(array[7].id  == "ui-state-default3" && array[10].id  == "ui-state-default3"&& array[13].id  == "ui-state-default3"){
  console.log("El color lila 4 está en la posicion correcta")
  lila4 = true;
 }else{
  
 }


  //////////////////////////// VERIFICADOR DEL COLOR AZUL //////////////////////////////////////////////////////////////////

  var azul1 = false;
  var azul2 = false;
  var azul3 = false;
  var azul4 = false;
  var azul5 = false;
  var azul6 = false;

  if(array[1].id  == "ui-state-default4" && array[4].id  == "ui-state-default4"){    
    azul1 = true;
   }else{
    
   }
  
   if(array[2].id  == "ui-state-default4" && array[7].id  == "ui-state-default4"){
    azul2 = true;
   }else{
    
   }
   if(array[8].id  == "ui-state-default4" && array[13].id  == "ui-state-default4"){
    azul3 = true;
   }else{
    
   }
  
   if(array[11].id  == "ui-state-default4" && array[14].id  == "ui-state-default4"){
    azul4 = true;
   }else{
    
   }
   if(array[0].id  == "ui-state-default4" && array[15].id  == "ui-state-default4"){
    azul5 = true;
   }else{
    
   }
  
   if(array[3].id  == "ui-state-default4" && array[12].id  == "ui-state-default4"){
    azul6 = true;
   }else{
    
   }


    //////////////////////////// VERIFICADOR DEL COLOR CELESTE //////////////////////////////////////////////////////////////////

  var celeste1 = false;
  var celeste2 = false;
  var celeste3 = false;
  var celeste4 = false;
  var celeste5 = false;
  var celeste6 = false;

  if(array[1].id  == "ui-state-default5" && array[4].id  == "ui-state-default5"){
    celeste1 = true;
   }else{
    
   }
  
   if(array[2].id  == "ui-state-default5" && array[7].id  == "ui-state-default5"){
    celeste2 = true;
   }else{
    
   }
   if(array[8].id  == "ui-state-default5" && array[13].id  == "ui-state-default5"){
    celeste3 = true;
   }else{
    
   }
  
   if(array[11].id  == "ui-state-default5" && array[14].id  == "ui-state-default5"){
    celeste4 = true;
   }else{
    
   }
   if(array[0].id  == "ui-state-default5" && array[15].id  == "ui-state-default5"){
    celeste5 = true;
   }else{
    
   }
  
   if(array[3].id  == "ui-state-default5" && array[12].id  == "ui-state-default5"){
    celeste6 = true;
   }else{
    
   }



    //////////////////////////// VERIFICADOR DEL COLOR ROJO //////////////////////////////////////////////////////////////////

    var rojo1 = false;
    var rojo2 = false;
    var rojo3 = false;
    var rojo4 = false;
    var rojo5 = false;
    var rojo6 = false;

  if(array[1].id  == "ui-state-default6" && array[4].id  == "ui-state-default6"){
    rojo1 = true;
   }else{
    
   }
  
   if(array[2].id  == "ui-state-default6" && array[7].id  == "ui-state-default6"){
    rojo2 = true;
   }else{
    
   }
   if(array[8].id  == "ui-state-default6" && array[13].id  == "ui-state-default6"){
    rojo3 = true;
   }else{
    
   }
  
   if(array[11].id  == "ui-state-default6" && array[14].id  == "ui-state-default6"){
    rojo4 = true;
   }else{
    
   }
   if(array[0].id  == "ui-state-default6" && array[15].id  == "ui-state-default6"){
    rojo5 = true;
   }else{
    
   }
  
   if(array[3].id  == "ui-state-default6" && array[12].id  == "ui-state-default6"){
    rojo6 = true;
   }else{
    
   }




   //////////////////////////////// VERIFICADOR RESULTADO FINAL ///////////////////////////////////////////

   ///// Estas validan TODAS las posibles combinaciones que puedan resultar verdaderas /////////////////////

   if(verde1 && lila1 && naranja2 && azul2 && rojo3 && celeste6){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";
        
   }
   if(verde1 && lila2 && naranja1 && azul3 && rojo2 && celeste6){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";   
   }
   if(verde1 && lila2 && naranja1 && azul2 && rojo3 && celeste6){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!"; 
    document.body.style = "background-color: green";  
   }
   if(verde1 && lila1 && naranja2 && azul3 && rojo2 && celeste6){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"  
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";  
   }



   if(verde1 && lila1 && naranja2 && azul3 && rojo6 && celeste2){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"   
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green"; 
   }
   if(verde1 && lila2 && naranja1 && azul2 && rojo6 && celeste3){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"   
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green"; 
   }
   if(verde1 && lila2 && naranja1 && azul3 && rojo6 && celeste2){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";   
   }
   if(verde1 && lila1 && naranja2 && azul2 && rojo6 && celeste3){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";   
   }



   if(verde1 && lila1 && naranja2 && azul6 && rojo2 && celeste3){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";    
   }
   if(verde1 && lila2 && naranja1 && azul6 && rojo3 && celeste2){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"  
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";  
   }
   if(verde1 && lila2 && naranja1 && azul6 && rojo2 && celeste3){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"  
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";  
   }
   if(verde1 && lila1 && naranja2 && azul6 && rojo3 && celeste2){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";   
   }


   if(verde2 && lila3 && naranja4 && azul1 && rojo4 && celeste5){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";   
   }
   if(verde2 && lila4 && naranja3 && azul1 && rojo4 && celeste5){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";   
   }
   if(verde2 && lila3 && naranja4 && azul4 && rojo1 && celeste5){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!"; 
    document.body.style = "background-color: green";   
   }
   if(verde2 && lila4 && naranja3 && azul4 && rojo1 && celeste5){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"  
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";  
   }



   if(verde2 && lila3 && naranja4 && azul1 && rojo5 && celeste4){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;"
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";    
   }
   if(verde2 && lila4 && naranja3 && azul1 && rojo5 && celeste4){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!"; 
    document.body.style = "background-color: green";  
   }
   if(verde2 && lila3 && naranja4 && azul4 && rojo5 && celeste1){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!"; 
    document.body.style = "background-color: green";  
   }
   if(verde2 && lila4 && naranja3 && azul4 && rojo5 && celeste1){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!"; 
    document.body.style = "background-color: green";  
   }



   if(verde2 && lila3 && naranja4 && azul5 && rojo4 && celeste1){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";   
   }
   if(verde2 && lila4 && naranja3 && azul5 && rojo4 && celeste1){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";
    document.body.style = "background-color: green";   
   }
   if(verde2 && lila3 && naranja4 && azul5 && rojo1 && celeste4){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!"; 
    document.body.style = "background-color: green";  
   }
   if(verde2 && lila4 && naranja3 && azul5 && rojo1 && celeste4){
    document.getElementById("pedido").innerHTML = "¡Lo lograste! te subo 20 puntos"
    document.getElementById("pedido").style = "background-color: green; color: white; font-size: 100px ;" 
    document.getElementById('cuentaregresiva').innerHTML = "¡Bien hecho "+document.getElementById("nombre_usuario").textContent+"!";  
    document.body.style = "background-color: green"; 
   }


})



