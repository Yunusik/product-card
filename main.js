// покраска всех карточек
const card = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#0fea37';
const blueColorHash = '#0000ff'; 

changeColorAllCardButton.addEventListener('click', () => {
    card.forEach((card ) => card.style.backgroundColor = greenColorHash)
})

// покраска первой карточки

const Firstcard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
   Firstcard.style.backgroundColor = blueColorHash;
})

// открытие браузера Google
const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('вы действтельно хотите открыть Google');

    if (answer === true) {
        window.open ('https://google.com')
    } 
    
    else {
        return;
    }
}
// Вывод консоль лог

const outpotLogButton = document.querySelector ('#outpot-console-log'); 

outpotLogButton.addEventListener('click', ()=> outpotConsoleLog('Дз №4'))

function outpotConsoleLog(message){
    alert(message) 
    console.log(message)
}

