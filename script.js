//Define Early

let disName;
let disComName;
document.getElementById("gameDiv").classList.add("d-none");
document.getElementById("new").classList.add("d-none");
document.getElementById("try").classList.add("d-none");
let computerValue = 0;
let humanValue = 0;
let diffPickerDrpDwn = document.querySelector("#difSelector");
//Select Difficulty

function selectOne() {
  if (difSelector === "difOne") {
    easyOne();
  } else if (difSelector === "difTwo") {
    return normalOne();
  } else if (difSelector === "difThree") {
    return hardOne();
  }
}

//Display Screen

function display() {
  difSelector = diffPickerDrpDwn.value;

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

document.getElementById("lockInButton").addEventListener("click", lockInAnswer);

//Easy Option
function easyOne() {
  function responseNew1() {
    let humanRes = document.getElementById("humanRes").value;

    if (humanRes === "Rock") {
      return "Scissors";
    } else if (humanRes === "Paper") {
      return "Rock";
    } else if (humanRes === "Scissors") {
      return "Paper";
    } else {
      return "No Answer";
    }
  }

  let humanRes = document.getElementById("humanRes").value;
  let computerChoice = responseNew1();
  if (computerChoice !== "No Answer") {
    humanValue++; // Increment humanValue
    document.getElementById("displayScoreName1").textContent = humanValue;
    if (humanValue === 5) {
      endGame("Good Game!");
      document.getElementById("gameOver").classList.add("done1");
      document.getElementById("new").classList.remove("new");
      document.getElementById("new").classList.add("new3");
    }
  }

  document.getElementById("resOne").textContent = computerChoice;
}

//Hard Option
function hardOne() {
  function responseNew() {
    let humanRes = document.getElementById("humanRes").value;

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

  let humanRes = document.getElementById("humanRes").value;
  let computerChoice = responseNew();
  
  if (computerChoice !== "No Answer") {
    computerValue++; // Increment computerValue
    document.getElementById("displayScoreName").textContent = computerValue;

    if (computerValue === 5) {
      endGame("Game Over!");
      document.getElementById("gameOver").classList.add("done");
      document.getElementById("new").classList.remove("new");
      document.getElementById("new").classList.add("new2");
      document.getElementById("new").classList.add("new2");
    }
  }

  document.getElementById("resOne").textContent = computerChoice;
}

// Function to end the game
function endGame(message) {
  document.getElementById("humanRes").classList.add("d-none");
  document.getElementById("lockInButton").classList.add("d-none");
  document.getElementById("gameOver").textContent = message;
  document.getElementById("resTwo").classList.add("d-none");
  document.getElementById("try").classList.remove("d-none");
}

//Normal Option

function normalOne() {
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

  document.getElementById("answer").textContent =
    responseOneArray[randomNumber];
  console.log(disName);
}
