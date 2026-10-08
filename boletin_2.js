// Ejercicio 1: Introduce un numero de segundos. Introduce ademas 
// un mensaje y dicho mensaje debe aparecer por alert transcurrido 
// esos segundos


function ej1() {
    const segundos = parseInt(window.prompt("Introduzca el número de segundos"));
    const mensaje = window.prompt("Introduzca un mensaje: ");

    window.setTimeout(() => alert(mensaje), (segundos * 1000));
}

// ej1();

// Ejercicio 2
// Modifica el ejercicio anterior para que mientras muestra el 
// mensaje se muestre por consola la cuenta atrás antes de pintarse 
// el mensaje

function ej2() {

    const segundos = parseInt(window.prompt("Introduzca el número de segundos"));

    const mensaje = window.prompt("Introduzca un mensaje: ");

    let contador = segundos;

    const intervalo = setInterval(() => {
        console.log(contador);
        if (contador == 0) {
            clearInterval(intervalo);
        }
        contador--;
    }, 1000)

    setTimeout(() => alert(mensaje), (segundos * 1000));
}

// ej2();

// Ejercicio 3: Pide por promt una URL y redirige la pagina a la misma

function ej3() {
    const url = window.prompt("Introduzca una URL: ");

    window.location.assign(url);
}
// ej3();


// Ejercicio 4: Muestra un menú con varias opciones
// a. Ir atrás 
// b. Ir hacia adelante
// c. Ir a una dirección (entonces la solicitará)
// d. Mostrar la dirección actual
// e. Actualizar Página
// f. No hacer nada. Salir

function ej4() {

    let opcion = window.prompt("Elija una opcion: \n" +
        "a. Ir atrás \n" +
        "b. Ir hacia adelante \n" +
        "c. Ir a una dirección \n" +
        "d. Mostrar la dirección actual \n" +
        "e. Actualizar página \n" +
        "f. Salir");
    switch (opcion) {
        case "a":
            window.history.back();
            break;
        case "b":
            window.history.forward();
            break;
        case "c":
            ej3();
            break;
        case "d":
            console.log(window.location.href);
            break;
        case "e":
            window.location.reload();
            break;
        case "f":
            console.log("Ha seleccionado Salir del menú. Hasta la próxima!")
            break;
        default:
            console.log("Elija una opción válida");
    }

}
// ej4();

//Ejercicio 5
//Al cargar la pagina consulta el nombre de usuario (username)
// almacenado en el localStorage. Si existe saluda, si no lo pide.

function ej5(){
    let nombre = window.localStorage.getItem("username");
    if(nombre == null){
        nombre = window.prompt("Introduzca el nombre de usuario: ");
        window.localStorage.setItem("username",nombre);
    }else{
        console.log(`Bienvenido al sistema ${nombre}`);
    }
}
// ej5();
// window.localStorage.clear();

//Ejercicio 6
//Contador de recargas. Cada vez que el usuario abra la página,
//acceda o actualice debe incrementar el numero de visitas.

function ej6(){
    
}