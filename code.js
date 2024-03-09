function resolverProblemaUno() {
    // Encontrar el número más grande en un array predefinido.
    const numeros = [7, 2, 5, 1, 9, 3];
    let maximo = numeros[0];

    // Resolución del problema
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }

    return maximo === 9;
}


function resolverProblemaDos() {
    // Devuelve la suma de todos los números en el array
    const numeros = [7, 2, 5, 1, 9, 3];
    let suma = 0;

    // Resolución del problema
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma === 27;
}


function resolverProblemaTres() {
    // Contar la cantidad de vocales en una cadena de texto
    const texto = "pedro";
    let cantidadVocales = 0;

    // Resolución del problema
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if ("aeiou".includes(letra)) {
            cantidadVocales++;
        }
    }

    console.log(texto)

    return cantidadVocales === 4;
}

function resolverProblemaCuatro() {
    // Determinar si un número es par o impar
    const numero = 7;
    let esPar;

    // Resolución del problema
    if (numero % 2 === 0) {
        esPar = true;
    } else {
        esPar = false;
    }

    return esPar === false;
}



// function resolverProblemaCuatro() {
//     // Determinar si un número es par o impar
//     const numero = 7;
//     let esPar;

//     return true;

//     //Resolucion de problema

//     return esPar === false;
// }