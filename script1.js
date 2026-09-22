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
function ejemplo7() {
    function potencia(base, exponente) {

        let resultado = 1;

        for (let j = 0; j < exponente; j++) {
            resultado *= base;
        }

        return resultado;
    }
    let base = window.prompt("Introduce la base: ");
    let exponente = window.prompt("Introduce el exponente: ");
    console.log(`El resultado de ${base} elevado a ${exponente} es: ${potencia(base, exponente)}`);

}

// ejemplo7();




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