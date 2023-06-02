document.addEventListener('DOMContentLoaded', startingPoint);
let playerName = '';
let isMusicOn = '';
let isSfxOn = '';

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
    });
}

function checkAudioSettings(){
    isMusicOn = document.getElementById('music-switch').checked;
    isSfxOn = document.getElementById('sfx-switch').checked;
}

/**
 * Function for playing audio effects - function take number of track as parameter
 *  #0 - 3 dings
 *  #1 - moneybar count
 *  #2 - finger snap
 */
function playSound(track){
    if (isSfxOn == true){
        let effects = [ 'assets/audio/three-ding.mp3',
                        'assets/audio/moneybar.mp3',
                        'assets/audio/finger-snap.mp3'];
        let soundToPlay = new Audio (effects[track]);
        soundToPlay.play();
    }
}
/** 
*  #1 - easy question background track
*  #2 - medium question background track
*  #3 - hard question background track
*  #4 - final question background track
*/
function playMusic(track){
    if (isMusicOn == true){
        let songs = [   'assets/audio/level1-back.mp3',
                        'assets/audio/level2-back.mp3',
                        'assets/audio/level3-back.mp3',
                        'assets/audio/level4-back.mp3',];
        let soundToPlay = new Audio (songs[track]);
        soundToPlay.play();
    }
}



/**
 * Function checks if name input is empty string.
 * If true alert message is displayed
 * If flase game starts
 */
function checkName(){
    if (document.getElementById('player-name-input').value === '') {
        alertMessage('Please enter your name !');
        startingPoint();
    }else{
        playerName = document.getElementById('player-name-input').value;
        prepareGameView();
    }
}

/**
 * Function clears the display area
 */
function clearDisplayArea(){
    document.getElementById('display-container').innerHTML = '';
}

/**
 * Function creates the life lines section with animated effects
 */
function createLifelines(){
    document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="life-lines-container" class="blue-border grey-background"></div>`;
    playSound(0);
    let insertFront = `<div class="outer-round align-center-center">`
    let insertBack = `</div>`
    let timeOut = [500,1900,3600];
    let innerTag = ['<img src="assets/images/time.png" class="lifeline-image" alt="Addition time"></img>','<img src="assets/images/change.png" class="lifeline-image" alt="Change question">','<img src="assets/images/50-50.png" class="lifeline-image" alt="Fifthy - fifthy">'];
    for (let i = 0; i < timeOut.length; i++){
        setTimeout(() => {
            document.getElementById('life-lines-container').innerHTML =  document.getElementById('life-lines-container').innerHTML + `${insertFront} ${innerTag[i]} ${insertBack}`;
        }, timeOut[i]);
    };    
}

/**
 * Function creates the moneybar section with animated effects
 */
function createMoneyBar(){
    let insertFront = `<div class="moneybar-item align-center-center"><div>`
    let insertBack = `</div></div>`
    let timeOut = [4300,4670,5040,5410,5780,6150,6520,6890,7260,7600]
    let innerTag = ['5 €','10 €','50 €','200 €','500 €','1.000 €','2.000 €','5.000 €','10.000 €','20.000 €']
    setTimeout(() => {
        document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="moneybar-container" class="blue-border grey-background"></div>`;
        playSound(1);
    }, 4300);
    for (let i = 0; i < timeOut.length; i++){
        setTimeout(() => {
            document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}${innerTag[i]}${insertBack}`;
        }, timeOut[i]);
    };
}

/**
 * Function displays score area
*/
function createScoreArea(){
    setTimeout(() => {
        document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="score-container" class="blue-border grey-background"><h2>Score :</h2><div id="score">0</div></div>`;
        playSound(2);
    }, 8200);
}

/**
 * Function displays timer area
*/
function createTimerArea(){
    setTimeout(() => {
        document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="timer-container" class="blue-border grey-background"><h2>Time left :</h2><div id="timer">30</div></div>`;
        playSound(2);
    }, 9100);
}

/**
 * Function displays timer area
*/
function createQuestionArea(){
    setTimeout(() => {
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
        playSound(2);
    }, 10000);
}

/**
 * Function prepares the user view for game
 */
function prepareGameView(){
    checkAudioSettings();
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
        }else{
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
    countdownTimer();
    playMusic(0);
}
