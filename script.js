function display(){

let difOne = '...'
let difTwo = '...'
let difThree = '...'

function difOne(){
    
    if (difOne === 'Easy'){
        return 'You Choose Easy'
    } else if (difOne === 'Normal'){
        return 'You Choose Normal'
    } else if (difOne === 'Hard'){
        return 'You Choose Hard'
    }
    
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
    
    let randomNumber = Math.floor(Math.random()* responseOneArray.length); // Generating Press Random
    
    document.getElementById('press-quote').textContent = responseOneArray[randomNumber]
}