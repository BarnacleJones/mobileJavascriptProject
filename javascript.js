//Grid 1 - website loader


function metShow(){
    document.getElementById("metFrame").style.display = "block";
    document.getElementById("surfFrame").style.display = "none";
    document.getElementById("marineFrame").style.display = "none";
}

function marineShow(){
    document.getElementById("marineFrame").style.display = "block";
    document.getElementById("metFrame").style.display = "none";
    document.getElementById("surfFrame").style.display = "none";
}

function surfShow(){
    document.getElementById("surfFrame").style.display = "block";
    document.getElementById("metFrame").style.display = "none";
    document.getElementById("marineFrame").style.display = "none";
}


//Grid 2 - Audio Loading

var music = new Audio()
function playMusic(audio)
{
    music.pause();
    music = document.getElementById(audio);
    music.play();
}

function stopMusic()
{
    music.pause();    
}

function startMusic()
{
     music.play();
}
    
