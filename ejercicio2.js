function suma(x, y) {
    console.log(x+y)
 }
suma(1,8)


//   function resta(x, y) {
//     // "x" e "y" son números
//     // Resta "x" de "y" y devuelve el valor
//     // Tu código:
//   }

function resta(x,y){
console.log(x-y)

}

resta(15,9)
//   ​
//   function multiplica(x, y) {
//     // "x" e "y" son números
//     // Multiplica "x" por "y" y devuelve el valor
//     // Tu código:
//   }
//   ​

function multiplica(x,y){
    console.log(x*y)
}
multiplica(3,4)


//   function divide(x, y) {
//     // "x" e "y" son números
//     // Divide "x" entre "y" y devuelve el valor
//     // Tu código:
//   }
function divide(x,y) {
    console.log(x/y)
}
divide(9,5)
//   function obtenerResto(x, y) {
//     // Obten el resto de la división de "x" entre "y"
//     // Tu código:
//   }
function resto(x,y){

    console.log(x%y)
}
resto(9,6)

//   function elevarAlCuadrado(num) {
//     // Devuelve el valor de "num" elevado al cuadrado
//     // Tu código:
//   }

function elevaralcuadrado(x){
    console.log(x*x)
}

elevaralcuadrado(5)



//   function sonIguales(x, y) {
//     // Devuelve "true" si "x" e "y" son iguales
//     // De lo contrario, devuelve "false"
//     // Tu código:
//   }
function soniguales(x,y){
if (x==y){console.log('son iguales')} 
else if(x!==y){console.log(false)}
}
soniguales(3,3)


//   function tienenMismaLongitud(str1, str2) {
//     // Devuelve "true" si las dos strings tienen la misma longitud
//     // De lo contrario, devuelve "false"
//     // Tu código:
//   }
//   ​
function mismalongitud(str1,str2){
if(str1.length==str2.length){console.log("Tienen la misma longitud")}
else if(str1.length!==str2.length){console.log(false)}

}

mismalongitud('cinco','perro')



//   function menosQueNoveta(num) {
//     // Devuelve "true" si el argumento de la función es menor que noventa
//     // De lo contrario, devuelve "false"
//     // Tu código:
//   }
//   ​
function menosquenoventa(x){
    if(x<90){console.log(true)}
    else if(x>90){console.log(false)}


}

menosquenoventa(100)
//   function mayorQueCincuenta(num) {
//     // Devuelve "true" si el argumento de la función es mayor que cincuenta
//     // De lo contrario, devuelve "false"
//     // Tu código:
//   }


function mayorqueCincuenta(x){
    if(x>50){console.log('si el argumento es mayor que cincuenta')}
    else if(x<50){console.log(false)}
    
}
mayorqueCincuenta(70)
//   ​
//   function esPar(num) {
//     // Devuelve "true" si "num" es par
//     // De lo contrario, devuelve "false"
//     // Tu código:
//   }



function esPar(x){
    if(x%2==0){console.log(true)}
    else if(x%2!==0){console.log(false)}
}

esPar(8)


//   ​
//   function esImpar(num) {
//     // Devuelve "true" si "num" es impar
//     // De lo contrario, devuelve "false"
//     // Tu código:
//   }

function esImpar(x){
if(x%2!==0){console.log(true)}
else if(x%2==0){console.log(false)}


}

esImpar(2)
//   function comparacion() {
//     //Asigna valores para val1 y val2 de modo que ingrese a la instrucción if:
//     const val1 
//     const val2 
//     if (val1 && val2) {
//       console.log("Entramos en la declaración if");
//     }
//   }
const val1=1
const val2=2

function comparar(val1,val2) {
if (val1&&val2){console.log("Entramos en la declaracion if")}
}
comparar(val1,val2)


//   function flujoCondicional() {
//       const valor1 //asingar como valor el resultado de una operacion de comparacion
//       const valor2 


//       //establecer los valores de valor1 y valor 2 para obtener los siguientes resultados:
//       //'segundo if'
//       //'primer if', y 'else final'
//       //'primer if', y 'else if'
//       //'else final'
//       if (valor1) {
//         console.log("primer if");
//       }
//       if (valor2 && !valor1) {
//         console.log("segundo if");
//       } else if (valor2 <= 12) {
//         console.log("entrada al else if");
//       } else {
//         console.log("else final");
//       }
//     }

function mayorQueDiez(x){
    if(x>10){console.log(x)}
    else if(x<10){console.log(1)}


}

const valor1= mayorQueDiez(12)

const valor2= 97


function flujoCondicional(val1,val2){
if(val1>10){console.log('primer if')}
else if(val1<10){console.log(' segundo if')}
else if(val2%2==0){console.log('else final')}

}

flujoCondicional(valor1,valor2)
    
//   /* 
//       Crear un objeto sobre una temática a elección que contenga :
//       - Un dato tipo string
//       - Un dato tipo number
//       - Un dato tipo boolean
//       - Una función
//   */

const Cliente={
    Nombre: 'Federico',
    Edad: 29,
    Egresado: true,
    Saludo: function (){
        alert('Hola soy'+this.Nombre)

    },

}
console.log(Cliente)
//   /* 
//       Crear un array sobre un temática a elección que contenga:
//       - Un dato tipo string
//       - Un dato tipo number
//       - Un dato tipo boolean
//       - Un array con al menos 3 valores
let Camara=['Dahua',8,true,['wifi','8mpx','centro']  ]

console.log(Camara)

//       Una vez creado remover del ultimo indice (el cual es un array) el primer y ultimo valor y agregarle el string "Primero" al comienzo, 
//       y el string "Ultimo" al final. Utilizar los métodos vistos en clase.
//   */