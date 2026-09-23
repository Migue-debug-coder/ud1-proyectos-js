// Ejemplo 1
function ejemplo1() {
    console.log("Hola mundo")
}

// ejemplo1();


// Ejemplo 2

function ejemplo2() {
    const nombre1 = "Miguel";
    console.log(`Hola ${nombre1}`);
}

// ejemplo2();

// Ejemplo 3
function ejemplo3() {
    const nombre = window.prompt("Introduce tu nombre: ");
    console.log("Hola " + nombre);
}

// ejemplo3();

// Ejemplo 4 

function ejemplo4() {
    const edad = window.prompt("Introduce tu edad: ");

    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }

}

//ejemplo4();

// Definición de variables: let var const
// const: constante (su valor no varía)
// let: ambito de bloque
// var: ambito de funcion

function ejemplo5() {
    // Definición función
    function calcula_edad() {

        const edad2 = window.prompt("Introduce tu edad: ");

        if (edad2 >= 18) {
            var mensaje = "Eres mayor de edad";
        } else {
            mensaje = "Eres menor de edad";
        }
        console.log(mensaje);
    }

    // Llamada a la función
    calcula_edad();

}

//ejemplo5();

// Ejemplo 6
let auxiliar;
auxiliar = 10;
console.log(auxiliar);

auxiliar = "Mi casa es verde";

console.log(auxiliar);

auxiliar = true;

console.log(auxiliar);

auxiliar = 1432.12;

console.log(auxiliar);

// Ejemplo 7
function potencia(base, exponente) {

    let resultado = 1;

    for (let j = 0; j < exponente; j++) {
        resultado *= base;
    }

    return resultado;
}
let base = 5;
let exponente = 5;

console.log(`El resultado de ${base} elevado a ${exponente} es: ${potencia(base, exponente)}`);







// Ejemplo 8 Mas bucles, solicita numero y muestra acumulado de 10 en 10.

function ejemplo8() {
    function suma_diez(num_vueltas) {
        let result = 0;

        //
        for (let j = 0; j < num_vueltas; j++) {
            result += 10;
        }
        return result;
    }

    let numero_vueltas = window.prompt("Introduzca el numero de vueltas del bucle");
    console.log(suma_diez(numero_vueltas));
}

// ejemplo8();


// Ejemplo 9 Mas bucles, solicita numero y muestra acumulado de 10 en 10. Da error si introduces un numero negativo

function ejemplo9() {
    function suma_diez_v2(num_vueltas_2) {
        let result = 0;

        if (num_vueltas_2 < 0) {
            console.error("El número de vueltas debe ser positivo")

        } else {
            for (let j = 0; j < num_vueltas_2; j++) {
                result += 10;
            }
        }

        return result;
    }

    let numero_vueltas_2 = window.prompt("Introduzca el numero de vueltas del bucle");
    console.log(suma_diez_v2(numero_vueltas_2));

}

// ejemplo9();
// Ejemplo 10: Calculadora. Pide 2 numeros y muestra un menú para que los sume, reste, multiplique o divida segun la opcion marcada Valida los datos

function ejemplo10() {
    function calculadora() {
        let result = 0;
        let num1 = parseInt(window.prompt("Introduzca el primer numero: "));
        let num2 = parseInt(window.prompt("Introduzca el segundo numero: "));

        let salir = false;

        do {
            let opcion = window.prompt("Elija una operación: \n" +
                "a. Suma \n" +
                "b. Resta \n" +
                "c. Multiplicacion \n" +
                "d. Division \n" +
                "e. Potencia \n" +
                "f. Salir");

            switch (opcion) {
                case "a":
                    result = num1 + num2;
                    console.log(`El resultado de sumar ambos números es  ${result}`);
                    break;
                case "b":
                    result = num1 - num2;
                    console.log(`El resultado de restar ambos números es  ${result}`);
                    break;
                case "c":
                    result = num1 * num2;
                    console.log(`El resultado de multiplicar ambos números es  ${result}`);
                    break;
                case "d":
                    if (num2 == 0) {
                        console.error("No se puede dividir por 0 ya que el resultado es Infinito")
                    } else {
                        result = num1 / num2;
                        console.log(`El resultado de dividir ambos números es  ${result}`);
                    }
                    break;
                case "e":
                    resultado = potencia(num1, num2);
                    break;
                case "f":
                    salir = true;
                    console.log("Ha seleccionado Salir de la Calculadora, Hasta la próxima");
                    break;
                default:
                    console.error("Debe introducir un opción válida");
                    salir = true;
            }

        } while (!salir);

    }
    calculadora();
}

// ejemplo10();

// Ejemplo Ternario
function ejemplo11() {
    let precio = 150;
    
    console.log("Precio original: " + precio);

    let edad = window.prompt("Introduce tu edad: ");

    // if(edad >= 18){
    //     precio = precio * 0.80;
    // }else{
    //     precio = precio * 0.75
    // }

    precio = (edad >= 18) ? precio * 0.80 : precio * 0.75;

    console.log("El precio tras el descuento es: " + precio);
}

// ejemplo11();

// Ejemplo 12: Pide el precio del producto por pantalla. Si es superior a 50 euros
// el envío sale gratis. Si no es 5€. El sistema debe mostrar al principio el precio original
// y al final el precio total

function ejemplo12(){

    let precio = parseInt(window.prompt("Introduzca el precio del producto: "));

    console.log("El precio orignial del producto es de " + precio + " euros")

    precio = (precio > 50) ? precio : precio + 5;
    
    console.log("El precio definitivo del producto más los posibles gastos de envío es de "+ precio + " euros");


}

// ejemplo12();

// Ejemplo 13: Crea un programa que calcule un número aleatorio y pida al usuario números hasta que el usuario 
// hasta que lo acierte. Al finalizar, si el número de intentos es superior a 10
// pintará por pantalla !Has perdido! y ¡Has ganado! si es inferior.

function ejemplo13(){
    
    let numero_aleatorio = Math.floor(Math.random() * 100 + 1);

    let numero_usuario;

    let intentos = 0;

    let intentos_restantes = 20;

    while(numero_aleatorio != numero_usuario && intentos_restantes != 0){

        numero_usuario = parseInt(window.prompt("Introduzca un número: "));

        intentos++;

        intentos_restantes--;

        if (intentos_restantes == 0){
            console.log("Te has quedado sin intentos");
        }else if(numero_usuario < numero_aleatorio){
            console.log("El número introducido es menor que el aleatorio");
        }else if(numero_usuario > numero_aleatorio){
            console.log("El número introducido es mayor que el aleatorio");
        }else if(numero_usuario == numero_aleatorio){
            console.log("Has acertado el número aleatorio que era "+ numero_aleatorio);
        }
        

    }

    if(intentos > 10){
        console.log("Has perdido porque has pasado de los 10 intentos");
    }else if(intentos < 10){
        console.log("Lo has hecho en menos de 10 intentos concretamente en "+ intentos+" , Muy bien");
    }
}

ejemplo13();