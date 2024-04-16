console.log("Hello, world!");

const name = "emma";
let age = 28;
let cool = true;

let games = ["fable", "starcraft", "baldurs gate"];
console.log(games[0]);

function decideCool(value){
    if(age>30){
        cool = false
    }
}



let passedyears = 0;
while(passedyears<5){
    age++;
    passedyears++;
}

decideCool(age); /*kalla på funktion*/

console.log(name, " age: ", age, "iscool?", cool);

let button = document.getElementById("click-button");


function clickEvent(){
    alert("button clicked :)");
}

button.addEventListener("click", clickEvent);

let clickNumber = 0;

function countClick(){
    clickNumber++;
    button.textContent = "antal klick " + clickNumber;
}

button.addEventListener("click", countClick);
