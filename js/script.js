const mainContentEl = document.querySelector('main section.main-content');
const playButton = document.querySelector('button#btn');
const difficultySelectorEl = document.querySelector('select#select-difficulty');
let numberArray = createArrayOfNumber (1, 100);

playButton.addEventListener('click', function() {
    //nome Funzione che genera la partita
    generateNewGame(mainContentEl, difficultySelectorEl);
});


//------ Functions ------

/**
 * Creazione quadrati
 * @returns
 */ 
function getNewSquare() {
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('item-square');
    return newSquareElement;
}

/** 
 * Genera un numero casuale
 * @param minNumber 
 * @param maxNumber 
 * @returns 
 */
function getRandomNumber(minNumber, maxNumber) {
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}

/**
 * Non ripete 2 volte un numero generato
 * @param  start 
 * @param  end 
 * @returns 
 */
function createArrayOfNumber (start, end) {
    let myArray = [];
    for (i = start ; i <= end ; i++) {
        myArray.push(i);
    }
    return myArray;
}


function generateNewGame(wrapperElement, levelSelector) {
    wrapperElement.innerHTML = '';

    const level = parseInt(levelSelector.value);
    let cellsNo;

    switch (level) {
        case 0:
        default:
            cellsNo = 100;
            break;
        case 1:
            cellsNo = 81;
            break;
        case 2:
            cellsNo = 49;
            break;
    }

    let cellsPerRow = Math.sqrt(cellsNo);


    for (let i = 1 ; i <= cellsNo ; i++) {
        const currentSquare = getNewSquare();
    
        //Creazione numeri random nella caselle
        let randomIndex = getRandomNumber (0, numberArray.length -1);
        let randomNumber = numberArray [randomIndex];
        numberArray.slice(1, randomIndex);
        currentSquare.innerHTML += `<span> ${randomIndex} </span>`; //Stampa il numero cas. nella casella
        
        const cellSize = `calc(100% / ${cellsPerRow})`;
        currentSquare.style.width = cellSize;
        currentSquare.style.height= cellSize;

        //al click dell'utente
        currentSquare.addEventListener('click', function(){
        currentSquare.classList.toggle('clicked');
        currentSquare.classList.add('bg-blue');
        console.log('hai selezionato la casella n.', randomIndex);
        });
        
        mainContentEl.appendChild(currentSquare);
    };
}