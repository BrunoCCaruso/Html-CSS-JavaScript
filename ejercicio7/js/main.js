///////////////////----- MENSAJE DE EXPLICACIÓN P/ PROFE ----------///////////////////////////////////////////////////////////////////////////////
$(function(){
  $("#dialog").css("background-color","black");
  $("#dialog").css("color","whitesmoke");
  $("#Titulo").css("color","tomato");
  $("#Titulo").css("text-align","center");
  $("#Titulo").css("font-size","50px");
} );

///////////////// -------- TABLA DE USUARIOS REGISTRADOS ------- ///////////////////////////////////////////////////////////////////////
$(function(){
  $("#registrados").css("padding-top","20px");
  $("#registrados").css("padding-left","20px");
  $("#registrados").css("color","whitesmoke");
  $("#registrados").css("font-size","30px");
} );


//////////////////// ------- ENCABEZADO --------- ///////////////////////////////////////////////////////////////////////////////////////
$(function(){
$("header").css("background","url(img/bradcam.png)");
$("header").css("background-size","100% 100%");
$("header").css("background-position","center center");
$("header").css("background-repeat","no-repeat");
$("header").css("color","rgb(231, 253, 250)");
$("header").css("height","100vh");
$("#Evaluacion").css("font-size","40px");
$("#Evaluacion").css("color","#FFFFFF");
$("#Evaluacion").css("background-color","#ebb5db");
$("#Evaluacion").css("padding","10px");
$("#Evaluacion").css("border-radius","20px");
$("#Evaluacion").css("text-align","center");
$("#Descuentos").css("font-size","50px");
$("#Descuentos").css("font-family","fantasy");
$("#logo").css("align-content","center");
$("#Tematica").css("font-size","50px");
$("#Tematica").css("font-family","serif");
$("#Tematica").css("color","rgb(255, 163, 153)");

} );

////////////////// ------ MENÚ INICIAL ---------- ///////////////////////////////////////////////////////////////////////////////////////
$(function(){
  $("#menu").css("text-align","center");
  $("#menu").css("margin","20px");
 
  $(".ui-menu").css("width_","150px");
  $("#menu ul").css("margin","0");
  $("#menu ul").css("padding","0");
  $("#Sesion").css("text-align","right");
  $("#menu ul li").css("display","inline-block");
  $("#menu ul li").css("padding-right","10px");
  $("#menu ul li").css("vertical-align","middle");
  $("#menu ul li a").css("display","inline-block");
  $("#menu ul li a").css("color","rgb(255, 231, 231)");
  $("#menu ul li a").css("text-decoration","none");
} );

//////////////////// -------------- DISEÑO REGISTRO DE USUARIO --------------- /////////////////////////////////////////////////////////////////
$(function(){
  $("#dialog-form").css("background-color","rgb(255, 227, 239)");  
} );


//////////////////------------------- VALIDACIÓN REGISTRO DE USUARIO -----------------//////////////////////////////////////////////////////////////////////////

 $( function() {
  var dialog, form,

    
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    name = $( "#name" ),
    email = $( "#email" ),
    password = $( "#password" ),
    allFields = $( [] ).add( name ).add( email ).add( password ),
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
        min + " y " + max + " caracteres." );
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

    valid = valid && checkLength( name, "nombre de usuario", 3, 16 );
    valid = valid && checkLength( email, "email", 6, 80 );
    valid = valid && checkLength( password, "contraseña", 5, 16 );

    valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "El nombre de usuario puede constar de a-z, 0-9, guiones bajos, espacios y debe comenzar con una letra.." );
    valid = valid && checkRegexp( email, emailRegex, "Ejemplo@bienvenido.com" );
    valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "La contraseña debe poseer únicamente letras de la a-z y números desde 0-9" );

    if ( valid ) {
      $( "#users tbody" ).append( "<tr>" +
        "<td>" + name.val() + "</td>" +
        "<td>" + email.val() + "</td>" +
        "<td>" + password.val() + "</td>" +
      "</tr>" );
      dialog.dialog( "close" );
    }
    return valid;
  }

  dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    height: 450,
    width: 350,
    modal: true,
    
    
    buttons: {
      "Crear una cuenta": addUser,
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

  $( "#Registrarse" ).on( "click", function() {
    dialog.dialog( "open" );
  });
});


//////////////////// ----- BARRA MENU c/opciones de colección ..................../////////////////////////////////////
  $( function() {
    $( "#menu2" ).menu();
    $("#menu2").css("background-color","rgb(171, 130, 194)");
    $("#menu2").css("color","rgb(255, 240, 239)");
    $("#menu2 ul").css("background-color","rgb(255, 227, 250");
    $("#menu2 ul").css("color","rgb(195, 68, 54)");     
    $("#menu2 ul").css("border-style","groove");
    $("#menu2 ul").css("border-color","salmon");  
    $("#menu2 ul").css("cborder-width","2px");  

} );

////////////////// ------- SECCION DE OFERTAS DE TEMPORADA --------- /////////////////////////////////////////////////////////////
$( function() {
  $("#main-container header main").css("margin","0 auto");
  $("#main-container header main").css("width","1400px");
  $("#main-container header main div").css("display","inline-block");
  $("#main-container header main div").css("vertical-align","top");     
  $("#main-container header main .text h1").css("font-size","80px");
  $("#main-container header main .text h1").css("margin","0%");
  $("#main-container header main .text p").css("font-size","24px");
  $("#main-container header main .text p").css("padding","20px 0");
    
} );


















