let disName;
let disComName;

function display() {
  disComName = document.getElementById("comName").value
  document.getElementById("displayComputerName").textContent = "CPU Name"
  document.getElementById("displayComputerName1").textContent = disComName

  disName = document.getElementById("plaName").value
  document.getElementById("displayPlayerName").textContent = "Player Name"
  document.getElementById("displayPlayerName1").textContent = disName

  document.getElementById("fullOne").classList.add("d-none")
}

let responseOneArray = [
  "Rock",
  "Paper",
  "Scissors",
  "Scissors",
  "Rock",
  "Paper",
  "Scissors",
]
  let humanRes = document.getElementById("humanRes").value

function responseShow() {

  if (humanRes === "Rock") {
    return "Paper"
  } else if (humanRes === "Paper") {
    return "Scissors"
  } else if (humanRes === "Scissors") {
    return "Rock"
  } else {
    return ""
  }
}

document.getElementById("resOne").textContent = responseShow()

//   let randomNumber = Math.floor(Math.random()* responseOneArray.length); // Generating Press Random

//   document.getElementById('answer').textContent = responseOneArray[randomNumber]
//    console.log(disName)

// function selectOne(){

// if (difSelector === 'Easy'){
//    return 'You Choose Easy'
// } else if (difSelector === 'Normal'){
//    return 'You Choose Normal'
// } else if (difSelector === 'Hard'){
//    return 'You Choose Hard'
// }
// }
