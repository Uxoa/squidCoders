function changePicture() {
   document.getElementById("trafficLight").src="images/lightRed.png";
   document.getElementById("doll").src="images/dollFront.png";
};

function changePictureBack() {
   document.getElementById("trafficLight").src="images/lightGreen.png";
   document.getElementById("doll").src="images/dollBack.png";
};


let squidersPlayer = ["Himorell", "Paloma", "Flor", "Leidy", "Sandra"];
let removedSquiders = [];


function toChooseSquider() {
    let numberPlayers = squidersPlayer.length; //Se inicializa con el tamaño del array//
    let index = Math.floor(Math.random() * numberPlayers);
    let selectedPlayer = squidersPlayer[index];  //Guarda la variable con el valor de index//
    console.log("squider eliminado es " + selectedPlayer);


    removedSquiders.unshift(selectedPlayer);
    squidersPlayer.splice(index,1);

  
   
}

function losers(){
   document.getElementById("losers").innerHTML = removedSquiders.join("<br/>");
   
}






function winners(){
   document.getElementById("winners").innerHTML = 
   (`${squidersPlayer.map((namePlayer) => `<span class="squidImage ` + this.getAttribute("data-id") + `">${namePlayer}</span>`).join('')}`);
}





/*const button = document.querySelector('button');
button.onclick = addSquider() {
   let nameNewSquider = document.getElementById("nameNewSquider").value;
   nameNewSquider.unshift(squidersPlayer);

 }*/

 const button = document.querySelector('button');
   button.onclick = function() {
   document.getElementById("winners").innerHTML = (`${squidersPlayer.map((namePlayer) => `<span class="squidImage ${namePlayer}">${namePlayer}</span>`).join('')}`);   soundStartGame();
   setTimeout(() => button.disabled = true, 0);
   setTimeout(() => changePicture(), 9000);
   setTimeout(() => changePictureBack(), 13000);
   toChooseSquider();
   setTimeout(() =>winners(), 13000);
   setTimeout(()=> Swal.fire({
      title: 'Squider out of play is...',
      text: `${removedSquiders[0]}`,
      iconHtml: '<img src="images/squidImg.png" width="90" alt="Squid Icon"/>',
      confirmButtonText: 'Next!'
}).then((result) => {
  if (result.isConfirmed) {}}), 12000);
  setTimeout(() => losers(), 13000);
  setTimeout(() => button.disabled = false, 13000);

 //setTimeout(() => alert('Eliminados:' + removedSquiders), 5000);
}

//paloma alternate animation every squider
const boxes = document.getElementsByClassName("box");

for(const box of boxes) {
  alert ("hasta aqui leo"); 
  box.classList.add("shakeX"); 
}


//music
function soundStartGame() {
   let audio = document.getElementById("soundSquid")
   if (audio.paused) {
      audio.play()
}
}
