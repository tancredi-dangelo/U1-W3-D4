// DECLARE CONSTANTS

const board = document.getElementById("board")
const numbersDrafted = []
const numbersOnTheBoard = []
const numbersRemaining = []
const draftButton = document.getElementById("draftButton")

// DRAW THE BOARD

for (let i=0; i<76; i++) {
    numbersOnTheBoard.push(i+1)
}

numbersOnTheBoard.forEach((number) => {
    let cell = document.createElement("div")
    cell.classList.add("tombola-cells")
    let numberInCell = document.createElement("p")
    numberInCell.innerText = number
    cell.appendChild(numberInCell)
    board.appendChild(cell)
})

// SET REMAINING NUMBERS

for (let i=0; i<76; i++) {
    numbersRemaining.push(i+1)
}


// CALL A NUMBER
const callNumber = function(array) {
    let arrayLength = array.length
    let randomIndex = Math.floor(Math.random()*arrayLength)
    let extracted = array[randomIndex]
    array.splice(randomIndex,1)
     // CANCEL DRAFTED NUMBERS 
    let cellsArray = [...document.querySelectorAll("#board div")]
    cellsArray.forEach(cell => {
        let cellNumber = Number(cell.querySelector("p").innerText)
        if (cellNumber === extracted) {
            console.log("drafted", extracted)
            cell.classList.add("drafted-cells")
        }
    })
    if (numbersRemaining.length === 0) {
        alert("All numbers drafted!")
    }
}

draftButton.addEventListener("click", function() {
    callNumber(numbersRemaining)
})


// CREATE PLAYER CARD 
const cards = document.getElementById("playerCards") // access player cards div
const generateCards = function () {
    let playerInput = document.getElementById("playerInput")
    for (let i = 1; i <= playerInput.value.length; i++) { // create nth player cards divs
        let playerCard = document.createElement("div")
        playerCard.setAttribute("id",`playerCard${i}`)
        playerCard.classList.add("player-card")
        let cellNumbers = []
        while (cellNumbers.length <= 24) {  // create 24 cell divs per card
            number = Math.ceil(Math.random()*numbersOnTheBoard)
            if (!cellNumbers.includes(number)) {
                cellNumbers.push(number)
            }
        }
        cellNumbers.forEach((number) => {
            let playerCell = document.createElement("div")
            playerCell.classList.add("playerCell")
        })
    }

    }
}

const selectButton = document.getElementById("cardsSelectButton")
selectButton.addEventListener("click", function() {
    generateCards()
})