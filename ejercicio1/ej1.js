// 1. Bucle for
console.log("Ejercicio 1: Bucle for");
// Escribe una función llamada 'mostrarNumeros' que use un bucle for para imprimir
// los números del 1 al 15.

function mostrarNumeros() {
    for (let i = 1; i <= 15; i++) {
        console.log(i);
    }
}

// Llamada a la función
mostrarNumeros();


// 2. Bucle for (suma)
console.log("\nEjercicio 2: Bucle for (suma)");
// Escribe una función llamada 'calcularSuma' que use un bucle for para sumar
// los números del 1 al m, donde m es un parámetro de la función.

function calcularSuma(m) {
    let suma = 0;
    for (let i = 1; i <= m; i++) {
        suma += i;
    }
    return suma;
}

console.log(calcularSuma(6));  // 21
console.log(calcularSuma(12)); // 78


// 3. Bucle while
console.log("\nEjercicio 3: Bucle while");
// Escribe una función llamada 'cuentaRegresiva' que use un bucle while para
// contar regresivamente desde x hasta 1.

function cuentaRegresiva(x) {
    while (x >= 1) {
        console.log(x);
        x--;
    }
}

cuentaRegresiva(7);


// 4. Bucle do-while
console.log("\nEjercicio 4: Bucle do-while");
// Simulación del juego de adivinar con un array de intentos

function juegoAdivina(intentos) {
    const numeroSecreto = Math.floor(Math.random() * 20) + 1;
    console.log("Número secreto (para pruebas):", numeroSecreto);

    let index = 0;
    let intento;

    do {
        intento = intentos[index];
        console.log("Intento:", intento);
        index++;
    } while (intento !== numeroSecreto && index < intentos.length);

    if (intento === numeroSecreto) {
        console.log("¡Adivinaste!");
    } else {
        console.log("No adivinaste, te quedaste sin intentos.");
    }
}

const intentosPrueba = [5, 12, 19, 20];
juegoAdivina(intentosPrueba);


// 5. Bucle for (array)
console.log("\nEjercicio 5: Bucle for (array)");
// Escribe una función llamada 'buscarMayor' que use un bucle for para encontrar
// el número mayor en un array.

function buscarMayor(arr) {
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }
    return mayor;
}

console.log(buscarMayor([3, 8, 12, 4, 6])); // 12
console.log(buscarMayor([-2, -8, -3]));     // -2


// 6. Bucle while (potencia)
console.log("\nEjercicio 6: Bucle while (potencia)");
// Escribe una función llamada 'elevarPotencia' que calcule base^potencia

function elevarPotencia(base, potencia) {
    let resultado = 1;
    let contador = 0;

    while (contador < potencia) {
        resultado *= base;
        contador++;
    }
    return resultado;
}

console.log(elevarPotencia(3, 4));  // 81
console.log(elevarPotencia(2, 5));  // 32


