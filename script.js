//alert("hola");
//con alert("") mostramos un mensaje en el navegador, es un pop up
let nombre = "Miguel";
let edad = 34;
let resultado = nombre+" tiene "+edad+" años";

const color_rojo = "#FF0000";
//alert(nombre+" tiene "+edad+" años");

//envía datos a la consola
console.log(resultado);

// acá guardo en una constante la forma de ir a buscar un objeto del html en este caso el elemento que tenga por id "contenido"
const contenido = document.getElementById("contenido");

//con la función innerHTML se agrega contenido directamente en el objeto seleccionado
contenido.innerHTML = "Hola Mundo";
//con el += lo que se hace es concatenar (suma), así se pueden seguir escribiendo datos sin borrar lo anterior
contenido.innerHTML += "<h2>Prueba de títulos</h2>";
contenido.innerHTML += "<p>"+resultado+"</p>";

if(edad < 18){
    contenido.innerHTML += "Eres menor de edad";
}else if(edad > 19 && edad < 30){
    contenido.innerHTML += "Tienes menos de 30";
}else{
    contenido.innerHTML += "eres adulto";
}

for(i=0; i < 10; i++){
    console.log(i);
}

//de este modo se crea una función, lo idea es crear funciones así no se reescribe tantas veces el mismo código, solo llamar a la función y agregar el contenido en su parámetro
function addContent(newContent){
    contenido.innerHTML += newContent;
}

addContent("<p>Datos desde la funcion</p>");

let array = [23, 42, 54, 31];
console.log(array);

for(let i=0; i< array.length; i++){
    addContent("<p>el número es: "+array[i]+" posición: "+i+"</p>");
}