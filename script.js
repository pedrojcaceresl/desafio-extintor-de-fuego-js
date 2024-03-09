function apagarFuego(a) {
    var fuegoElement = document.getElementById('fire' + a);
    var waterElement = document.getElementById('water' + a);

    if (resolverProblema(a)) {
        fuegoElement.style.display = 'none';
        waterElement.src = 'imagenes/sinAgua.jpg';
        document.getElementById('message').innerHTML = '¡Fuego apagado! ¡Bien hecho!';
    } else {
        document.getElementById('message').innerHTML = 'Oops, algo salió mal. ¡Inténtalo de nuevo!';
    }
}

function resolverProblema(a) {
    if (a === 1) {
        return resolverProblemaUno(); // Llama a la función para resolver el primer problema
    } else if (a === 2) {
        return resolverProblemaDos(); // Llama a la función para resolver el segundo problema
    } else if (a === 3) {
        return resolverProblemaTres(); // Llama a la función para resolver el tercer problema
    } 
    
}

function resolverProblemaUno() {
    //Encontrar el número más grande en un array predefinido.
    const numeros = [7, 2, 5, 1, 9, 3];
    let maximo = numeros[0];

    //Resolucion de problema
    
    return maximo === 9;
}

function resolverProblemaDos() {
    // Devuelve la suma de todos los números en el array
    const numeros = [7, 2, 5, 1, 9, 3];
    let suma = 0;

    //Resolucion de problema

    return suma === 27; 
}



function resolverProblemaTres() {
    // Determinar si un número es par o impar
    const numero = 7;
    let impar;

    return true;

    //Resolucion de problema

    return esPar === false; 
}