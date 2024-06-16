console.log("welcome to spotify clone");

//variables initialization
let songIndex = 0;
let audioElement = new Audio();
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Tum Hi Ho - Aashiqui 2", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tum Prem Ho - Radha Krishn", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ullu Ka Pattha - Jagga Jasoos", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Wafa Ne Bewafai - Teraa Surroor", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Pal Pal Dil Ke Pas - Pal Pal Dil Ke Pas", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Yaad Hai Na - Raaz Reboot", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Soch Na Sake - Airlift", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Yeh Fitoor Mera - Fitoor", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Zaalima - Raees", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tose Naina - Mickey Virus", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});


//handle play/pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        if(songIndex==0){
            songIndex+=1;
            audioElement.src= `songs/${songIndex}.mp3`;
            masterSongName.innerText = songs[songIndex-1].songName;
        }
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
        document.getElementById(songIndex).classList.remove("fa-play");
        document.getElementById(songIndex).classList.add("fa-pause");
    }
    
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity = 0;
        makeAllPlays();
        
    }
})

masterplay.addEventListener('change',()=>{
    if(audioElement.paused){
    }
    else{
    }
})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*10000);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /10000;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}
// forEach(i)
// let playid = Array.from(document.getElementsById())

//song playpause button
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    // console.log(element)
    element.addEventListener('click',()=>{ 
        makeAllPlays();
        songIndex = parseInt(element.id);
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
        audioElement.src= `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        masterSongName.innerText = songs[songIndex-1].songName;
        gif.style.opacity=1;
        
    })
})

document.getElementById("forward").addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=1;
    }
    else{
        songIndex += 1;
    }
    makeAllPlays();
    document.getElementById(songIndex).classList.remove("fa-play");
    document.getElementById(songIndex).classList.add("fa-pause");
    audioElement.src= `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    masterSongName.innerText = songs[songIndex-1].songName;

})
document.getElementById("backward").addEventListener('click',()=>{
    if(songIndex<2){
        songIndex=10;
    }
    else{
        songIndex -= 1;
    }
    makeAllPlays();
    document.getElementById(songIndex).classList.remove("fa-play");
    document.getElementById(songIndex).classList.add("fa-pause");
    audioElement.src= `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    masterSongName.innerText = songs[songIndex-1].songName;
})



