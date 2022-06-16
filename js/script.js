// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
let alertB = generateBombs(5, 1, 100)
alert(alertB)

const clock = setTimeout(AskNumber,30000);

function AskNumber(){
    const userScore = [];
    for (let i = 0; i < 5; i++) {
      let userNum = parseInt(prompt("insersci un numero"));
      if(alertB.includes(userNum) && !userScore.includes(userNum)){
        userScore.push(userNum);
      }
    }
    const userMsg = `hai fatto ${userScore.length} punti. ${userScore}`;
    alert(userMsg);
  }

// FUNZIONI
function generateBombs(numOfElem, rangeMin, rangeMax) {
    let randomNumArray = [];
    while(randomNumArray.length < numOfElem) {
        const randomNum = getRndInteger(rangeMin, rangeMax);
        if(!randomNumArray.includes(randomNum)) {
            randomNumArray.push(randomNum);
        }
    }
    return randomNumArray;
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}