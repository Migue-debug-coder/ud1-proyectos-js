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

function ejercicio14() {
     for(let i = 1; i <= 10; i++){
        console.log(i);
     }
}

// ejercicio14();


function ejercicio15() {
    
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

// ejercicio15();

function ejercicio16(){
    const num = parseInt(window.prompt("Introduzca un número para ver su tabla de multiplicar: "));

    console.log(`Tabla de multiplicar del ${num}:`);

    for(let i = 1; i <= 10;i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }

}

// ejercicio16();

function ejercicio17(){
    const num = parseInt(window.prompt("Introduzca un número: "));

    let suma = 0;

    for(let i = 2; i < num; i++){
        suma += i;
    }

    console.log(`El resultado de sumar los números comprendidos entre 1 y ${num} es: ${suma}`);

}

// ejercicio17();

function ejercicio18(){
    const num = parseInt(window.prompt("Introduzca un número: "));

    let factorial = 1;
    
    for(let i = 1; i <= num; i++){
        factorial *= i;
    }

    console.log(`El factorial de ${num} es: ${factorial}`);

}

// ejercicio18();

function ejercicio19(){
    const num = parseInt(window.prompt("Introduzca un número: "));

    console.log(`Los múltiplos de 3 comprendidos entre 1 y ${num} son: `);


    for(let i = 2; i < num; i++){
        if(i % 3 == 0){
            console.log(i);
        }
    }
}

// ejercicio19();

function ejercicio20(){
    let nombre = window.prompt("Introduzca su nombre: ")
    saluda(nombre);
}

function saluda(nombre){
    console.log(`Buenas tardes ${nombre}`);
}

// ejercicio20();

function ejercicio21(){
    let base = parseFloat(window.prompt("Introduzca la base: "));
    let altura = parseFloat(window.prompt("Introduzca la altura: "));
    calcularArea(base,altura);
}

function calcularArea(base,altura){
    let area = base * altura;

    console.log(`El área resultante es: ${area}`);
}

// ejercicio21();

function ejercicio22(){
    const edad = parseInt(window.prompt("Introduzca su edad: "));

    esMayorDeEdad(edad);

}

function esMayorDeEdad(edad){
    if(edad <= 0){
        console.error("No se puede tener una edad negativa o 0");
    }else if(edad >= 18){
        console.log("Eres mayor de edad")
        if(edad >= 100){
            console.log("Tienes más de 100 años, eres muy longevo enhorabuena");
        }
    }else if(edad < 18){
        console.log("Eres menor de edad");
    }
}

// ejercicio22();

function ejercicio23(){
    let num1 = parseFloat(window.prompt("Introduzca el número 1: "));
    let num2 = parseFloat(window.prompt("Introduzca el número 2: "));

    esMayor(num1,num2);

}

function esMayor(num1, num2){
    let mayor = 0;
    let menor = 0;

    if(num1 > num2){
        mayor = num1;
        menor = num2;
    }else if(num1 < num2){
        mayor = num2;
        menor = num1;
    }

    console.log(`El número ${mayor} es mayor que el ${menor}`);
}

// ejercicio23();

//El 24 es el mismo que el 3

function ejercicio25(){
    let num1 = parseFloat(window.prompt("Introduzca un número: "));
    let num2 = parseFloat(window.prompt("Introduzca un número: "));

    calculadora(num1,num2);

}

function suma(num1,num2){
    console.log(`El resultado de sumar ${num1} y ${num2} es: ${num1 + num2}`);
}
function resta(num1,num2){
    console.log(`El resultado de restar ${num1} y ${num2} es: ${num1 - num2}`);
}
function multiplicacion(num1,num2){
    console.log(`El resultado de multiplicar ${num1} y ${num2} es: ${num1 * num2}`);
}
function division(num1,num2){    
    if(num2 == 0){
        console.error("No se puede dividir por 0 ya que el resultado es Infinito");
    }else{
        console.log(`El resultado de dividir ${num1} y ${num2} es: ${num1 / num2}`);
    }
}

function calculadora(num1,num2){
    console.log("Bienvenido a la calculadora. \n",
        "a) Suma \n",
        "b) Resta \n",
        "c) Multiplicación \n",
        "d) División \n",
        "e) Salir \n",
    );

    let operacion = window.prompt("¿Que operación desea realizar?: ");

    switch(operacion){
        case "a":
            suma(num1,num2);
            break;
        case "b":
            resta(num1,num2);
            break;
        case "c":
            multiplicacion(num1,num2);
            break;
        case "d":
            division(num1,num2);
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

function ejercicio26(){
    let nota = parseFloat(window.prompt("Introduzca una nota: "));
    console.log(validadorNotas(nota));
}

function validadorNotas(nota){
    let mensaje = null;

    if(nota < 0 || nota > 10){
        mensaje = "Debes introducir una nota válida";
    }else if(nota >= 0 && nota < 5){
        mensaje = "Suspenso";
    }else if(nota >= 5 && nota < 6){
        mensaje = "Suficiente";
    }else if(nota >= 6 && nota < 7){
        mensaje = "Bien";
    }else if(nota >= 7 && nota < 9){
        mensaje = "Notable";
    }else if(nota >= 9 && nota <= 10){
        mensaje = "Sobresaliente";
    }

    return mensaje;
}

ejercicio26();