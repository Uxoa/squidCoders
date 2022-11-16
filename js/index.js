let squidersPlayer = ["Himorell", "Paloma", "Flor", "Leidy", "Sandra"];
let selected = ["JM", "Montse"];

function toChooseSquider() {
    let n = squidersPlayer.length; //Se inicializa con el tamaño del array//
    let i = Math.floor(Math.random() * n);
    let selectedPlayer = squidersPlayer[i];  //Guarda la variable con el valor de i//
    console.log("squider eliminado es " + selectedPlayer);

    selected.unshift(selectedPlayer);
    squidersPlayer.splice(i,1);
    console.log("Lista de vivos " + squidersPlayer); 
    console.log("Lista de squiders KO " + selected);
    return selected, selectedPlayer, squidersPlayer;
   
}
toChooseSquider()

