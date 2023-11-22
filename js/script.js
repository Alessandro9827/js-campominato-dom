const mainContentEl = document.querySelector('main section.main-content');
const playButton = document.querySelector('button#btn');
let numberArrey = createArreyOfNumber (1, 100);

playButton.addEventListener('click', function() {
    for (let i = 1 ; i <= 100 ; i++){
        const currentSquare = getNewSquare();
    
        let randomIndex = getRandomNumber (0, numberArrey.length -1);
        let randomNumber = numberArrey [randomIndex];
        numberArrey.slice(randomIndex, 1);
        currentSquare.innerHTML += `<span> ${randomIndex} </span>`;
        
        currentSquare.addEventListener('click', function(){
        currentSquare.classList.toggle('clicked');
        currentSquare.classList.add('bg-blue');
        console.log('hai selezionato la casella n.', randomIndex);
        });
        
        mainContentEl.appendChild(currentSquare);
    }
});


//------ Functions ------

/**
 * Creazione quadrato
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
function createArreyOfNumber (start, end) {
    let myArrey = [];
    for (i = start ; i <= end ; i++) {
        myArrey.push(i);
    }
    return myArrey;
}