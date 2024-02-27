let disName;
let disComName;
document.getElementById("gameDiv").classList.add("d-none");
document.getElementById("new").classList.add("d-none");
let computerValue = 0;

function display() {
  disComName = document.getElementById("comName").value;
  document.getElementById("displayComputerName").textContent = "CPU:";
  document.getElementById("displayComputerName1").textContent = disComName;

  disName = document.getElementById("plaName").value;
  document.getElementById("displayPlayerName").textContent = "Player:";
  document.getElementById("displayPlayerName1").textContent = disName;

  document.getElementById("body").classList.add("dope");
  document.getElementById("fullOne").classList.add("d-none");
  document.getElementById("gameDiv").classList.remove("d-none");
  document.getElementById("new").classList.remove("d-none");

}
function responseNew() {
  let humanRes = document.getElementById("humanRes").value;
  computerValue++;
  document.getElementById("displayScoreName").textContent = computerValue;
  document.getElementById("bot").classList.add("bot2");

  if (humanRes === "Rock") {
    return "Paper";
  } else if (humanRes === "Paper") {
    return "Scissors";
  } else if (humanRes === "Scissors") {
    return "Rock";
  } else {
    return "No Answer";
  }
}

document.getElementById("lockInButton").addEventListener("click", function () {
  document.getElementById("resOne").textContent = responseNew();
  
  // Check if the game is over
  if (computerValue === 5) {
    document.getElementById("gameOver").textContent = "Game Over!";
    document.getElementById("humanRes").classList.add("d-none");
    document.getElementById("lockInButton").classList.add("d-none");
    document.getElementById("gameOver").classList.add("done");
    document.getElementById("new").classList.remove("new");
    document.getElementById("new").classList.add("new2");
    document.getElementById("resTwo").classList.add("d-none");

  }
});

let responseOneArray = [
  "Rock",
  "Paper",
  "Scissors",
  "Scissors",
  "Rock",
  "Paper",
  "Scissors",
];
let randomNumber = Math.floor(Math.random() * responseOneArray.length); 

document.getElementById("answer").textContent = responseOneArray[randomNumber];
console.log(disName);

function selectOne() {
  if (difSelector === "Easy") {
    return easyOne;
  } else if (difSelector === "Normal") {
    return normalOne;
  } else if (difSelector === "Hard") {
    return hardOne;
  }
}
