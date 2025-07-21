//array
const peliculas = [
    {titulo :"Titanic", director : "James Cameron", genero: "Romance", año: 1997},
{titulo: "Lo imposible", director: "Juan Antonio Bayona", genero:"Drama", año: 2012},
{titulo: "El origen", director: "Christopher Nolan", genero: "Ciencia Ficción", año: 2010 },
{titulo: "El conjuro", director: "James Wan",genero: "Terror", año: 2013 }
]

//acceso al buscador con usuario y clave
const usuario = "Miusuario"
const clave = "1234"

let usuarioIngresado;
let claveIngresada;

while (usuarioIngresado !== usuario || claveIngresada !== clave) {
usuarioIngresado = prompt("Bienvenido a Tu Cartelera. Ingresá tu usuario:".toLowerCase())
claveIngresada = prompt("Ingresá tu clave de acceso:")

if (usuarioIngresado !== usuario || claveIngresada !== clave) {
    alert("Usuario o clave incorrectos. Intentá de nuevo.")}
}

alert ("Bienvenido")
menuPrincipal();

// menu principal 
function menuPrincipal(){
    let continuar = true
    while (continuar) {
        let opcionElegida = Number(prompt ("Bienvenido a Tu Cartelera\n ¿Qué desea hacer? \n 1- Buscar Peliculas \n 2- Agregar peliculas\n 3-Salir"))
    if (opcionElegida == 1) {
        Buscardor ()
    }
    else if (opcionElegida == 2) {agregarPelicula ()}
    else if (opcionElegida == 3) {
        const confirmarSalida = confirm ("¿Está seguro que desea salir?");
        if (confirmarSalida) {continuar = false;
        alert ("Gracias por usar Tu cartelera")}
    }
    else {alert ("La opción ingresada no es valida, porfavor ingrese 1, 2 o 3")}}}

// Buscador de pelis

function Buscardor () {
    let comoBuscar = Number(prompt ("Porfavor ingrese un criterio de busqueda:\n 1-Título de la pelicula\n 2- Director \n 3- Género \n 4- Año"))

    if(comoBuscar == 1) { busquedaPorTitulo()}
    else if (comoBuscar === 2) {busquedaPorDirector()}
    else if (comoBuscar === 3) {busquedaPorGenero()}
    else if (comoBuscar === 4) {busquedaPorAño ()}
    else {alert ("Opción no disponible")}
}

function busquedaPorTitulo(){
    const arrayTitulos = []

    for ( let i=0; i < peliculas.length ;i++){arrayTitulos.push(peliculas[i].titulo.toLowerCase())}
    let tituloABuscar = prompt ("Porfavor ingrese el nombre de la pelicula").toLowerCase()

    let index = arrayTitulos .indexOf (tituloABuscar)

    if (index == -1) {alert ("Su busqueda no arrojó ningun resultado")}

    else {alert ("La pelicula ingresada fue dirigida por:\n" + peliculas[index].director)}
    }

function busquedaPorDirector() {
    const arrayDirector = []

    for (let i= 0; i<peliculas.length ; i++){arrayDirector.push (peliculas[i].director.toLowerCase())}
    let directorABuscar = prompt ("Porfavor ingrese el director de la pelicula").toLowerCase()
    let index = arrayDirector .indexOf (directorABuscar)

    if (index == -1) {alert ("Su busqueda no arrojó ningun resultado")}

    else {alert ("El director ingresado dirigió la pelicula:\n" + peliculas[index].titulo)}
}

function busquedaPorGenero () {
    const arrayGenero = [] 

    for(let i=0 ; i<peliculas.length; i++) {arrayGenero.push (peliculas[i].genero.toLowerCase())}

    let generoABuscar = prompt ("Porfavor ingrese el genero de la pelicula").toLowerCase()
    let index = arrayGenero .indexOf (generoABuscar)

    if (index == -1) {alert ("Su busqueda no arrojo ningun resultado")}

    else {alert ("El género buscado arroja la siguiente pelicula:\n" + peliculas[index].titulo + " del director :" + peliculas[index].director)}
}

function busquedaPorAño () {
    const arrayAño = []

    for (let i=0; i< peliculas.length; i++){arrayAño.push (peliculas[i].año)}

    let añoABuscar =Number ( prompt ("Porfavor ingrese el año de la pelicula"))
    let index = arrayAño .indexOf (añoABuscar)

    if (index == -1) {alert ("No se encontró ninguna pelicula con ese año")}

    else {alert ("El año indicado arroja el siguiente resultado:\n" + peliculas[index].titulo + " del director " + peliculas[index].director)}

}

//Agregar Peliculas

function agregarPelicula () {
let nuevoTitulo = prompt ("Ingrese el título de la pelicula")
let nuevoDirector = prompt ("Ingrese el director") 
let nuevoGenero = prompt ("Ingrese el genero de la pelicula")
let nuevoAño = Number(prompt ("Ingrese el año de la pelicula"))

if (nuevoTitulo && nuevoDirector && nuevoGenero && !isNaN(nuevoAño)) {
    peliculas .push ({
    titulo: nuevoTitulo,
    director: nuevoDirector,
    genero: nuevoGenero,
    año: nuevoAño,
    })
    console.log(peliculas);
    
    alert (`La pelicula ${nuevoTitulo} fue agregada con éxito`)}

    else {alert ("No es posible agregar la pelicula, porfavor revisá los datos ingresados")}
}



