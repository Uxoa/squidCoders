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
    let selectedPlayer = squidersPlayer[index];  //Guarda la variable con el valor de i//
    console.log("squider eliminado es " + selectedPlayer);


    removedSquiders.unshift(selectedPlayer);
    squidersPlayer.splice(index,1);
   
}

function losers(){
   document.getElementById("losers").innerHTML = removedSquiders.join("<br/>");
}


function winners(){
   document.getElementById("winners").innerHTML = 
   (`${squidersPlayer.map((namePlayer) => `<div class="squidImage">${namePlayer}</div>`).join('')}`);
}

const button = document.querySelector('button');
button.onclick = function() {
  
   document.getElementById("winners").innerHTML = (`${squidersPlayer.map((namePlayer) => `<span class="squidImage">${namePlayer}</span>`).join('')}`);
   sound();
   setTimeout(() => changePicture(), 9000);
   setTimeout(() => changePictureBack(), 13000);
   toChooseSquider();
   setTimeout(() =>winners(), 13000);
   setTimeout(()=> Swal.fire({
      title: 'Squider out of play is...',
      text: `${removedSquiders}`,
      iconHtml: '<img src="images/squidImg.png" width="90" alt="Squid Icon"/>',
      confirmButtonText: 'Next!'
}).then((result) => {
  if (result.isConfirmed) {}}), 12000);
  setTimeout(() => losers(), 13000);


 //setTimeout(() => alert('Eliminados:' + removedSquiders), 5000);
}




//music
function sound() {
   var audio = document.getElementById("soundSquid")
   if (audio.paused) {
       audio.play()
   }
}



