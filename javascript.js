// VARIABLES
let numero = 5; // tipo número
let cadenaTexto = "Hola"; // tipo cadena de texto
let booleano = true; // tipo booleano

// Imprimir por la pantalla del navegador y la consola
console.log("Número:", numero);
console.log("Cadena de texto:", cadenaTexto);
console.log("Booleano:", booleano);

// Operaciones matemáticas con variables tipo integer
let resultadoSuma = numero + 3;
let resultadoResta = numero - 2;
let resultadoMultiplicacion = numero * 4;
let resultadoDivision = numero / 2;

// Imprimir resultados por la pantalla del navegador y la consola
console.log("Suma:", resultadoSuma);
console.log("Resta:", resultadoResta);
console.log("Multiplicación:", resultadoMultiplicacion);
console.log("División:", resultadoDivision);

// Concatenar variables tipo texto
let nuevaCadenaTexto = cadenaTexto + " Mundo!";
console.log("Cadena concatenada:", nuevaCadenaTexto);

// FUNCIONES
// Función que imprime un saludo con el nombre
function saludar(nombre) {
  let mensaje = "Hola, " + nombre;
  console.log(mensaje);
}

// Función que devuelve la suma de dos números
function sumaNumeros(num1, num2) {
  let suma = num1 + num2;
  console.log("La suma es:", suma);
  return suma;
}

// Función que determina si un número es par o impar
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log("El número es par.");
  } else {
    console.log("El número es impar.");
  }
}

// Ejemplos de uso de las funciones
saludar("Juan");
let resultadoSumaFuncion = sumaNumeros(10, 20);
esParOImpar(resultadoSumaFuncion);

// OBJETOS
let carro = {
    marca: "Toyota",
    modelo: "Camry",
    anidado: {
      color: "rojo",
      año: 2022
    }
  };
  
  // Función que devuelve la marca del carro
  function obtenerMarca(carro) {
    console.log("Marca del carro:", carro.marca);
    return carro.marca;
  }
  
  // Función que devuelve la cantidad de puertas del carro
  function obtenerCantidadPuertas(carro) {
    console.log("Cantidad de puertas:", carro.cantidadPuertas || "No especificado");
    return carro.cantidadPuertas;
  }
  
  // Función que devuelve un atributo del objeto anidado
  function obtenerAtributoAnidado(carro) {
    console.log("Atributo anidado:", carro.anidado.color);
    return carro.anidado.color;
  }
  
  // Llamada a funciones de objetos
  obtenerMarca(carro);
  obtenerCantidadPuertas(carro);
  obtenerAtributoAnidado(carro);
  
  // ARRAYS
  let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Función que imprime en consola todos los números de un array
  function imprimirNumeros(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  // Función que añade un número al array
  function agregarNumero(array, nuevoNumero) {
    array.push(nuevoNumero);
    console.log("Número añadido:", nuevoNumero);
  }
  
  // Función que elimina los números pares del array
  function eliminarPares(array) {
    array = array.filter(numero => numero % 2 !== 0);
    console.log("Array sin números pares:", array);
    return array;
  }
  
  // Función que devuelve el número mayor de un array
  function obtenerNumeroMayor(array) {
    let maximo = Math.max(...array);
    console.log("Número mayor:", maximo);
    return maximo;
  }
  
  // Función que devuelve el número menor de un array
  function obtenerNumeroMenor(array) {
    let minimo = Math.min(...array);
    console.log("Número menor:", minimo);
    return minimo;
  }
  
  // Función que convierte en minúsculas todas las letras de un texto
  function convertirAMinusculas(texto) {
    console.log("Texto en minúsculas:", texto.toLowerCase());
    return texto.toLowerCase();
  }
  
  // Función que convierte en mayúsculas todas las letras de un texto
  function convertirAMayusculas(texto) {
    console.log("Texto en mayúsculas:", texto.toUpperCase());
    return texto.toUpperCase();
  }
  
  // Función que convierte la primera letra de cada nombre en mayúscula
  function primeraLetraMayuscula(nombres) {
    let nombresCapitalizados = nombres.map(nombre => nombre.charAt(0).toUpperCase() + nombre.slice(1));
    console.log("Nombres con la primera letra en mayúscula:", nombresCapitalizados);
    return nombresCapitalizados;
  }
  
  // Llamada a funciones de arrays
  imprimirNumeros(numerosArray);
  agregarNumero(numerosArray, 11);
  numerosArray = eliminarPares(numerosArray);
  obtenerNumeroMayor(numerosArray);
  obtenerNumeroMenor(numerosArray);
  convertirAMinusculas("Hola Mundo");
  convertirAMayusculas("Hola Mundo");
  primeraLetraMayuscula(["juan", "maría", "pedro"]);
  
