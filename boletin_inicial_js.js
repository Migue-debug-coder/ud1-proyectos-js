// 1. Datos personales. Declara variables para almacenar tu nombre, edad y ciudad.
// Muestra por consola una frase con esos datos.

function ejercicio1() {
    let nombre = window.prompt("Introduzca su nombre: ");

    let edad = parseInt(window.prompt("Introduzca su edad: "));

    let ciudad = window.prompt("Introduzca la ciudad en la que vive: ");

    console.log(`Mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);
}

// ejercicio1();

// 2. Área de un rectángulo. Declara las variables necesarias para almacenar la base
// y la altura de un rectángulo y calcula su área.

function ejercicio2() {
    let base = parseInt(window.prompt("Introduzca la base del rectángulo : "));

    let altura = parseInt(window.prompt("Introduzca la altura del rectángulo: "));


    let area = base * altura;

    console.log(`El área del rectángulo con los datos introducidos es de ${area}`);

}

// ejercicio2();

// 3. Conversión de temperatura. Dada una temperatura en grados Celsius, calcula y
// muestra su equivalente en grados Fahrenheit.

function ejercicio3() {

    let grados_celsius = parseFloat(window.prompt("Introduzca los grados en celsius: "));

    let grados_fahrenheit = (grados_celsius * 1.8) + 32;

    console.log(`Los grados Fahrenheit resultantes son: ${grados_fahrenheit} F`);

}

// ejercicio3();

// 4. Precio de una compra. Dado el precio de un producto y el número de unidades
// compradas, calcula y muestra el importe total.


function ejercicio4() {

    let precio_producto = parseFloat(window.prompt("Introduzca el precio del producto: "));

    let numero_unidades = parseFloat(window.prompt("Introduzca el número de unidades del producto que ha comprado: "));

    let precio_total = Math.round(precio_producto * numero_unidades);

    console.log(`El precio de la compra es de: ${precio_total} euros`);
}

// ejercicio4();

// 5. Nómina sencilla. Dado un salario bruto, calcula una retención del 15 % y muestra
// el salario neto.

function ejercicio5() {
    let salario_bruto = parseFloat(window.prompt("Introduzca su salario bruto: "));

    let salario_neto = salario_bruto * 0.85;

    console.log(`El salario neto que le corresponde es de ${salario_neto}`);
}

// ejercicio5();

// 6. Conversión de segundos. Dado un número de segundos, calcula cuántas horas,
// minutos y segundos representa.

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

// 7. Intercambio de valores. Declara dos variables a y b e intercambia sus valores.
// Muestra el resultado antes y después del intercambio.

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

// 8. Mayor de edad. Dada una edad, indica mediante un mensaje si la persona es
// mayor o menor de edad.

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

// 9. Número positivo, negativo o cero. Dado un número, indica si es positivo,
// negativo o igual a cero.

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

// 10. Número mayor. Dados dos números, muestra cuál de ellos es mayor o indica si
// son iguales.

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

// 11. Calificación. Dada una nota entre 0 y 10, muestra si corresponde a un suspenso,
// aprobado, notable o sobresaliente.

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

// 12. Año bisiesto. Dado un año, determina si es bisiesto.

function ejercicio12() {
    let anio = parseInt(window.prompt("Introduzca un año"));

    if ((anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0)) {
        console.log(`El año ${anio} introducido es bisiesto`);
    } else {
        console.log(`El año ${anio} introducido no es bisiesto`);
    }
}

// ejercicio12();

// 13. Calculadora. Dados dos números y un operador (+, -, * o /), realiza la operación
// correspondiente utilizando una estructura de selección.

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
            "e. Salir");

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
                salir = true;
                console.log("Ha seleccionado Salir de la Calculadora, Hasta la próxima");
                break;
            default:
                console.error("Debe introducir un opción válida");
                salir = true;
        }

    } while (!salir);
}

// ejercicio13();

// 14. Números del 1 al 10. Muestra por consola los números del 1 al 10 utilizando una
// estructura de repetición.

function ejercicio14() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// ejercicio14();

// 15. Números pares. Muestra todos los números pares comprendidos entre 1 y 100.

function ejercicio15() {

    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// ejercicio15();

// 16. Tabla de multiplicar. Dado un número, muestra su tabla de multiplicar del 1 al 10

function ejercicio16() {
    const num = parseInt(window.prompt("Introduzca un número para ver su tabla de multiplicar: "));

    console.log(`Tabla de multiplicar del ${num}:`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }

}

// ejercicio16();

// 17. Suma hasta N. Dado un número N, calcula la suma de todos los números
// comprendidos entre 1 y N.

function ejercicio17() {
    const num = parseInt(window.prompt("Introduzca un número: "));

    let suma = 0;

    for (let i = 2; i < num; i++) {
        suma += i;
    }

    console.log(`El resultado de sumar los números comprendidos entre 1 y ${num} es: ${suma}`);

}

// ejercicio17();

// 18. Factorial. Dado un número entero positivo, calcula y muestra su factorial.

function ejercicio18() {
    const num = parseInt(window.prompt("Introduzca un número: "));

    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${num} es: ${factorial}`);

}

