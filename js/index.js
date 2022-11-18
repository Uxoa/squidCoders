function changePicture() {
   document.getElementById("trafficLight").src="../images/lightRed.png";
   document.getElementById("doll").src="../images/dollFront.png";
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
};


function winners(){
   document.getElementById("winners").innerHTML = 
   (`${squidersPlayer.map((namePlayer) => `<div class="squidImage">${namePlayer}</div>`).join('')}`);
};

const button = document.querySelector('button');
button.onclick = function() {
   document.getElementById("winners").innerHTML = (`${squidersPlayer.map((namePlayer) => `<span class="squidImage">${namePlayer}</span>`).join('')}`);
   document.getElementById("play").addEventListener("click",soundSongSquid);
   toChooseSquider()
   setTimeout(() =>winners(), 6000);
   setTimeout(()=> Swal.fire({
      title: 'and the loser is...',
      text: `${removedSquiders}`,
      icon: 'question',
      confirmButtonText: 'Tray again!'
}).then((result) => {
  if (result.isConfirmed) {}}), 5000);
  setTimeout(() => losers(), 6000);
 changePicture();
 //setTimeout(() => alert('Eliminados:' + removedSquiders), 5000);
};




//music
function soundSongSquid(){
   let sound = document.createElement("iframe"); sound.setAttribute("src","../sounds/willPlay01.mp3");
   document.body.appendChild(sound); document.getElementById("play").removeEventListener("click",soundSongSquid);
   }
   function stopSquidSong(){
   var iframe = document.getElementsByTagName("iframe");
   if (iframe.length > 0){ iframe[0].parentNode.removeChild(iframe[0]);
   document.getElementById("play").addEventListener("click",soundSongSquid);
   } }



