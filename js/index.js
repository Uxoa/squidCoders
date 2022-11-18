function timeTrafficLight(name){ 
   console.log(`Hola, mi nombre es ${name}`);
   } 
   setTimeout(timeTrafficLight, 1300, "Darío");

const add = function(a,b){
   console.log(a+b)
 };
 
 setTimeout(add,1000,1,2);
 
 // 3 (in a second)






function cambiar() {
   document.getElementById("trafficLight").src="../images/lightRed.png";
   document.getElementById("doll").src="../images/dollFront.png";
};

   function cambiar () {
      document.getElementById('trafficLight').src = "./images/lightRed.png";
      document.getElementById('doll').src = "./images/dollFront.png";
   }
   
   function volver () {
      document.getElementById('trafficLight').src = "./images/lightGreen.png";
      document.getElementById('doll').src = "./images/dollBack.png";
   }
   

let squidersPlayer = ["Himorell", "Paloma", "Flor", "Leidy", "Sandra"];
let removedSquiders = [];


function toChooseSquider() {
    let numberPlayers = squidersPlayer.length; //Se inicializa con el tamaño del array//
    let index = Math.floor(Math.random() * numberPlayers);
    let selectedPlayer = squidersPlayer[index];  //Guarda la variable con el valor de i//
    console.log("squider eliminado es " + selectedPlayer);


    removedSquiders.unshift(selectedPlayer);
    squidersPlayer.splice(index,1);
    console.log("Lista de vivos " + squidersPlayer); 
    console.log("Lista de squiders KO " + removedSquiders);
    return removedSquiders, selectedPlayer, squidersPlayer;
}

function eliminados(){
   document.getElementById("eliminados").innerHTML = removedSquiders.join("<br/>");
};


function cargaListadoVivos(){
   document.getElementById("vivos").innerHTML = 
   (`${squidersPlayer.map((namePlayer) => `<div class="squidImage">${namePlayer}</div>`).join('')}`);
};

const button = document.querySelector('button');
button.onclick = function() {
  document.getElementById("vivos").innerHTML = (`${squidersPlayer.map((namePlayer) => `<span class="squidImage">${namePlayer}</span>`).join('')}`);
   toChooseSquider()
   cargaListadoVivos();
   alert('Eliminados:' + removedSquiders);
   eliminados();
   cambiar();
};
