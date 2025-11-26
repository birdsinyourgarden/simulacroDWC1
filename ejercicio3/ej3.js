// Ejercicios: forEach, objects, arrays en JavaScript 

// Datos de ejemplo
const numeros = [1, 2, 3, 4, 5];
const palabras = ['JavaScript', 'es', 'genial'];
const personas = [
  { nombre: 'Ana', edad: 28 },
  { nombre: 'Juan', edad: 32 },
  { nombre: 'María', edad: 25 }
];

// 1. forEach
console.log("Ejercicio 1: forEach");
// Utiliza forEach para imprimir cada número del array 'numeros' multiplicado por 2.

// Tu código aquí

// Resultado esperado:
// 2
// 4
// 6
// 8
// 10

// 2. forEach con índice
console.log("\nEjercicio 2: forEach con índice");
// Utiliza forEach para imprimir cada palabra del array 'palabras' junto con su índice.

// Tu código aquí

// Resultado esperado:
// Palabra en índice 0: JavaScript
// Palabra en índice 1: es
// Palabra en índice 2: genial

// 3. Métodos de Date
console.log("\nEjercicio 3: Métodos de Date");
// Crea una fecha cualquiera y cámbiale el año a 2030 usando setFullYear()

// Tu código aquí

// Resultado esperado: una fecha con año 2030

// 4. Conversión de números
console.log("\nEjercicio 4: Conversión de números");
// Convierte el número 13.567 a un string con exactamente dos decimales.

// Tu código aquí

// Resultado esperado: "13.57"

// 5. map con strings
console.log("\nEjercicio 5: map con strings");
// Utiliza map para crear un nuevo array con la longitud de cada palabra en el array 'palabras'.

// Tu código aquí

console.log(longitudPalabras);
// Resultado esperado: [10, 2, 6]

// 6. map con objetos
console.log("\nEjercicio 6: map con objetos");
// Utiliza map para crear un nuevo array de strings que contenga solo los nombres de las personas en el array 'personas'.

// Tu código aquí

console.log(soloNombres);
// Resultado esperado: ['Ana', 'Juan', 'María']

// 7. Información de fecha actual
console.log("\nEjercicio 7: Información de fecha actual");
// Crea un objeto Date con la fecha actual y muestra por consola:
// - año
// - mes (sumando 1 porque inicia en 0)
// - día del mes 
// usando los métodos correspondientes

// Tu código aquí

// Resultado esperado:
// Año: 2024
// Mes: 11
// Día: 26

// 8. filter con números
console.log("\nEjercicio 8: filter con números");
// Utiliza filter para crear un nuevo array que contenga solo los números pares del array 'numeros'.

// Tu código aquí

console.log(numerosPares);
// Resultado esperado: [2, 4]

// 9. filter con objetos
console.log("\nEjercicio 9: filter con objetos");
// Utiliza filter para crear un nuevo array que contenga solo las personas mayores de 27 años del array 'personas'.

// Tu código aquí

console.log(mayoresDe27);
// Resultado esperado: [{ nombre: 'Ana', edad: 28 }, { nombre: 'Juan', edad: 32 }]

// 10. find
console.log("\nEjercicio 10: find");
// Utiliza find para encontrar la primera persona que tenga exactamente 25 años en el array 'personas'.

// Tu código aquí

console.log(persona25);
// Resultado esperado: { nombre: 'María', edad: 25 }
