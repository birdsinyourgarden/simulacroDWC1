// Ejercicios: Bucles en JavaScript 

// 1. Bucle for
console.log("Ejercicio 1: Bucle for");
// Escribe una función llamada 'mostrarNumeros' que use un bucle for para imprimir
// los números del 1 al 15.

// Tu código aquí

// Llamada a la función
mostrarNumeros();
// Debería imprimir: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15

// 2. Bucle for (suma)
console.log("\nEjercicio 2: Bucle for (suma)");
// Escribe una función llamada 'calcularSuma' que use un bucle for para sumar
// los números del 1 al m, donde m es un parámetro de la función.

// Tu código aquí

console.log(calcularSuma(6));  // Debería mostrar: 21
console.log(calcularSuma(12)); // Debería mostrar: 78

// 3. Bucle while
console.log("\nEjercicio 3: Bucle while");
// Escribe una función llamada 'cuentaRegresiva' que use un bucle while para
// contar regresivamente desde x hasta 1, donde x es un parámetro de la función.

// Tu código aquí

cuentaRegresiva(7);
// Debería imprimir: 7 6 5 4 3 2 1

// 4. Bucle do-while
console.log("\nEjercicio 4: Bucle do-while");
// Escribe una función llamada 'juegoAdivina' que use un bucle do-while para
// simular un juego donde el usuario intenta adivinar un número entre 1 y 20.
// La función debe generar un número aleatorio y "preguntar" al usuario hasta
// que adivine correctamente. (Simula las entradas del usuario con un array de números)

// Tu código aquí

const intentosPrueba = [5, 12, 19, 20]; // Simula las entradas del usuario
juegoAdivina(intentosPrueba);

// 5. Bucle for (array)
console.log("\nEjercicio 5: Bucle for (array)");
// Escribe una función llamada 'buscarMayor' que use un bucle for para encontrar
// el número mayor en un array de números.

// Tu código aquí

console.log(buscarMayor([3, 8, 12, 4, 6])); // Debería mostrar: 12
console.log(buscarMayor([-2, -8, -3]));     // Debería mostrar: -2

// 6. Bucle while (potencia)
console.log("\nEjercicio 6: Bucle while (potencia)");
// Escribe una función llamada 'elevarPotencia' que use un bucle while para calcular
// la potencia de un número. La función debe tomar dos parámetros: base y potencia.

// Tu código aquí

console.log(elevarPotencia(3, 4));  // Debería mostrar: 81
console.log(elevarPotencia(2, 5));  // Debería mostrar: 32

