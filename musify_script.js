console.log("Welcome to Musify");
//initialize the variables
let songIndex=0
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songName:"Deva Shreeganesha",filePath:"songs/1.mp3",coverPath:"cover/1.jpeg"},
    {songName:"Pal Ek Pal",filePath:"songs/2.mp3",coverPath:"cover/2.jpeg"},
    {songName:"Sanam Re",filePath:"songs/3.mp3",coverPath:"cover/3.jpeg"},
    {songName:"Senorita",filePath:"songs/4.mp3",coverPath:"cover/4.jpeg"},
    {songName:"Dil Ko Karar Aaya",filePath:"songs/5.mp3",coverPath:"cover/5.jpeg"},
    {songName:"Zindagi Se",filePath:"songs/6.mp3",coverPath:"cover/6.jpeg"},
    {songName:"Tujhe Kitna Chahne Lage Hum",filePath:"songs/7.mp3",coverPath:"cover/7.jpeg"}
]
songitem.forEach((element,i)=>{
    // console.log(element,i);
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
// let audioElement=new Audio('Deva Shree Ganesha - Agneepath.mp3');
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    
})   
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>
    {
        // console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6)
    {
        songIndex=0;
    }
    else{
    
    songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
 
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
    
    songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
         audioElement.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
 
})