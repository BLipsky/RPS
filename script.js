
let disName 
let disComName

function display() {

    disComName = document.getElementById('comName').value
    document.getElementById('displayComputerName').textContent = disComName

    disName = document.getElementById('plaName').value
    document.getElementById('displayPlayerName').textContent = disName


    document.getElementById('fullOne').classList.add("d-none")
}


let responseOneArray = [
    'Rock',
    'Paper',
    'Scissors',
    'Scissors',
    'Rock',
    'Paper',
    'Scissors'
    ]
    




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