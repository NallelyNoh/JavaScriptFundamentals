// Ejercicio 1: Madame zazu

let city = "Alemania";
let children = 1;
let husbands = 1;
let work = "OR researcher";
let award = "IFORS";
let age = 35;

// console.log(city, children, husbands, work, award, age);
// console.log("City: ", city);
// console.log("Children: ", children);
// console.log("Husbands: ", husbands);
// console.log("Work:", work);
// console.log("Award:", award);
// console.log("Age:", age);

console.log("Madame Zazu me dijo que:")
console.log("City:", city, "Children:", children, "Husbands:", husbands, "Work:", work, "Award:", award, "Age:", age)



// Calculadora de edad

let year = 1990;
const añoactual = 2020;

function persona(year){
    let edad = ""
    edad = añoactual - year;
    console.log(edad)
}
persona(year);

//Ana hizo este:

function EdadCalculator(birthYear, actualYear){
return actualYear - birthYear;
}

console.log(EdadCalculator(1988, 2020));



// let stars = "";
// for (let i=0; i <= 10; i++){
//         console.log("Stars:", i, stars);
//         stars = stars + "*";
//     }
    


// stars = "";
//  let i = 0;
// console.log("While loop");

//  while(i <= 10) {
//  console.log("stars:", i, stars);
//  stars += "*";
//  i++
//  }



// console.log("Do while loop");
// stars = "";
// let i = 0;

// do{
//       console.log("stars:", i, stars)
//       stars += "*";
//       i++
//   }
//  while(i <= 10)


 for(i = 0; i <= 10; i++){
     for(j =0; j <= 10; j++){
         console.log(i, "*", j, "=", i*j);
     }
 }












// Calculadora de figuras geometricas.

// Águila o Sello

// intercambiando variables 
// let a = 'red';
// let b = 'blue';

// console.log(a);
// console.log(b);