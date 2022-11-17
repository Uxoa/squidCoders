

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


const button = document.querySelector('button');

button.onclick = function() {
   toChooseSquider();
  alert('Eliminados:' + removedSquiders);
  cargaListadoVivos();
  eliminados();
};


   function cargaListadoVivos(){

      document.getElementById("vivos").innerHTML = (`${squidersPlayer.map((namePlayer) => `<span class="squidImage">${namePlayer}</span>`).join('')}`);
};


// dev

function eliminados(){
   document.getElementById("eliminados").innerHTML = removedSquiders.join("<br/>");
}

