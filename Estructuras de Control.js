// let hora = 21;

//function saludo(hora) {
  //  if((hora >= 6) && (hora < 12)) {
    //    console.log("Buenos días");
      //      } 
        //    else if ((hora >= 12) && (hora <20)) {
          //  console.log("Buenas tardes");
            //}
            //else {
              //  console.log("Buenas noches");
            //}
//}

// saludo(hora); // Resultado = buenas noches


//Otra forma
//let hora = 8;

//function saludo(hora) {
    //let mensaje = "";

    //if((hora >= 6) && (hora < 12)) {
       // mensaje = "Buenos días";
          //  } 
            //else if ((hora >= 12) && (hora <20)) {
            //mensaje = "Buenas tardes";
            //}
            //else {
              //  mensaje ="Buenas noches";
            //}
            //console.log(mensaje);
//}

//saludo(hora);  // Buenos días 




//function isLandsCape(width, height) {
          

  //     if (width > height) {
    //    return  true;
        
      // }
       //else {
        //return false;
       
       //}            
       
//}

// console.log(isLandsCape(80,50));



// ************************************ let hora = 22;  NO QUEDÓ ESTE EJEMPLO

//function saludo(hora){
  //  switch(hora) {
    //case 6:
    // console.log("buenos días");
    //break;
    //case 12:
      //  console.log("buenos tardes");
    //break;
    //case 20:
      //  console.log("buenos noches");
    //break;
    //}
//}

//saludo(8);



//function saludo(role) {
  //  switch(role) {
    //    case "Recursos humanos":
      //      console.log("Hola compañero de " + role)
        //    break;
        //case "IT":
          //  console.log("Hola compañero de " + role)
            //break;
        //case "Contabilidad":
          //  console.log("Hola compañero de " + role)
            //    break;
        //defaul:
        //console.log("Hola invitado")
    //}
//}

//let role = "Contabilidad";
// saludo(role);                     La consola muestra Hola compañero de contabilidad



//function saludo(role) {
  //  let saludo;
   // switch(role) {
     //   case "Recursos humanos":
       //     saludo = "Hola compañero de " + role;
         //   break;
        //case "IT":
          //  saludo = "Hola compañero de " + role;
            //break;
        //case "Contabilidad":
          //  saludo = "Hola compañero de " + role;
            //    break;
        //defaul:
        //saludo = "Hola invitado";
    //}
    //console.log(saludo);
//}

//let role = "Recursos humanos";
//saludo(role);                        // La consola muestra Hola compañero de Recursos humanos



// function getPage() {
//     //request
//     const responseCode = 500;

//     switch(responseCode){
//         case 200:
//         console.log("Ok");
//         break;
//         case 404:
//         console.log("Not found");
//         break;
//         case 500:
//         console.log("Server error");
//         break;
//         default:
//             console.log("We can´t resolve the request code");
//     }
// }

// getPage();       // En la consola se muestra "Server error"


// for (let i = 1; i <= 10; i++)
// {
//     console.log("Index ", i);
// }




// let person = {
//     name: "Ana",
//     age: 30,
// };

// for(let key in person){      //key recorre en lo que hay en person y lo imprime
//     console.log(key, ":", person[key]);
// }


// let manzana = {
//     color: "rojo",
//     size: "chica",
//     weigth: 0.3,
// };

// console.log("Mi manzana es: ");
// for(let propiedad in manzana)
// {   
//     console.log(propiedad, "es", manzana[propiedad], "miomi");
// }


// let manzana = {
//  color: "rojo",
//  size: "chica",
//  weigth: 0.3,
// };

// console.log("Mi manzana es: ");
// for(let propiedad in manzana)
// {

//   if(propiedad !== "weigth")
//     console.log(propiedad, "es", manzana[propiedad], "miomi");
//   else 
//     console.log(propiedad, "es", manzana[propiedad], "kg", "miomi");
// }


// let numeros = [12, 34, 56, 8, 90];

// for(let numero in numeros)
// {
//     console.log("Index" , numero);     // se impirmirán las posiciones
// }

// for(let numero of numeros)          // let of sólo funciona para arrays, se imprimirán los valores: 12, 34, 56 ...
// {
//     console.log(numero)
// }



// let consumedMB = 6;

// while(consumedMB > 2.5){
//     checkingIsNecesary(consumedMB)
//     --consumedMB;
// }
// checkingIsNecesary(consumedMB);  // imprime un "you can ..."


// function checkingIsNecesary( trafic) {
//     console.log("Checking traffic", trafic);
//     if (trafic > 2.5){
//         console.log("there is some trafic");
//     }
//     else { 
//     console.log("you can stop checking traffic");
//     }
// }



let consumedMB = 0;

do {
  checkingIsNecesary(consumedMB);
  consumedMB--;
} while (consumedMB > 2.5)


function checkingIsNecesary( trafic) {
    console.log("Checking traffic", trafic);
    if (trafic > 2.5){
        console.log("there is some trafic");
    }
    else { 
    console.log("you can stop checking traffic");
    }
}


//while (true) {
  //  console.log("");
// }

for(let i=0; i < 10; i++){
    if(i > 5){
        console.log("EStoy en el if", i);
        continue;
    }   
    console.log("Index", i);
}