// ejercicio18();

// 19. Múltiplos de 3. Dado un número N, muestra todos los múltiplos de 3
// comprendidos entre 1 y N.

function ejercicio19() {
    const num = parseInt(window.prompt("Introduzca un número: "));

    console.log(`Los múltiplos de 3 comprendidos entre 1 y ${num} son: `);


    for (let i = 2; i < num; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

// ejercicio19();

// 20. Función saludar. Crea una función saludar(nombre) que reciba un nombre como
// parámetro y muestre un saludo personalizado.

function ejercicio20() {
    let nombre = window.prompt("Introduzca su nombre: ")
    saluda(nombre);
}

function saluda(nombre) {
    console.log(`Buenas tardes ${nombre}`);
}

// ejercicio20();

// 21. Función para calcular un área. Crea una función calcularArea(base, altura) que
// reciba la base y la altura de un rectángulo y devuelva su área.

function ejercicio21() {
    let base = parseFloat(window.prompt("Introduzca la base: "));
    let altura = parseFloat(window.prompt("Introduzca la altura: "));
    calcularArea(base, altura);
}

function calcularArea(base, altura) {
    let area = base * altura;

    console.log(`El área resultante es: ${area}`);
}

// ejercicio21();

// 22. Función para comprobar la mayoría de edad. Crea una función
// esMayorDeEdad(edad) que devuelva true si la edad es igual o superior a 18 y
// false en caso contrario.


function ejercicio22() {
    const edad = parseInt(window.prompt("Introduzca su edad: "));

    esMayorDeEdad(edad);

}

function esMayorDeEdad(edad) {
    if (edad <= 0) {
        console.error("No se puede tener una edad negativa o 0");
    } else if (edad >= 18) {
        console.log("Eres mayor de edad")
        if (edad >= 100) {
            console.log("Tienes más de 100 años, eres muy longevo enhorabuena");
        }
    } else if (edad < 18) {
        console.log("Eres menor de edad");
    }
}

// ejercicio22();

// 23. Función para obtener el mayor. Crea una función que reciba dos números y
// devuelva el mayor de ellos.

function ejercicio23() {
    let num1 = parseFloat(window.prompt("Introduzca el número 1: "));
    let num2 = parseFloat(window.prompt("Introduzca el número 2: "));

    esMayor(num1, num2);

}

function esMayor(num1, num2) {
    let mayor = 0;
    let menor = 0;

    if (num1 > num2) {
        mayor = num1;
        menor = num2;
    } else if (num1 < num2) {
        mayor = num2;
        menor = num1;
    }

    console.log(`El número ${mayor} es mayor que el ${menor}`);
}

// ejercicio23();

// 24. Función de conversión. Crea una función que reciba una temperatura en grados
// Celsius y devuelva su equivalente en Fahrenheit.

//El 24 es el mismo que el 3

// 25. Calculadora mediante funciones. Crea las funciones sumar(), restar(),
// multiplicar() y dividir(). Después, crea un programa que solicite dos números y una
// operación y utilice la función correspondiente.

function ejercicio25() {
    let num1 = parseFloat(window.prompt("Introduzca un número: "));
    let num2 = parseFloat(window.prompt("Introduzca un número: "));

    calculadora(num1, num2);

}

function suma(num1, num2) {
    console.log(`El resultado de sumar ${num1} y ${num2} es: ${num1 + num2}`);
}
function resta(num1, num2) {
    console.log(`El resultado de restar ${num1} y ${num2} es: ${num1 - num2}`);
}
function multiplicacion(num1, num2) {
    console.log(`El resultado de multiplicar ${num1} y ${num2} es: ${num1 * num2}`);
}
function division(num1, num2) {
    if (num2 == 0) {
        console.error("No se puede dividir por 0 ya que el resultado es Infinito");
    } else {
        console.log(`El resultado de dividir ${num1} y ${num2} es: ${num1 / num2}`);
    }
}

function calculadora(num1, num2) {
    console.log("Bienvenido a la calculadora. \n",
        "a) Suma \n",
        "b) Resta \n",
        "c) Multiplicación \n",
        "d) División \n",
        "e) Salir \n",
    );

    let operacion = window.prompt("¿Que operación desea realizar?: ");

    switch (operacion) {
        case "a":
            suma(num1, num2);
            break;
        case "b":
            resta(num1, num2);
            break;
        case "c":
            multiplicacion(num1, num2);
            break;
        case "d":
            division(num1, num2);
            break;
        case "e":
            console.log("Ha seleccionado salir de la calculadora. Hasta la próxima");
            break;
        default:
            console.error("Introduzca una opción válida")
            break;
    }
}
// ejercicio25();

// 26. Validador de notas. Crea una función que reciba una nota y devuelva un texto
// indicando si es «Suspenso», «Aprobado», «Notable» o «Sobresaliente». Utiliza
// después la función para comprobar varias notas.

function ejercicio26() {
    let nota = parseFloat(window.prompt("Introduzca una nota: "));
    console.log(validadorNotas(nota));
}

function validadorNotas(nota) {
    let mensaje = null;

    if (nota < 0 || nota > 10) {
        mensaje = "Debes introducir una nota válida";
    } else if (nota >= 0 && nota < 5) {
        mensaje = "Suspenso";
    } else if (nota >= 5 && nota < 6) {
        mensaje = "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        mensaje = "Bien";
    } else if (nota >= 7 && nota < 9) {
        mensaje = "Notable";
    } else if (nota >= 9 && nota <= 10) {
        mensaje = "Sobresaliente";
    }

    return mensaje;
}

// ejercicio26();

// 27. Número primo. Crea una función esPrimo(numero) que determine si un número
// es primo. La función deberá devolver true o false.

function ejercicio27() {
    const numero = parseInt(window.prompt("Introduzca un número: "));

    console.log(`¿El número ${numero} es primo?: ${esPrimo(numero)}`);

}

function esPrimo(numero) {
    let es_primo = true;

    if (numero <= 0) {
        console.error("El número no puede ser negativo o 0");
        es_primo = false;
    } else if (numero == 1) {
        es_primo = false;
    } else if (numero > 1) {
        for (let i = 2; i <= numero - 1 && es_primo; i++) {
            if (numero % i == 0) {
                es_primo = false;
            }
        }
    }

    return es_primo;
}

// ejercicio27();

// 28. Adivina el número. Genera un número aleatorio entre 1 y 10. El usuario deberá
// intentar adivinarlo. El programa indicará si ha acertado o si el número introducido
// es mayor o menor que el número secreto.

function ejercicio28() {

    let numero_aleatorio = Math.floor(Math.random() * 100 + 1);

    let numero_usuario;

    let intentos = 0;

    let intentos_restantes = 16;

    while (numero_aleatorio != numero_usuario && intentos_restantes != 0) {

        numero_usuario = parseInt(window.prompt("Introduzca un número: "));

        intentos++;

        intentos_restantes--;

        if (intentos_restantes == 0) {
            console.log("Te has quedado sin intentos");
        } else if (numero_usuario < numero_aleatorio) {
            console.log("El número introducido es menor que el aleatorio");
        } else if (numero_usuario > numero_aleatorio) {
            console.log("El número introducido es mayor que el aleatorio");
        } else if (numero_usuario == numero_aleatorio) {
            console.log("Has acertado el número aleatorio que era " + numero_aleatorio);
        }


    }

    if (intentos > 10) {
        console.log("Has perdido porque has pasado de los 10 intentos");
    } else if (intentos < 10) {
        console.log("Lo has hecho en menos de 10 intentos concretamente en " + intentos + " , Muy bien");
    }
}

// ejercicio28();

// 29. Menú de operaciones. Crea un programa que muestre un menú con las opciones
// «Sumar», «Restar», «Multiplicar», «Dividir» y «Salir». El usuario podrá seleccionar
// una opción y realizar la operación correspondiente. Utiliza funciones, estructuras
// de selección y estructuras de repetición.


// El 29 es el mismo que el 25 y el 13

// 30. Calculadora avanzada. Crea una calculadora que permita realizar operaciones
// de suma, resta, multiplicación, división y potencia. El programa deberá mostrar un
// menú, solicitar los datos necesarios y utilizar una función diferente para cada
// operación. El menú deberá repetirse hasta que el usuario seleccione la opción de
// salir. Controla también la división entre cero.

function ejercicio30() {
    const num1 = parseFloat(window.prompt("Introduzca un número: "));
    const num2 = parseFloat(window.prompt("Introduzca un número: "));
    calculadora_avanzada(num1, num2);
}

function potencia(base, exponente) {

    let resultado = 1;

    for (let j = 0; j < exponente; j++) {
        resultado *= base;
    }

    return resultado;
}

function calculadora_avanzada(num1,num2) {
    let result = 0;
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
                result = potencia(num1, num2);
                console.log(`El resultado de elevar ${num1} a ${num2} es  ${result}`);
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

ejercicio30();