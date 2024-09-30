// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    const cliente = pedido.shift();
    pedido.unshift("bebida");
    pedido.push(cliente);
    return pedido;
}

// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.lenght; i++) {
        if (numeros[i] % 2 === 0) {
            suma += numeros[i];
        }
    }
    return suma
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    for (let i = 0; i < palabras.lenght; i++) {
        if (!palabras[i].endsWith('a')) {
            return false;
        }
    }
    return true;
}

const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras más largas que ese índice.
function buscaPalabras(words, word) {
    const index = words.indexOf(word);
    if (index === -1) {
        return [];
    }
    const wordLength = word.length;
    return words.filter((w, i) => i > index && w.length > wordLength); // Filtrar palabras más largas
}

const words = ['manzana', 'banana', 'pera', 'uva', 'naranja'];
const word = 'pera';
console.log(buscaPalabras(words, word));


// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    for (let i = 0; i < matrix.lenght; i++) {
        for (let j = 0; j < matrix[i].lenght; j++) {
            if (matrix[i][j] === 'Java') {
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix);
console.log(position);

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < books.length; i++) { // Cambiado 'lenght' a 'length'
        if (books[i] < books[minIndex]) {
            minIndex = i;
        }
        if (books[i] > books[maxIndex]) {
            maxIndex = i;
        }
    }
    return [minIndex, maxIndex];
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]


// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
