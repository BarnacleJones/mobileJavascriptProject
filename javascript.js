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
    

//Grid 3 - Password Generator

//Grid 3 - Password Generator

function generate()  {

    //get number of characters
      let characters = document.querySelector("#characters").value
     
    //are specials or numbers checked
    let specials = document.querySelector("#specialCharacters");
    let numbers = document.querySelector("#numbers");
    
    
    //are there special characters
    
    if (specials.checked) {
      console.log("Checked"); 
    //are there also numbers?
      if (numbers.checked && specials.checked) {
        console.log("both");
        let selections =   
        [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
      "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
      "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^",
      "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "'", "/","?", "<", ">", ",", ".", "~","`"];
      let password = [];
      for (let index = 0; index < characters; index++) {
        const rand = Math.floor(Math.random() * (selections.length - 1));
        password.push((selections[(rand)]))    
       }
       document.querySelector("#generatedPassword").innerText = password.join("");
      }
      //if not - just do specials
      else{
      let selections =   
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
    "z","!", "@", "#", "$", "%", "^",
    "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "'", "/","?", "<", ">", ",", ".", "~","`"];
    let password = [];
    for (let index = 0; index < characters; index++) {
      const rand = Math.floor(Math.random() * (selections.length - 1));
      password.push((selections[(rand)]))    
     }
     document.querySelector("#generatedPassword").innerText = password.join("");
    }}
    
    
    //are there numbers
    if (numbers.checked) {
      console.log("numbers") 
    //are there also specials?
      if (numbers.checked && specials.checked) {
        console.log("both");
        let selections =   
        [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
      "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
      "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^",
      "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "'", "/","?", "<", ">", ",", ".", "~","`"];
      let password = [];
      for (let index = 0; index < characters; index++) {
        const rand = Math.floor(Math.random() * (selections.length - 1));
        password.push((selections[(rand)]))    
       }
       document.querySelector("#generatedPassword").innerText = password.join("");
      }
      //if not, just do numbers
      else{
    
      let selections =   
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
    "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    
    let password = [];
      for (let index = 0; index < characters; index++) {
        const rand = Math.floor(Math.random() * (selections.length - 1));
        password.push((selections[(rand)]))    
       }
       document.querySelector("#generatedPassword").innerText = password.join("");
      }}
    
      
    //are neither checked
    
    if (!numbers.checked && !specials.checked) {
      console.log("neither");
      let selections =   
      [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
    "z"];
      let password = [];
      for (let index = 0; index < characters; index++) {
        const rand = Math.floor(Math.random() * (selections.length - 1));
        password.push((selections[(rand)]))    
       }
       document.querySelector("#generatedPassword").innerText = password.join(""); 
    }
    
    
    }
