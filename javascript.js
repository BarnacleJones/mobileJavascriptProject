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

function generate()  {

    //get number of characters
    let characters = document.querySelector("#characters").value
     
    //what are the boxes that are checked
    let specials = document.querySelector("#specialCharacters");
    let numbers = document.querySelector("#numbers");
    let letters = document.querySelector("#letters");
    
    
    //special character combinations
    
    if (specials.checked || numbers.checked || letters.checked) {
      
      //are all three checked
      if (numbers.checked && specials.checked && letters.checked) {
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
      
      //individuals

      //just specials
      if (specials.checked) {    
        let selections =   
        ["!", "@", "#", "$", "%", "^",
        "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "'", "/","?", "<", ">", ",", ".", "~","`"];
        let password = [];
        for (let index = 0; index < characters; index++) {
          const rand = Math.floor(Math.random() * (selections.length - 1));
          password.push((selections[(rand)]))    
        }
        document.querySelector("#generatedPassword").innerText = password.join("");
      }

      //just numbers
      if (numbers.checked) {
        let selections =   
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        let password = [];
        for (let index = 0; index < characters; index++) {
          const rand = Math.floor(Math.random() * (selections.length - 1));
          password.push((selections[(rand)]))    
        }
        document.querySelector("#generatedPassword").innerText = password.join("");
      }

      //just letters
      if (letters.checked) {
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

      //numbers and specials
      if (numbers.checked && specials.checked) {
        let selections =   
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^",
        "&", "*", "(", ")", "-", "_", "=", "+", "{", "}", "[", "]", "'", "/","?", "<", ">", ",", ".", "~","`"];
        let password = [];
        for (let index = 0; index < characters; index++) {
          const rand = Math.floor(Math.random() * (selections.length - 1));
          password.push((selections[(rand)]))    
        }
        document.querySelector("#generatedPassword").innerText = password.join("");
      } 

      //numbers and letters
      if (numbers.checked && letters.checked) {
        let selections =   
        [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
        "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
        "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
        let password = [];
        for (let index = 0; index < characters; index++) {
          const rand = Math.floor(Math.random() * (selections.length - 1));
          password.push((selections[(rand)]))    
        }
      document.querySelector("#generatedPassword").innerText = password.join("");
      }

      //specials and letters
      if (specials.checked && letters.checked) {
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
    }
