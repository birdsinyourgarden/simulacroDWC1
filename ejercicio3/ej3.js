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
// Imprimir cada número multiplicado por 2.

numeros.forEach(num => {
  console.log(num * 2);
});


// 2. forEach con índice
console.log("\nEjercicio 2: forEach con índice");
// Imprimir palabra + índice.

palabras.forEach((palabra, index) => {
  console.log(`Palabra en índice ${index}: ${palabra}`);
});


// 3. Métodos de Date
console.log("\nEjercicio 3: Métodos de Date");
// Crear fecha y cambiar año a 2030.

let fecha = new Date(2024, 5, 10);
fecha.setFullYear(2030);
console.log(fecha);


// 4. Conversión de números
console.log("\nEjercicio 4: Conversión de números");
// Convertir 13.567 a string con 2 decimales.

let numeroConvertido = (13.567).toFixed(2);
console.log(numeroConvertido);


// 5. map con strings
console.log("\nEjercicio 5: map con strings");
// Nuevo array con longitudes.

let longitudPalabras = palabras.map(p => p.length);
console.log(longitudPalabras);


// 6. map con objetos
console.log("\nEjercicio 6: map con objetos");
// Nuevo array solo con nombres.

let soloNombres = personas.map(persona => persona.nombre);
console.log(soloNombres);


// 7. Información de fecha actual
console.log("\nEjercicio 7: Información de fecha actual");

let fechaActual = new Date();
console.log("Año:", fechaActual.getFullYear());
console.log("Mes:", fechaActual.getMonth() + 1);
console.log("Día:", fechaActual.getDate());


// 8. filter con números
console.log("\nEjercicio 8: filter con números");
// Filtrar números pares.

let numerosPares = numeros.filter(n => n % 2 === 0);
console.log(numerosPares);


// 9. filter con objetos
console.log("\nEjercicio 9: filter con objetos");
// Filtrar personas mayores de 27.

let mayoresDe27 = personas.filter(p => p.edad > 27);
console.log(mayoresDe27);


// 10. find
console.log("\nEjercicio 10: find");
// Buscar persona con edad 25.

let persona25 = personas.find(p => p.edad === 25);
console.log(persona25);

