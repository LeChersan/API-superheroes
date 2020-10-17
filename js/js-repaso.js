console.log( "hola" )



// alert("no se encontro archivo")

let tel = 5527729918
console.log(tel)

let perros = [ "pug", "collie", "labrador" ]
console.log( perros[2] )
console.log( perros[0] )

let persona = { edad:15, tez: "morena", altura: 167 }
console.log( persona.altura)
console.log ( persona )

let soltero = true
console.log( soltero )

// function saludo(){
//     console.log( "se activo la fucion saludar" )
// }
// saludo()

const saludo = () => {
    console.log( "se activo la funcion saludar" )
}
saludo()

let nombre = "maria"
let app = "sanchez"
let apm = "gomez"
let email = "mymail@mail.com"

console.log( "mi nombre es: " + nombre + " " + app + " " + apm +", mi telefono es: " + tel )
console.log( `mi nombre es: ${nombre} ${app} ${apm}, mi telefoneo es: ${tel}`)
console.log( `mi numero favorito es ${5+2}` )

const hello = (tres) => {    
    console.log( tres )
}
hello(email, app, apm, nombre)

// 1) declarar variables
let nombre = "Juan"
let app = "Perez"
let apm = "Hernandez"
let edad = 15
let email = "juan@gmail.com"
// 3) Recibo parametros
// usuario(0=nombre, 1=app, 2=apm, 3=edad, 4=email)
const usuario = (usuarioNombre, usuarioApp, usuarioApm, usuarioEdad, usuarioEmail) => {
    console.log("Hola");
    console.log(usuarioApp);
}
// 2) Enviar variables a la funcion - enviar parametros 
// usuario(0, 1, 2, 3, 4)
usuario(nombre, app, apm, edad, email)







