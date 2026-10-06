// Mostrar cuadro de diálogo con un mensaje
window.alert("Mensaje de alerta");

// Mostrar una ventana emergente con un mensaje y dos botones:
window.confirm("¿Desea continuar?");

// Despliega una ventana emergente con un campo de texto para que el usuario ingrese información:
let nombre = window.prompt("Ingrese su nombre:");

// Ejecuta una función después de un retraso de 2 segundos (2000 milisegundos):
window.setTimeout(function() {
    console.log("Han pasado 2 segundos");
}, 2000);

// Cancela una temporizacion establecida con setTimeout:
let temporizador = window.setTimeout(function() {
    console.log("Este mensaje no se mostrará");
}, 3000);
window.clearTimeout(temporizador);

// Ejecuta una función de manera repetida a intervalos regulares fijados por el tiempo asignado.
let intervalo = window.setInterval(function() {
    console.log("Este mensaje se mostrará cada 1 segundo");
}, 1000);

// Cancela una temporización establecida con setInterval:
window.clearInterval(intervalo);

//Notifica al navegador que deseas realizar una animación y solicita que llame a la función especificada para actualizar la animación antes del siguiente repintado de la pantalla
window.requestAnimationFrame(function() {
    console.log("Actualizando animación");
});

// Abre una nueva pestaña o ventana del navegador cargando la URL especificada
window.open("https://www.ejemplo.com", "_blank");

// Cierra la ventana actual del navegador
window.close(); 

//Detiene la carga en curso del documento actual
window.stop();

// scrollTo desplaza la página a una posición absoluta de coordenadas (x, y)
window.scrollTo(0, 500);

// scrollBy desplaza la página a una posición relativa de coordenadas (x, y)
window.scrollBy(0, 100);


