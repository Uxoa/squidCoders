

let squidersPlayer = ["Himorell", "Paloma", "Flor", "Leidy", "Sandra"];
let removedSquiders = [];

function toChooseSquider() {
    let n = squidersPlayer.length; //Se inicializa con el tamaño del array//
    let i = Math.floor(Math.random() * n);
    let selectedPlayer = squidersPlayer[i];  //Guarda la variable con el valor de i//
    console.log("squider eliminado es " + selectedPlayer);


    removedSquiders.unshift(selectedPlayer);
    squidersPlayer.splice(i,1);
    console.log("Lista de vivos " + squidersPlayer); 
    console.log("Lista de squiders KO " + removedSquiders);
    return removedSquiders, selectedPlayer, squidersPlayer;
   
}


const button = document.querySelector('button');

button.onclick = function() {
   toChooseSquider();
  alert('Eliminados:' + removedSquiders);
};



function cargaListadoVivos(){
   document.getElementById("vivos").innerHTML = squidersPlayer;
}

// dev

function eliminados(){
   document.getElementById("eliminados").innerHTML = removedSquiders;
}
