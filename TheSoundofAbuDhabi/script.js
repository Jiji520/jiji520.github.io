let theAudioElement =document.getElementById('electra')
let theAudioElement1 =document.getElementById('fish')
let theAudioElement2 =document.getElementById('corniche')
let theAudioElement3 =document.getElementById('hamdan')
let theAudioElement4 =document.getElementById('shisha')

let theImageBackground = document.getElementById('background-img')
let theImageElectra = document.getElementById('electra-img')
let theImageFish = document.getElementById('fish-img')
let theImageHamdan = document.getElementById('hamdan-img')
let theImageCorniche = document.getElementById('corniche-img')
let theImageShisha = document.getElementById('shisha-img')


var electraAudio = new Audio('breakfast.ogg');
var isPlaying = false;

 theAudioElement.onclick = () => {
   if(!isPlaying){
     isPlaying = true;
     electraAudio.play();
     theImageElectra.style.opacity = 0;
     theImageBackground.style.opacity = 1;
   }



 electraAudio.onended = () => {
   isPlaying = false;
 }
