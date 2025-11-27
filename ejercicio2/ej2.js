// 1. if simple
console.log("Ejercicio 1: if simple");
// Escribe una función llamada 'esAdolescente' que tome una edad como parámetro
// y devuelva true si la edad está entre 13 y 19 (inclusive).

function esAdolescente(edad) {
    if (edad >= 13 && edad <= 19) {
        return true;
    }
    return false;
}

console.log(esAdolescente(15)); // true
console.log(esAdolescente(22)); // false



// 2. if-else
console.log("\nEjercicio 2: if-else");
// Devuelve 'Calor' si la temperatura es 30 o mayor, y 'Frío' en caso contrario.

function evaluarTemperatura(temp) {
    if (temp >= 30) {
        return 'Calor';
    } else {
        return 'Frío';
    }
}

console.log(evaluarTemperatura(35)); // 'Calor'
console.log(evaluarTemperatura(20)); // 'Frío'



// 3. if-else if
console.log("\nEjercicio 3: if-else if");
// Devuelve 'Negativo', 'Cero' o 'Positivo'

function clasificarNumero(num) {
    if (num < 0) {
        return 'Negativo';
    } else if (num === 0) {
        return 'Cero';
    } else {
        return 'Positivo';
    }
}

console.log(clasificarNumero(-5)); // 'Negativo'
console.log(clasificarNumero(0));  // 'Cero'
console.log(clasificarNumero(8));  // 'Positivo'



// 4. switch
console.log("\nEjercicio 4: switch");
// Devuelve 'Mamífero' para perro y gato, 'Acuático' para pez, y 'Tipo desconocido' en otros casos.

function obtenerTipoAnimal(animal) {
    switch (animal) {
        case 'perro':
        case 'gato':
            return 'Mamífero';
        case 'pez':
            return 'Acuático';
        default:
            return 'Tipo desconocido';
    }
}

console.log(obtenerTipoAnimal('gato'));  // 'Mamífero'
console.log(obtenerTipoAnimal('pez'));   // 'Acuático'
console.log(obtenerTipoAnimal('ave'));   // 'Tipo desconocido'



// 5. Condicional ternario
console.log("\nEjercicio 5: Condicional ternario");
// Devuelve 'Mayor de edad' si es >=18, de lo contrario 'Menor de edad'.

function evaluarEdad(edad) {
    return edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
}

console.log(evaluarEdad(21)); // 'Mayor de edad'
console.log(evaluarEdad(16)); // 'Menor de edad'



// 6. Combinación de condicionales
console.log("\nEjercicio 6: Combinación de condicionales");
// Devuelve true si edad >=21 y tieneIdentificacion == true

function puedeComprarAlcohol(edad, tieneIdentificacion) {
    if (edad >= 21 && tieneIdentificacion) {
        return true;
    }
    return false;
}

console.log(puedeComprarAlcohol(23, true));  // true
console.log(puedeComprarAlcohol(20, true));  // false
console.log(puedeComprarAlcohol(23, false)); // false


