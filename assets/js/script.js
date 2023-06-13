// Start function startingPoint once DOM loaded
document.addEventListener('DOMContentLoaded', startingPoint);

// Variables
let playerName = '';
let isMusicOn = '';
let isSfxOn = '';
let currentlyPlaying = '';
let addTime = false;
let timeLeft = 0;
let questionIndex = 0;
let score = 0;
let scoreGrid = [5,10,50,200,500,1000,2000,5000,10000,20000];

// Names
const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const alertMessageContainer = document.getElementById('alert-message');
const alertWindow = document.getElementById('alert-window');
const displayConatiner = document.getElementById('display-container');
const questionAreaHTML = `
<div id="question-container" class="blue-border grey-background">
    <div id="question" class="blue-border grey-background align-center-center">
    </div>
    <div id="options" class="blue-border grey-background">
    <div class="options-row">
        <div class="blue-border grey-background answer-class">
            <span class="letter">A</span><span id="answer-a"></span>
        </div>
        <div class="blue-border grey-background answer-class">
            <span class="letter">B</span><span id="answer-b"></span>
        </div>
    </div>
    <div class="options-row">
        <div class="blue-border grey-background answer-class">
            <span class="letter">C</span><span id="answer-c"></span>
        </div>
        <div class="blue-border grey-background answer-class">
            <span class="letter">D</span><span id="answer-d"></span>
        </div>
    </div>
    </div>
</div>`;

/**
 * Function is called after first click on the play button
 */
function startingPoint(){
    playerNameInput.value = '';
    playButton.addEventListener('click', checkName);
};

/**
 * Function creates an alert window and take "display message" as parameter
 */
function alertMessage(message){
    alertWindow.style.display = 'block';
    alertMessageContainer.innerHTML = ``;
    alertMessageContainer.innerHTML = `${message}`;    
    document.getElementById('ok-button').addEventListener('click', function(){
        alertWindow.style.display = 'none';
    });
}
/**
 * Function checks for audio setting checkboxes (swithces)
 */
function checkAudioSettings(){
    isMusicOn = document.getElementById('music-switch').checked;
    isSfxOn = document.getElementById('sfx-switch').checked;
}

/**
 *  Function for playing audio effects - function take number of track as parameter
 *  #0 - 3 dings
 *  #1 - moneybar count
 *  #2 - finger snap
 *  #3 - timer effect
 *  #4 - answer sound
 *  #5 - win sound
 *  #6 - loose sound
 */
function playSound(track){
    if (isSfxOn == true){
        let effects = [     'assets/audio/three-ding.mp3',
                            'assets/audio/moneybar.mp3',
                            'assets/audio/finger-snap.mp3',
                            'assets/audio/timer.mp3',
                            'assets/audio/answer.mp3',
                            'assets/audio/win.mp3',
                            'assets/audio/loose.mp3',
                      ];
        let soundToPlay = new Audio (effects[track]);
        soundToPlay.play();
    }
}
/** 
*  Function for playing musical background - function take number of track as parameter
*  #0 - easy question background track
*  #1 - medium question background track
*  #2 - hard question background track
*  #3 - final question background track
*/
function playMusic(track){
    if (isMusicOn == true){
        let songs = [   'assets/audio/level1-back.mp3',
                        'assets/audio/level2-back.mp3',
                        'assets/audio/level3-back.mp3',
                        'assets/audio/level4-back.mp3',
                    ];
        let soundToPlay = new Audio (songs[track]);
        soundToPlay.play();
        return soundToPlay;
    }
}

/**
 * Function checks if name input is empty string.
 * If true alert message is displayed
 * If flase game starts
 */
function checkName(){
    playerName = playerNameInput.value; 
    if (playerName === ''){
        alertMessage('Please enter your name !');
        startingPoint();
    }else if (playerName.includes(' ')){
        alertMessage('Please enter name without spaces !');
        startingPoint();
    }else{ 
        prepareGameView();
    }
}

/**
 * Function clears the display area
 */
function clearDisplayArea(){
    displayConatiner.innerHTML = '';
}

/**
 * Function creates the life lines section with animated effects
 */
function createLifelines(){
    displayConatiner.innerHTML = displayConatiner.innerHTML + `<div id="life-lines-container" class="blue-border grey-background"></div>`;
    playSound(0);
    let insertFront = `<div class="outer-round align-center-center">`;
    let insertBack = `</div>`;
    let timeOut = [500,1900,3600];
    let innerTag = ['<img src="assets/images/time.png" class="lifeline-image" alt="Addition time" id="extra-time"></img>','<img src="assets/images/change.png" class="lifeline-image" alt="Change question">','<img src="assets/images/50-50.png" class="lifeline-image" alt="Fifthy - fifthy">'];
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
        displayConatiner.innerHTML = displayConatiner.innerHTML + `<div id="moneybar-container" class="blue-border grey-background"></div>`;
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
        displayConatiner.innerHTML = displayConatiner.innerHTML + `<div id="score-container" class="blue-border grey-background"><h2>Score :</h2><div id="score">0</div></div>`;
        playSound(2);
    }, 8200);
}

/**
 * Function displays timer area
*/
function createTimerArea(){
    setTimeout(() => {
        displayConatiner.innerHTML = displayConatiner.innerHTML + `<div id="timer-container" class="blue-border grey-background"><h2>Time left :</h2><div id="timer">30</div></div>`;
        playSound(2);
    }, 9100);
}

