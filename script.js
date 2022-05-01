//alert("hola");
//con alert("") mostramos un mensaje en el navegador, es un pop up
// las variables declaradas como let no permiten declarar dos veces la misma variable, con esto se evitan varios errores.
//por otro lado las variables let viven dentro de su objeto, pueden ser globales o pueden vivir dentro de su función (dentro de su "scope").

let nombrePersona = "Miguel";
let edad = 34;
let datos = nombrePersona+" tiene "+edad+" años";

const color_rojo = "#FF0000";
//alert(nombre+" tiene "+edad+" años");

//envía datos a la consola
console.log(datos);

// acá guardo en una constante la forma de ir a buscar un objeto del html en este caso el elemento que tenga por id "contenido"
const contenido = document.getElementById("contenido");

//con la función innerHTML se agrega contenido directamente en el objeto seleccionado
contenido.innerHTML = "Hola Mundo";
//con el += lo que se hace es concatenar (suma), así se pueden seguir escribiendo datos sin borrar lo anterior
contenido.innerHTML += "<h2>Prueba de títulos</h2>";
contenido.innerHTML += "<p>"+datos+"</p>";

if(edad < 18){
    contenido.innerHTML += "Eres menor de edad";
}else if(edad > 19 && edad < 30){
    contenido.innerHTML += "Tienes menos de 30";
}else{
    contenido.innerHTML += "eres adulto";
}

for(i=0; i < 5; i++){
    console.log(i);
}

//de este modo se crea una función, lo idea es crear funciones así no se reescribe tantas veces el mismo código, solo llamar a la función y agregar el contenido en su parámetro
function addContent(newContent){
    contenido.innerHTML += newContent;
}

addContent("<p>Datos desde la funcion</p>");

let array = [23, 42, 54, 31];
console.log(array);
//con .push uno puede agregar un dato a un array
array.push(40);

for(let i=0; i< array.length; i++){
    addContent("<p>el número es: "+array[i]+" posición: "+i+"</p>");
}

// así se crea un objeto en javascrip, los datos van separados por comas.
const persona = {
    nombre: "Miguel",
    edad: 20
}

//al ser una constante, los valores no se podrían cambiar, pero al ser objeto esto cambia.
persona.edad = 34;
//también puedo agregar nuevos items en el objeto a pesar de ser una constante
persona.pais = "chile";

console.log(persona);


//FUNCIONES

//nueva forma de hacer funciones de flecha, con este tipo de funciones uno puede eliminar los paréntisis si es que la función toma un solo parámetro, por ejemplo const sumarDos = num =>{...}
const sumarDos = (num1,num2) =>{
    console.log(num1+num2);
}
sumarDos(5,10);

/*const sumarDosRetornando = (num1,num2) =>{
    return (num1 + num2);
}*/
//al ser una funcón de flecha, nos permite reducir el código, ya que si es una función simple que tiene que retornar un dato, entonces se pueden eliminar las llaves y el comando return, como se ve en las diferencias de uno y otro
const sumarDosRetornando = (num1,num2) => (num1 + num2);

//el retorno de la función se guarda en la constante resultado
const resultado = sumarDosRetornando (25,30);
console.log(resultado);

//si la función no tiene parámetros, los paréntesis tienen que estar, si es un solo parámetro se pueden eliminar los paréntesis.
//luego para retornar, por lo general lo que está dentro de las paréntesis se va a retornar, sin la necesidad de escribir return
const mensaje = nombre => ("hola " + nombre);

const respuesta = mensaje("Gonzalez");
console.log(respuesta);

//dentro de este tipo de funiones uno puede declarar la variable del parámetro, así si la función no recibe datos esto será 0 y evitará el error NaN, si el usuario envía un dato el 0 se reemplaza de la variable
const suma3= (num=0) => {
    console.log(num + 3);
}
suma3(9);

//TEMPLATE STRING
/*const numString = (num) =>{
    return "el numero es "+ num;
}*/

//para combinar string y datos de javascrip se utiliza las comillas invertidas (alt+96), lo otro que nos permite es concatenar sin utilizar el más y ejecutando lógina de javascript, por ejemplo sumar, eso se realiza de la siguiente forma, dentro de las comillas invertidas van ${}

/*const numString = (num1,num2) =>{
    return `el numero es ${num1+num2}`
}*/

//forma reducida
const numString = (num1,num2) =>(
    `el numero es ${num1+num2}`
    );

let mensajeString = numString(10,20);
console.log(mensajeString);

//OBJETOS
//los objetos se crean a partir de variables abriendo llaves{}
const mascota = {
    nombre: "keira",
    edad: 6,
    vivo: true,
    caracteristicas: ["peludo", "negro"]
}
//escribiendo el objeto y agregando una nueva propiedad y valor, se crea o agrega una nueva propiedad
mascota.id = 01;

console.log(mascota); //con esto nos muestra todos los valores del objeto
console.log(mascota.nombre);// con esto nos va a mostrar una propiedad en específico del objeto
console.log(mascota.caracteristicas)
console.log(mascota.caracteristicas[0])//muestra el valor de un dato del array en específico
console.log(mascota.caracteristicas[1])

//DESCONSTRUCTURING OBJETS
//se crea una nueva forma para tomar un valor de un objeto de manera más reducida
const nombreMascota = mascota.nombre
console.log(nombreMascota);

let {vivo} = mascota;
console.log(vivo);

//OBJETOS DENTRO DE OBJETOS

const web = {
    nombre: "atrezzo",
    link: {
        enlace: "www.atrezzo.com.ar"
    },
    redesSociales: {
        youtube: {
            enlace: "youtube.com/atrezzo",
            nombre: "atrezzoYT"
        }
    }
}
//de esta forma se accede a una cadena de objetos
console.log(web.redesSociales.youtube.enlace);

const {enlace, nombre} = web.redesSociales.youtube;
console.log(nombre);

//USO DE FETCH
//nos permite tomar datos de API
//el parámetro del fetch es la url de donde consigue los datos, luego va un .then y se crea una función en formato json(), ya que los datos vienen desde la api en ese formato.
fetch ("https://pokeapi.co/api/v2/pokemon/")
    .then( (res) => {
         return res.json();
    })
    .then(data => {
        //data y results son valores de objeto que tiene al api.
        console.log(data);
        console.log(data.results);
        //para recorrer el objeto se puede utilizar .forEach y si dentro de cada "element" que es cada objeto, pedimos que nos muestre solo la propiedad nombre, nos va a listar solo los nombres que viene de la api
        data.results.forEach(element => {
            console.log (element.name);
        })
    })
    .catch(error => console.log(error));
    //con catch nos permite ver los mensajes de error de la api, en caso que la base de datos de la api falle, nos va a devolver el mensaje de error de esa base de datos
