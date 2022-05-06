let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");


let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");


rotulo1.innerHTML = "Ingrese los numeros ";

btnEnviar.addEventListener("click", () => {
  let numeroIngresado: number = Number(dato1.value);
  let numeroIngresado: number2 = Number(dato2.value);
  let numeroIngresado: number3 = Number(dato3.value);
}

if (dato1 > dato2 && dato1 > dato3) {
  console.log("El numero " + dato1 +" es el mayor");
} else if(dato2 > dato1 && dato2 > dato3)) {
  console.log("El numero " + dato2 + " es el mayor");
} else if(dato3 > dato1 && dato3 > dato2)) {
  console.log("El numero " + dato3 + " es el mayor");
}
