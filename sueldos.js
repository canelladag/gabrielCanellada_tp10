// 1. Declaración y asignación de variables
let nombre = "Fulano";
let apellido = "Mengano";
let sueldoActual = 20000;
let porcentajeAumento = 25;

// 2. Cálculo del aumento
let calculoAumento = (sueldoActual * porcentajeAumento) / 100;

// 3. Cálculo del nuevo sueldo
let nuevoSueldo = sueldoActual + calculoAumento;

// 4. Mostrar los resultados en la consola
console.log(`Hola, estimad@ ${nombre} ${apellido}`);
console.log(`En base a su sueldo actual: $${sueldoActual}`);
console.log(`Ha recibido un aumento del ${porcentajeAumento}%: $${calculoAumento}`);
console.log(`y su nuevo sueldo es de: $${nuevoSueldo}`);