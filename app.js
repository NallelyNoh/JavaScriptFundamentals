// function  sum(a,b){
//   console.log("params", a, b);
//   return a + b;
// }

// console.log(sum(1));



// function  sum(){
// console.log(arguments); // console le pide a arguments los valores
// let result = 0;
// for(let param of arguments){
//    result += param;
//  }
//  return result;
//  }

//  console.log(sum(1,2,3));   // suma los valores 1, 2 y 3 = 6



// function sum(potencia, ...bananas){
//    console.log(bananas);
//  }
//  console.log(sum(1,2,3));



// let pepito = {
//   gender: "hombre",
//   eyes: "negros",
//   estatura: 1.90,
//   colorPiel: "Brown",
// };

// console.log("pepito", pepito);

// let pepita = {
//   ...pepito,
//   gender: "mujer",
// };
// console.log("pepita", pepita)





// function sum(first, ... bananas){
//   let result = first;
//   for(let value of bananas){
//   result += value;
// }

// return result;

// }
// console.log(sum(1,2,3));





// function potenciacion(potencia=2, value1=1, ...rest){
//   console.log("potenciacion");
//   console.log(potencia);
//   console.log(value1);
//   console.log(rest);
// };

// potenciacion(3,5,6,7)



// let componentColor = "red";
// let themeColor = "blue";
// let defaultColor = componentColor || themeColor;

// console.log(defaultColor);



// function getTotalPaymentPerYear(monto, interes=3.5, years=4){
// let montoWithInteres = (monto * interes / 100) + monto;
// let totalPerYear = montoWithInteres /years;
// return totalPerYear;
// }

// console.log(getTotalPaymentPerYear(1000, 4.5, 6));



// ///                                            HOISTING
// run();  // se llama a una función antes de ser declarada
// function run(){
//   console.log("runing");
// }


// let move = function walk(){
//   console.log("walking");
// };

// move();           // resultado runing, walking



// THIS - MUESTRA LAS PROPIEDADES DE WINDOW
// run();
// function run(){
//   console.log("runing");
//   console.log(this);
// }


// let move = function walk(){
//   console.log("walking");
// };

// move();



// let persona = {
//   name: "Ana",
//   move: function () {
//     console.log("I can move");
//     console.log(this);
//   },
// }
// persona.move();



// function x() {
//   let x = "x";
//   console.log(x, this);
//   function y(){
//     let y = "y";
//     console.log(y, this);
//     function z(){
//       let z = "z";
//       console.log(z, this);
//     }
//     z();
//   }
//   y();
// }
// x();



// let documentName = "Javascript Fundamentals";
// function examplethis ()
// {
//   console.log(this,documentName);
// }
// examplethis();



//                                          SCOPE GLOBAL
// let x = 5;

// function onefunctionScope(){
//   //function scope
//   let x = 10;
//   console.log(x);          //imprime 10
// }

// onefunctionScope()
// //console.log(x);              //imprime 5




// let x = 5;

// function onefunctionScope(){
//   //function scope
//   let x = 10;
//   console.log(x);          //imprime 10
//   for(let i=x; i>=0; i--) {
//     let x= 8;
//     console.log(x,"index", i);
//   }
//   console.log(x);
// }

// onefunctionScope()
// //console.log(x); 




// var x = 5;
// var y = 333;

// function onefunctionScope(){
//   //function scope
//   let x = 10;
//   function loop()
//   {
//     let z = "estoy dentro de loop";
//     console.log(x,"X");
//     console.log(y,"Y");
//   }
//   loop();
//   console.log(x);

//   }

// onefunctionScope();
// console.log(z);     // z está declarada como variable local y no como variable global por eso el resultado es 
//                       10"X"   333"Y"   10  z is not defined


//  let calculandoEdad = function(birthYear, actualYear) {
//    return actualYear - birthYear;
//  };

//  let esMayorDeEdad = function (fn) {
//    let age = fn(1988, 2020);

//    if(age > 18){
//      console.log("Es mayor de edad");
//    }
//    else {
//      console.log("Es menor de edad")
//    }
//  }

//  esMayorDeEdad(calculandoEdad);


//  let age = prompt("Please enter your age");
//  alert(age);



/////////////////////////////////////  REVISAR
// function saludo(name){
//   alert("Hola " + name);
//   }

// function getName(fn){                         //esta función llama a la primera función con fn(name)
//   let name = prompt("¿cuál es tu nombre?")
//   fn(name);                                    //en esta función se llama la variable name
//   }

// getName(saludo);



// function setColor(){
//   alert("setColor")
//   //let element = document.getElementsByTagName('body');
//   document.body.style.backgroundColor = "red";

// }

// function changeLetterColor(){
//   let elem = document.getElementById('contenedor');
//   elem.style.color = "blue";
// }

// function backcolor(){
//   let elem = document.getElementById('contenedor');
//   elem.style.color = "black";
// }

// function save(){
//   alert("La información se ha enviado con exito");
// }

// window.onload = () => alert("Hola event");

//Ejercicio D
// function save(){
//   let inputValue = document.getElementById('name').value;
//   alert("El nombre ha sido guardado correctamente " + inputValue);
// }

//Ejercicio E    ---- NO QUEDA
// function changeColor()
// {
//   let element = document.getElementsByClassName("styleClass");
//   element[0].style.backgroundColor = "blue";
//   element[4].style.backgroundColor = "blue";
// }


// //Ejercio F
// function save(){
//   alert("save");
//   let element = document.getElementById('name').value;
//   console.log(element);
//   if (element !== "ANA"){
//     alert("No puedo enviar tu formulario hasta que escribas ANA")
//     return;
//   }

// }

//                                     EJERCICIO DE ANA

// function main() {
//   alert("main")
//   let type = document.getElementById('test').value;
// }

// alert(type);
       
//                               EXPLICACIÓN DE ANA
let a = 15;
console.log(a % 3);
console.log(a % 5);
console.log(a % 4);

//                               EJERCICIO EN CLASE

function algoritmo(numero) {

  if (typeof numero !== "number") {
    console.log("No es un numero");
    return;
  }

  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz")
  }
  else if (numero % 5 === 0) {
    console.log("Buzz")
  }
  else if (numero % 3 === 0) {
    console.log("Fizz")
  }

}
algoritmo(15);


console.log(0 && 1) 




