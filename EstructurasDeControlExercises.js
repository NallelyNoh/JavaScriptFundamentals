// EJERCICIO: LANDSCAPE OR PORTRAIT
function isLandsCape(width, height) {        

    if (width > height) {
     return  true;   
    }
     else {
      return false;
     }                 
}

console.log(isLandsCape(80,50));

// EJERCICIO: FIZZBUZZ ALGORITMO
/**
 * Divisible entre 3 => Fizz
 * Divisible entre 5 => Buzz
 * Divisible entre 3 y 5 => FizzBuzz
 * No ivisible entre 3 o 5 => input
 * No es un numero => 'Not es un numero'
 * 
 */

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
  algoritmo(10);
  
    

 // EJERCICIO: LIMITE DE VELOCIDAD
 /**
  * Limite de velocidad = 70
  * 5 -> 1 point
  * Math.Floor
  * 12 point -> licencia suspendida
  */

  function limite(velocidad){

     let puntos;
     const permitido = 70;

    puntos = (((velocidad - permitido)/5)*1);
    puntos = Math.floor(puntos)
    
    if (puntos >= 12) {
      return "Tu licencia ha sido suspendida"
    }
    return "Tu licencia no ha sido suspendida"
  }

  console.log(limite(130));



  // EJERCICIO PAR O NON.
  /**
   * Funcion que reciba un numero e imprima desde 0 
   * hasta el numero dado y espacifique sies par o non
   * example: n = 3
   * 0 par
   * 1 non
   * 2 par
   * 3 non
   */

   function parNon(numero){
 
    for (let i=0; i<=numero; i++){
      if(i%2 === 0) {
        console.log(i, "par");
      }
      if (i%2 !== 0){
        console.log(i, "non");
      }
    }
     
   }

   console.log(parNon(10))



   // EJERCICIO: SUMA DE MULTIPLOS DE 3 Y 5
   /**
    *  sum(10)
    *  3 -> 3, 6, 9
    *  5 -> 5, 10
    *  sum(10) = 33
    */

    function sumaMultiplos(numeros){

     let sumaM3 = 0;  //multiplos de 3
     let sumaM5 = 0;  //multiplos de 5
     let sumaTotal;

      for(let i=1; i<= numeros; i++){
        if (i%3 === 0){
          sumaM3 =  sumaM3 + i;
        }

        if (i%5 === 0){
          sumaM5 = sumaM5 + i;
          
        }
        sumaTotal = sumaM3 + sumaM5;
      } 
      return sumaTotal;
    }

    console.log(sumaMultiplos(10));


    // EJERCICIO: SHOW THE STARS.

    function stars(){

      let stars = "";
      let indice;


      for(let i=0; i<=10; i++){
        indice = console.log("Index: ", i, stars)
        stars = stars + "*";
        
      }
      return indice;
      
    }

    console.log(stars());


    //EJERCICIO: TABLA DE MULTIPLICAR
    
    function tablaMultiplicar(){
      let tabla;
  
   for(let i = 0; i <= 10; i++){
       for(let j =0; j <= 10; j++){
          tabla = console.log(i, "*", j, "=", i*j);
       }
   }
   return tabla;
  }
  console.log(tablaMultiplicar());


    // EJERCICIO: PRINT PRIMES

  // function primes(numero){
 

  //     if( i === 2){
  //       console.log( i, "es numero primo");
  //     }

  //     if(i%2 !== 0 ) {
  //       console.log( i, "es numero primo");
  //     }

  //     if(i%3 )
      
  //   }
  //    //return numprimos;    

   

  //  console.log(primes(10));

   


    
  