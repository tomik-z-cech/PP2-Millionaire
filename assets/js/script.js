let playerName = '';
document.addEventListener('DOMContentLoaded', startingPoint);
console.log('Script loaded ...');

/**
 * Function is called after first click on the play button
 */
function startingPoint(){
document.getElementById('play-button').addEventListener('click', checkName);
};

/**
 * Function creates an alert window and take "display message" as parameter
 */
function alertMessage(message){
    console.log(`Displaying alert window : ${message}`);
    document.body.innerHTML = document.body.innerHTML + `
    <aside>
    <div id="alert-window" class="blue-border">
        <div class="align-center-center">
            <img src="assets/images/info-icon.png" alt="Info icon" id="info-icon">
            <h2>Information ...</h2>
        </div>
        <div class="align-center-center">
            <h3 id="alert-message">${message}</h3>
        </div>
        <div class="align-center-center">
            <button class="button" id="ok-button">OK</button>
        </div>
    </div>
    </aside>`;
    document.getElementById('ok-button').addEventListener('click', function(){
        let alertWindow = document.getElementById('alert-window');
        alertWindow.remove();
        console.log('Closing alert window ...');
    });
}

/**
 * Function for playing audio effects - function take number of track as parameter
 *  #0 - 3 dings
 *  #1 - easy question background track
 *  #2 - medium question background track
 *  #3 - hard question background track
 *  #4 - final question background track
 *  #5 - moneybar count
 *  #6 - finger snap
 */
function playSound(track){
    let effects = ['https://tomik-z-cech.github.io/PP2-Millionaire/assets/audio/three-ding.mp3',
                    'https://tomik-z-cech.github.io/PP2-Millionaire/assets/audio/level1-back.mp3',
                    'https://tomik-z-cech.github.io/PP2-Millionaire/assets/audio/level2-back.mp3',
                    'https://tomik-z-cech.github.io/PP2-Millionaire/assets/audio/level3-back.mp3',
                    'https://tomik-z-cech.github.io/PP2-Millionaire/assets/audio/level4-back.mp3',
                    'https://tomik-z-cech.github.io/PP2-Millionaire/assets/audio/moneybar.mp3',
                    'https://tomik-z-cech.github.io/PP2-Millionaire/assets/audio/finger-snap.mp3'];
    let soundToPlay = new Audio (effects[track]);
    soundToPlay.play();
    console.log(`Playing sound ${track}`);
}

/**
 * Function checks if name input is empty string.
 * If true alert message is displayed
 * If flase game starts
 */
function checkName(){
    if (document.getElementById('player-name-input').value === '') {
        console.log('Name empty !')
        alertMessage('Please enter your name !');
        startingPoint();
    }else{
        playerName = document.getElementById('player-name-input').value;
        console.log(`Name OK ... ${playerName}`)
        console.log('Starting game ...')
        prepareGameView();
    }
}

/**
 * Function clears the display area
 */
function clearDisplayArea(){
    console.log('Clearing display area ...');
    document.getElementById('display-container').innerHTML = '';
}

/**
 * Function creates the life lines section with animated effects
 */
function createLifelines(){
    console.log('Creating lifelines ...');
    document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="life-lines-container" class="blue-border grey-background"></div>`;
    playSound(0);
    let insertFront = `<div class="outer-round align-center-center">`
    let insertBack = `</div>`
    setTimeout(() => {
        document.getElementById('life-lines-container').innerHTML =  document.getElementById('life-lines-container').innerHTML + `${insertFront}<img src="assets/images/time.png" class="lifeline-image" alt="Addition time">${insertBack}`;
    }, 500);
    setTimeout(() => {
        document.getElementById('life-lines-container').innerHTML =  document.getElementById('life-lines-container').innerHTML + `${insertFront}<img src="assets/images/change.png" class="lifeline-image" alt="Change question">${insertBack}`;
    }, 1900);
    setTimeout(() => {
        document.getElementById('life-lines-container').innerHTML =  document.getElementById('life-lines-container').innerHTML + `${insertFront}<img src="assets/images/50-50.png" class="lifeline-image" alt="Fifthy - fifthy">${insertBack}`;
        nextStep = true;
    }, 3600);
}

/**
 * Function creates the moneybar section with animated effects
 */
function createMoneyBar(){
    let insertFront = `<div class="moneybar-item align-center-center"><div>`
    let insertBack = `</div></div>`
    setTimeout(() => {
        console.log('Creating Money Bar ...');
        document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="moneybar-container" class="blue-border grey-background"></div>`;
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}5 €${insertBack}`;
        playSound(5);
    }, 4300);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}10 €${insertBack}`;
    }, 4670);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}50 €${insertBack}`;
    }, 5040);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}200 €${insertBack}`;
    }, 5410);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}500 €${insertBack}`;
    }, 5780);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}1.000 €${insertBack}`;
    }, 6150);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}2.000 €${insertBack}`;
    }, 6520);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}5.000 €${insertBack}`;
    }, 6890);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}10.000 €${insertBack}`;
    }, 7260);
    setTimeout(() => {
        document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}20.000 €${insertBack}`;
    }, 7600);
}

/**
 * Function displays score area
*/
function createScoreArea(){
    setTimeout(() => {
        console.log('Creating Score Area ...');
        document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="score-container" class="blue-border grey-background"><h2>Score :</h2><div id="score">0</div></div>`;
        playSound(6);
    }, 8200);
}

/**
 * Function displays timer area
*/
function createTimerArea(){
    setTimeout(() => {
        console.log('Creating Timer Area ...');
        document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="timer-container" class="blue-border grey-background"><h2>Time left :</h2><div id="timer">30</div></div>`;
        playSound(6);
    }, 9100);
}

/**
 * Function displays timer area
*/
function createQuestionArea(){
    setTimeout(() => {
        console.log('Creating Question Area ...');
        document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="question-container" class="blue-border grey-background">
        <div id="question" class="blue-border grey-background">
        </div>
        <div id="options" class="blue-border grey-background">
            <div class="options-row">
                <div class="blue-border grey-background answer-class">
                    <span class="letter">A</span><span id="answer"></span>
                </div>
                <div class="blue-border grey-background answer-class">
                    <span class="letter">B</span><span id="answer"></span>
                </div>
            </div>
            <div class="options-row">
                <div class="blue-border grey-background answer-class">
                    <span class="letter">C</span><span id="answer"></span>
                </div>
                <div class="blue-border grey-background answer-class">
                    <span class="letter">D</span><span id="answer"></span>
                </div>
            </div>
        </div>
    </div>`;
        playSound(6);
    }, 10000);
}

/**
 * Function prepares the user view for game
 */
function prepareGameView(){
    clearDisplayArea();
    document.getElementById('display-container').style.backgroundImage = "url('assets/images/game-background.jpg')";
    createLifelines();
    createMoneyBar();
    createScoreArea();
    createTimerArea();
    createQuestionArea();
    setTimeout(() => {
        alertMessage(`Welcome to the hot seat ${playerName}. Good luck ;)`);
        document.getElementById('ok-button').addEventListener('click',function(){
            startGame();
        })
     }, 10300);
}

function countdownTimer(){
    let timeLeft = 30;
    let timeDisplay = document.getElementById('timer');
    let timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        timeIsUp();
        } else {
        timeDisplay.innerHTML = timeLeft;
        timeLeft--;
        }
    }
}

function timeIsUp(){
    alert('Time is up');
}

/**
 * Main function that starts the game
 */
function startGame(){
    playSound(1);
    countdownTimer();
}
