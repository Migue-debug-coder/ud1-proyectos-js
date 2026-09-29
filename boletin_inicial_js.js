function ejercicio1() {
    let nombre = window.prompt("Introduzca su nombre: ");

    let edad = parseInt(window.prompt("Introduzca su edad: "));

    let ciudad = window.prompt("Introduzca la ciudad en la que vive: ");

    console.log(`Mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);
}

// ejercicio1();

function ejercicio2() {
    let base = parseInt(window.prompt("Introduzca la base del rectángulo : "));

    let altura = parseInt(window.prompt("Introduzca la altura del rectángulo: "));


    let area = base * altura;

    console.log(`El área del rectángulo con los datos introducidos es de ${area}`);

}

// ejercicio2();

function ejercicio3() {

    let grados_celsius = parseFloat(window.prompt("Introduzca los grados en celsius: "));

    let grados_fahrenheit = (grados_celsius * 1.8) + 32;

    console.log(`Los grados Fahrenheit resultantes son: ${grados_fahrenheit} F`);

}

// ejercicio3();

function ejercicio4() {

    let precio_producto = parseFloat(window.prompt("Introduzca el precio del producto: "));

    let numero_unidades = parseFloat(window.prompt("Introduzca el número de unidades del producto que ha comprado: "));

    let precio_total = Math.round(precio_producto * numero_unidades);

    console.log(`El precio de la compra es de: ${precio_total} euros`);
}

// ejercicio4();

function ejercicio5() {
    let salario_bruto = parseFloat(window.prompt("Introduzca su salario bruto: "));

    let salario_neto = salario_bruto * 0.85;

    console.log(`El salario neto que le corresponde es de ${salario_neto}`);
}

// ejercicio5();

function ejercicio6() {

    const segundos = parseInt(window.prompt("Introduzca los segundos: "));

    const num_horas = Math.floor(segundos / 3600);

    const resto_num_horas = segundos % 3600;

    const num_minutos = Math.floor(resto_num_horas / 60);

    const resto_num_minutos = resto_num_horas % 60;

    const num_segundos = resto_num_minutos;

    console.log(`${segundos} segundos son: ${num_horas} horas, ${num_minutos} minutos y ${num_segundos} segundos.`);

}

// ejercicio6();

function ejercicio7() {
    let a = window.prompt("Introduzca el valor de a: ");

    let b = window.prompt("Introduzca el valor de b");

    let auxiliar = a;

    console.log("ANTES DEL INTERCAMBIO: ");
    console.log("Valor de a = " + a);
    console.log("Valor de b = " + b);

    a = b;

    b = auxiliar;

    console.log("DESPUÉS DEL INTERCAMBIO: ");
    console.log("Valor de a = " + a);
    console.log("Valor de b = " + b);

}

// ejercicio7();

function ejercicio8() {
    let edad = parseInt(window.prompt("Introduzca su edad: "));


    if (edad <= 0) {
        console.log("La edad no puede ser negativa o 0");
    } else if (edad >= 18) {
        console.log("Eres mayor de edad.");
        if (edad >= 100) {
            console.log("Tienes 100 años o más, eres muy longevo, enhorabuena");
        }
    } else if (edad < 18) {
        console.log("Eres menor de edad.")
    }
}

// ejercicio8();

function ejercicio9() {
    let numero = parseFloat(window.prompt("Introduzca un número: "));

    if (numero == 0) {
        console.log("Su número es 0");
    } else if (numero < 0) {
        console.log("Su número es negativo");
    } else if (numero > 0) {
        console.log("Su número es positivo");
    }
}

// ejercicio9();

function ejercicio10() {
    let num1 = parseFloat(window.prompt("Introduzca el número 1: "));
    let num2 = parseFloat(window.prompt("Introduzca el número 2: "));


    if (num1 == num2) {
        console.log("Los números son iguales");
    } else if (num1 > num2) {
        console.log(`El ${num1} es mayor que ${num2}`);
    } else {
        console.log(`El ${num1} es menor que ${num2}`);
    }
}

// ejercicio10();

function ejercicio11() {

    let nota = parseInt(window.prompt("Introduzca una nota para evaluarla: "));

    if (nota < 0 || nota > 10) {
        console.error("La nota debe estar entre 0 y 10");
    } else if (nota >= 0 && nota < 5) {
        console.log("Su nota es un Suspenso");
    } else if (nota >= 5 && nota < 6) {
        console.log("Su nota es un Suficiente");
    } else if (nota >= 6 && nota < 7) {
        console.log("Su nota es un bien");
    } else if (nota >= 7 && nota < 9) {
        console.log("Su nota es un Notable");
    } else if (nota >= 9 && nota <= 10) {
        console.log("Su nota es un Sobresaliente");
    }
}

// ejercicio11();

function ejercicio12() {
    let anio = parseInt(window.prompt("Introduzca un año"));

    if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)) {
        console.log(`El año ${anio} introducido es bisiesto`);
    } else {
        console.log(`El año ${anio} introducido no es bisiesto`);
    }
}

// ejercicio12();

function ejercicio13() {
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

ejercicio13();