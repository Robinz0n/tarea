//Llamando a los objetos Texto
var txtCadena;
//Lamando a los objetos Botones
var btnGuardar;
// creamos una varia Regular
 var expRegular=/^[a-z-\d\s]+$/;
 var nTexto ="";
 //expresiones regulares
 var soloNumero=/^\d*$/;
 // funcion PRINCIPAL
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
 }else if(!expRegular.exec(texto)){
    alert("Solo Minusculas y Enteros"); 
    verificar_palabras(texto);
 }
 else if (longitud > 1000 ){
     alert(".:. Texto muy GRANDE .:. ");
     nTexto = texto.substring(0,longitud-1);
     txtCadena.value=nTexto;
     pintar_foco();
 }
 else{
  txtCadena.style.border="4px solid rgb(0,100,0)";
  longitud_numero(texto);
  espacios_blanco(longitud,texto)
 }
 
}
//funcion que nos permite saber si hay dos espacios juntos
function espacios_blanco(longitud,texto){
    var vacio=" ";
    for (var i = 0 ; i < longitud; i++){
        if (texto.charAt(i) == vacio && texto.charAt(i+1) == vacio){
                alert(".:. No debe haber dos espacios vacíos juntos .:.");
                txtCadena.style.border="4px solid rgb(255,255,0)";
                //variable donde vamos a guardar el nuevo texto xk 
                // se va eliminar el ultimo caracter vacío.
                nTexto =texto.substring(0,i+1);
                txtCadena.value=nTexto;
        }
    }
}
//funcion que nos permite verificar cada palabra
function verificar_palabras(texto){
 var longitud=texto.length;
 //vamos a eliminar el ultimo caracter y es vacío
 var ultimo_caracter=texto.charAt(longitud-1);
 if (ultimo_caracter== " "){
    texto=texto.substring(0,longitud-1);
 }
 //quitamos los espacios en vacios para luego insertarlos en un array
 var aPalabras=texto.split(" ");
 var texto_corregido="";
 var letra_borrada="";
 //recorremos todas las palabras
 for(i in aPalabras){
   //guardamos la palabra a analizar
   var palabra = aPalabras[i];
   //verificamos si hay un caracter extraño en la palabra
   if (!expRegular.exec(palabra)){
       //Guardamos en un array todas las letras para ser analizadas
       var aLetras=palabra.split("");
       //recorremos todas las letras
       for (j in aLetras){
        //guardamos la letra 
        var letra=aLetras[j];
        //si esa letra es la extraña
        if (!expRegular.exec(letra)){
           letra="";
        }
        letra_borrada=letra_borrada+letra;
       }
     palabra=letra_borrada;  
   }
   //tenemos que GUARDAR CADA PALABRA corregia o no
   texto_corregido=texto_corregido+" "+palabra;
 }
 
  txtCadena.value=texto_corregido.substring(1);
}
//verificamos el tamaño de de los numeros enteros
function longitud_numero(texto){
 var aPalabras=texto.split(" ");  
 //expresion regular que solo admite letras
 var soloLetra=/^[a-z]+$/;
 //variables necesarias
 var numero_corregidos="";
 var letra_uno="";
 for(i in aPalabras){
    var palabra=aPalabras[i];
    if(!soloLetra.exec(palabra)){
    //primer caracter de la palabra
    letra_uno=palabra.charAt(0);
     //longitud de la palabra
    var lon=palabra.length;
       if(letra_uno == "-"){
          if(lon > 7){
            alert("Numero muy Grande");
            palabra=palabra.substring(0,lon-1);
          }
       }else{
          if (lon > 6){
            alert("Numero muy Grande");
            palabra=palabra.substring(0,lon-1);   
          }
       }
    }
    numero_corregidos=numero_corregidos+palabra+" ";
 }
 
 txtCadena.value=numero_corregidos.substring(0,numero_corregidos.length - 1);
}