/**
 * Function displays question area
*/
function createQuestionArea(){
    setTimeout(() => {
         displayConatiner.innerHTML = displayConatiner.innerHTML + questionAreaHTML;
         playSound(2);
    }, 10000);
}

/**
 * Function prepares the user view for game
 */
function prepareGameView(){
    checkAudioSettings();
    clearDisplayArea();
    displayConatiner.style.backgroundImage = "url('assets/images/game-background.jpg')";
    createLifelines();
    createMoneyBar();
    createScoreArea();
    createTimerArea();
    createQuestionArea();
    setTimeout(() => {
        alertMessage(`Welcome to the hot seat ${playerName}. Good luck ;)`);
        document.getElementsByClassName('outer-round')[0].addEventListener('click', extraTime);
        document.getElementsByClassName('outer-round')[1].addEventListener('click', differentQuestion);
        document.getElementsByClassName('outer-round')[2].addEventListener('click', fifthyFifthy);
        startGame();
     }, 10300);
}

/**
 * Function adds extra 30 seconds to timer for answer
 */
function extraTime(){
    addTime = true;
    playSound(3);
    document.getElementsByClassName('outer-round')[0].style.border = "10px solid var(--used-lifeline)";
    document.getElementsByClassName('outer-round')[0].removeEventListener('click', extraTime);
}

function differentQuestion(){
    console.log('different question used');
    document.getElementsByClassName('outer-round')[1].style.border = "10px solid var(--used-lifeline)";
    document.getElementsByClassName('outer-round')[1].removeEventListener('click', differentQuestion);
}

function fifthyFifthy(){
    console.log('fifthy fifthy used');
    document.getElementsByClassName('outer-round')[2].style.border = "10px solid var(--used-lifeline)";
    document.getElementsByClassName('outer-round')[2].removeEventListener('click', fifthyFifthy);
}

/**
 * Function sets and starts x seconds countdown timer
 * Function takes amount of seconds as parameter
 */
function countdownTimer(){
    timeLeft = 300;
    let timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        if (isMusicOn == true){
            currentlyPlaying.pause();
        };
        endGame('outOfTime');
        }else{
        document.getElementById('timer').innerHTML = timeLeft;
        timeLeft--;
        if (addTime == true){
            timeLeft += 30;
            addTime = false;
            }
        }
    }
}

/**
 * Function randomly selects question and checks answer
 */
function askQuestion(){
    fetch('assets/questions/questions.json')
    .then((response) => response.json())
    .then((questions) => {
        document.getElementById('question-container').remove();
        displayConatiner.innerHTML = displayConatiner.innerHTML + questionAreaHTML;
        let questionRef = 'q' + (Math.floor(Math.random() * 14));
        document.getElementById('question').innerHTML = questions.easy[questionRef].question;
        let answerGrid = ['answer-a','answer-b','answer-c','answer-d'];
        for (i = 0; i < answerGrid.length; i++){
            document.getElementsByClassName('answer-class')[i].style.background = 'var(--grey-transparent)';
            document.getElementsByClassName('answer-class')[i].removeEventListener('click', function(){});
            document.getElementById(answerGrid[i]).innerHTML = questions.easy[questionRef].options[i];
        };
        const answers = document.querySelectorAll('.answer-class');
        answers.forEach((answer, index) => {
            answer.addEventListener('click', function clickHandler(event) {
                answer.style.background = 'var(--selected-answer)';
                checkAnswer(String(index), questions.easy[questionRef].answer);
            });
        });
    });
}

/**
 * Function checks player's answer against the correct answer
 * Function takes playerAnswer and correctAnswer as parameters 
 */

function checkAnswer(playerAnswer,correctAnswer){
        addMask('on');
        let isWinner;
        if (isMusicOn == true){
            currentlyPlaying.pause();
        };
        playSound(4);
        if (playerAnswer == correctAnswer){
            isWinner = true;
            addScore();
        }else{
            isWinner = false;
        };
        setTimeout(() => {
            document.getElementsByClassName('answer-class')[correctAnswer].style.background = 'var(--correct-answer)';
            if (isWinner == true){
                playSound(5);
                setTimeout(() => {
                    addMask('off');
                    document.getElementById('score').innerHTML = score;
                    document.getElementsByClassName('moneybar-item')[questionIndex-1].style.background = 'green';
                },2000);
                askQuestion();
            }else{
                playSound(6);
                setTimeout(() => {endGame('incorrectAnswer');},3500);
            };
        },3300);
}

function addScore(){
    score = timeLeft * scoreGrid[questionIndex] + score;
    questionIndex++;
}

/**
 * Function displays or hides transparent mask - player can't click on any other answers or lifelines while waiting for correct answer
 * Function takes words 'on'/'off' as parameter
 */
function addMask(maskRequired){
    if (maskRequired == 'on'){
        document.getElementById('mask').style.display = 'block';
    }else if(maskRequired == 'off'){
        document.getElementById('mask').style.display = 'none';
    }
}

function startGame(){
        countdownTimer();
        currentlyPlaying = playMusic(0);
        askQuestion();
}

/**
 * Function is called after the game is over
 */
function endGame(reason){
    clearDisplayArea();
    switch (reason){
        case 'outOfTime' :
            console.log('out of time');
            break;
        case 'incorrectAnswer' :
            console.log('wrong answer');
            break;        
    }
}