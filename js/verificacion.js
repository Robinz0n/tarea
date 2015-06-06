//Llamando a los objetos Texto
var txtCadena;
//Lamando a los objetos Botones
var btnGuardar;
// creamos una varia Regular
 var expRegular=/^[a-z-\d\s]+$/;
 var nTexto ="";
window.onload=function (){
 //alert("=)");
 txtCadena=document.getElementById("txtCadena");
 btnGuardar=document.getElementById("btnOrdenar");
 //funcion qu nos permite verificar si esta lleno el txtCadena
 txtCadena.onkeyup=verificar_texto;
 
}
function verificar_texto(){
 //vamos a capturar el valor del campo
 var texto = txtCadena.value;
 //vamos a saber la logitud del texto
 var longitud= texto.length;
 
 function pintar_foco(){
     txtCadena.focus();
     txtCadena.style.border="4px solid rgb(255,255,0)";
     
 }
 //Si el texto es vacío
  if(texto==""){
       pintar_foco();     
  }
 //si el primer caracter del texto en un vacío
 else if(texto.charAt(0)==" "){
     alert(".:. No debe haber espacio en blanco al comenzar el Texto .:. ");
     txtCadena.value="";
     pintar_foco();
 }
 else if (longitud > 1000 ){
     alert(".:. Texto muy GRANDE.:. ");
     nTexto = texto.substring(0,longitud-1);
     txtCadena.value=nTexto;
     pintar_foco();
 }
 else{
  txtCadena.style.border="4px solid rgb(0,100,0)";
  // verificamos si hay dos espacios en blanco juntos
  espacios_blanco(longitud,texto);
  
 }
 
}
//funcion que nos permite saber si hay dos espacios juntos
function espacios_blanco(longitud,texto){
    for (var i = 0 ; i < longitud; i++){
        var vacio=" ";
        if (texto.charAt(i) == vacio){
            if (texto.charAt(i+1) == vacio){
                alert(".:. No debe haber dos espacios vacíos juntos .:.");
                txtCadena.focus();
                txtCadena.style.border="4px solid rgb(255,255,0)";
                //variable donde vamos a guardar el nuevo texto xk 
                // se va eliminar el ultimo caracter vacío.
                nTexto = texto.substring(0,i+1);
                txtCadena.value=nTexto;
            }
        }
    }
}


