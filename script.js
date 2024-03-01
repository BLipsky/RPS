
//Define Early

let disName;
let disComName;
document.getElementById("gameDiv").classList.add("d-none");
document.getElementById("new").classList.add("d-none");
document.getElementById("try").classList.add("d-none");
let computerValue = 0;
let humanValue = 0;
let diffPickerDrpDwn = document.querySelector("#difSelector")
//Select Difficulty

function selectOne() {
  console.log('im here')
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
  difSelector = diffPickerDrpDwn.value

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

//Easy Option

function easyOne() {
  function responseNew1() {
    humanValue++
    let humanRes = document.getElementById("humanRes").value;
    document.getElementById("displayScoreName1").textContent = humanValue;

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
  document.getElementById("lockInButton").addEventListener("click", function () {
    document.getElementById("resOne").textContent = responseNew1();
    if (humanValue === 5) {
      document.getElementById("goodGame").textContent = "Good Game!";
      document.getElementById("humanRes").classList.add("d-none");
      document.getElementById("lockInButton").classList.add("d-none");
      document.getElementById("gameOver").classList.add("done");
      document.getElementById("new").classList.remove("new");
      document.getElementById("new").classList.add("new3");
      document.getElementById("resTwo").classList.add("d-none");
      document.getElementById("try").classList.remove("d-none");
    }
  });
}

//Hard Option

function hardOne() {
  function responseNew() {
    let humanRes = document.getElementById("humanRes").value;
    computerValue++;
    document.getElementById("displayScoreName").textContent = computerValue;

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
    if (computerValue === 5) {
      document.getElementById("gameOver").textContent = "Game Over!";
      document.getElementById("humanRes").classList.add("d-none");
      document.getElementById("lockInButton").classList.add("d-none");
      document.getElementById("gameOver").classList.add("done");
      document.getElementById("new").classList.remove("new");
      document.getElementById("new").classList.add("new2");
      document.getElementById("resTwo").classList.add("d-none");
      document.getElementById("try").classList.remove("d-none");
    }
  });
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

  document.getElementById("answer").textContent = responseOneArray[randomNumber];
  console.log(disName);

}
