// know-numbers
function handleShowNumber() {
    //let numbersDisplay = document.getElementById('numbers-display');
    const numbers = [];
    for(let i=0; i<=30; i++) {
        numbers.push(i);
    }

    let numbersToShow = [];
    const randomIndex = () => {
        return Math.floor(Math.random()*31);
    }

    for(let j=0; j<3; j++) {
        let x = numbers[randomIndex()];
        while(numbersToShow.includes(x)){
            x = numbers[randomIndex()];
        }
        numbersToShow.push(x);
    }

    document.getElementById('numbers-display').innerHTML = numbersToShow.join(', ');
}

document.getElementById('know-numbers-btn').addEventListener('click', handleShowNumber);
