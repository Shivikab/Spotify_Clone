console.log("Welcome to Spotify");

document.getElementById('favourites').addEventListener('click', function () {
    window.location.href = 'favourites.html';
});
document.getElementById('about').addEventListener('click', function () {
    window.location.href = 'about.html';
});


// Initialise the Variables
let songIndex=1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Cost" , filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Deaf Kev-Invincible" , filePath: "songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "Spirit" , filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Different Heaven & Eh!de" , filePath: "songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Heroes Tonight - Janji" , filePath: "songs/5.mp3" , coverPath: "covers/5.jpg"}, 
    {songName: "Let Me Love You" , filePath: "songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Happy To See You Again" , filePath: "songs/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "Cheap Thrills" , filePath: "songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "Never See You Again" , filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Childhood Dreams" , filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "School Days" , filePath: "songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "Love" , filePath: "songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Seems Beautiful" , filePath: "songs/5.mp3" , coverPath: "covers/5.jpg"}, 
    {songName: "Happily Ever After" , filePath: "songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Let Me Love You" , filePath: "songs/7.mp3" , coverPath: "covers/7.jpg"},
    // {songName: "Cheep Thrills" , filePath: "songs/8.mp3" , coverPath: "covers/8.jpg"},

]

songItem.forEach((element , i)=> {
    // console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate' , ()=>{
    // update the seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // parseInt kyki int mei chaiye
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    // value %age mei hai ab usko duration m change krna hoga
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        masterSongName.innerText = songs[songIndex-1].songName;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=15){
        songIndex=1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=1){
        songIndex=15;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})