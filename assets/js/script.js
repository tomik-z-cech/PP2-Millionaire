// Start function startingPoint once DOM loaded
document.addEventListener('DOMContentLoaded', startingPoint);

// Variables
let playerName = '';
let isMusicOn = '';
let isSfxOn = '';
let currentlyPlaying = '';
let addTime = false;
let timeLeft = 30;
let questionIndex = 0;
let score = 0;
let scoreGrid = [5,10,50,200,500,1000,2000,5000,10000,20000];
let timerStopped = false;
let answerToKeep = '';
let questionsAlreadySelected = [];

// Constants
const playerNameInput = document.getElementById('player-name-input');
const playButton = document.getElementById('play-button');
const alertMessageContainer = document.getElementById('alert-message');
const alertWindow = document.getElementById('alert-window');
const displayConatiner = document.getElementById('display-container');
const okButton = document.getElementById('ok-button');
const questionAreaHTML = `
<div id="question-container" class="blue-border grey-background">
    <div id="question" class="blue-border grey-background align-center-center">
    </div>
    <div id="options" class="blue-border grey-background">
        <div class="blue-border grey-background answer-class" id="answer-a-container">
            <span class="letter">A</span><span id="answer-a"></span>
        </div>
        <div class="blue-border grey-background answer-class" id="answer-b-container">
            <span class="letter">B</span><span id="answer-b"></span>
        </div>
        <div class="blue-border grey-background answer-class" id="answer-c-container">
            <span class="letter">C</span><span id="answer-c"></span>
        </div>
        <div class="blue-border grey-background answer-class" id="answer-d-container">
            <span class="letter">D</span><span id="answer-d"></span>
        </div>
    </div>
</div>`;

/**
 * Function is called after first click on the play button
 */
function startingPoint(){
    playerNameInput.value = '';
    playButton.addEventListener('click', checkName);
}

/**
 * Function creates an alert window and take "message" as parameter to display alert message
 */
function alertMessage(message){
    alertWindow.style.display = 'block';
    alertMessageContainer.innerHTML = ``;
    alertMessageContainer.innerHTML = `${message}`;    
    okButton.addEventListener('click', function(){
        alertWindow.style.display = 'none';
    });
}
/**
 * Function checks for audio setting checkboxes (switchces)
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
 *  #4 - answer
 *  #5 - win
 *  #6 - loose
 *  #7 - big win
 *  #8 - bell
 *  #9 - fifthy fifthy lifeline
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
                            'assets/audio/big-win.mp3',
                            'assets/audio/change-question.mp3',
                            'assets/audio/l50-50.mp3'
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
 * Function checks if players name input is empty string or contains spaces 
 * If true alert message is displayed
 * If false game starts
 */
function checkName(){
    playerName = playerNameInput.value; 
    if (playerName === ''){
        //players name empty string
        alertMessage('Please enter your name !');
        startingPoint();
    }else if (playerName.includes(' ')){
        //players name contains spaces
        alertMessage('Please enter name without spaces !');
        startingPoint();
    }else{ 
        //players name is good to go
        prepareGameView();
    }
    return;
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
    let innerTag = [
        '<img src="assets/images/time.png" class="lifeline-image" alt="Addition time"></img>',
        '<img src="assets/images/change.png" class="lifeline-image" alt="Change question">',
        '<img src="assets/images/50-50.png" class="lifeline-image" alt="Fifthy - fifthy">'];
    for (let i = 0; i < timeOut.length; i++){
        setTimeout(() => {
            document.getElementById('life-lines-container').innerHTML =  document.getElementById('life-lines-container').innerHTML + `${insertFront} ${innerTag[i]} ${insertBack}`;
        }, timeOut[i]);
    }    
}

/**
 * Function creates the moneybar section with animated effects
 */
function createMoneyBar(){
    let insertFront = `<div class="moneybar-item align-center-center"><div>`;
    let insertBack = `</div></div>`;
    let timeOut = [4300,4670,5040,5410,5780,6150,6520,6890,7260,7600];
    let innerTag = ['€ 5','€ 10','€ 50','€ 200','€ 500','€ 1.000','€ 2.000','€ 5.000','€ 10.000','€ 20.000'];
    setTimeout(() => {
        displayConatiner.innerHTML = displayConatiner.innerHTML + `<div id="moneybar-container" class="blue-border grey-background"></div>`;
        playSound(1);
    }, 4300);
    for (let i = 0; i < timeOut.length; i++){
        setTimeout(() => {
            document.getElementById('moneybar-container').innerHTML =  document.getElementById('moneybar-container').innerHTML + `${insertFront}${innerTag[i]}${insertBack}`;
        }, timeOut[i]);
    }
}

/**
 * Function displays score area
*/
function createScoreArea(){
    setTimeout(() => {
        displayConatiner.innerHTML = displayConatiner.innerHTML + `<div id="score-container" class="blue-border grey-background"><h2 class="top-margin">Score :</h2><div id="score">0</div></div>`;
        playSound(2);
    }, 8200);
}

/**
 * Function displays timer area
*/
function createTimerArea(){
    setTimeout(() => {
        displayConatiner.innerHTML = displayConatiner.innerHTML + `<div id="timer-container" class="blue-border grey-background"><h2 class="top-margin">Time left :</h2><div id="timer">30</div></div>`;
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
        document.getElementsByClassName('outer-round')[0].setAttribute("onClick", "extraTime()");
        document.getElementsByClassName('outer-round')[1].setAttribute("onClick", "differentQuestion()");
        document.getElementsByClassName('outer-round')[2].setAttribute("onClick", "fifthyFifthy()");
        countdownTimer();
        askQuestion();
        return;
     }, 10300);
}

/**
 * Function adds extra 30 seconds to timer for answer
 */
function extraTime(){
    addTime = true;
    playSound(3);
    document.getElementsByClassName('outer-round')[0].style.border = "10px solid var(--used-lifeline)";
    document.getElementsByClassName('outer-round')[0].removeAttribute("onClick");
}

/**
 * Function changes the question
 */
function differentQuestion(){
    playSound(8);
    if (isMusicOn == true){
        currentlyPlaying.pause();
    }
    document.getElementsByClassName('outer-round')[1].style.border = "10px solid var(--used-lifeline)";
    document.getElementsByClassName('outer-round')[1].removeAttribute("onClick");
    askQuestion();
}

/**
 * Function removes two incorrect answers
 */
function fifthyFifthy(){
    playSound(9);
    let remove1;
    let remove2;
    // condition to keep the right answer & 2 answers to remove aren't the same
    while (remove1 == answerToKeep || remove2 == answerToKeep || remove1 == remove2){
        remove1 = (Math.floor(Math.random() * 4));
        remove2 = (Math.floor(Math.random() * 4));
    }
    // remove 2 incorrect answers
    document.getElementsByClassName('answer-class')[remove1].style.display = 'none';
    document.getElementsByClassName('answer-class')[remove2].style.display = 'none';
    document.getElementsByClassName('outer-round')[2].style.border = "10px solid var(--used-lifeline)";
    document.getElementsByClassName('outer-round')[2].removeAttribute("onClick");
}

/**
 * Function starts 30 seconds countdown timer
 * Timer can be "stopped" or "added to" 
 */
function countdownTimer(){
    let timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        // end game as timer is out
        endGame('outOfTime');
        }else{
        document.getElementById('timer').innerHTML = timeLeft;
        // stop timer once answer is given
        if (timerStopped == false) timeLeft--;
        // add time if extraTime() function used
        if (addTime == true){
            timeLeft += 30;
            addTime = false;
            }
        }
    }
}

/**
 * Function randomly selects and displays question and answer options
 */
function askQuestion(){
    // reset timer to 30 seconds
    timeLeft = 30;
    timerStopped = false;
    // determine level of question to ask
    let level = '';
    if (questionIndex < 3){
        level = 'easy';
        currentlyPlaying = playMusic(0);
    }else if (questionIndex < 6){
        level = 'medium';
        currentlyPlaying = playMusic(1);
    }else if (questionIndex < 9){
        level = 'hard';
        currentlyPlaying = playMusic(2);
    }else{
        level = 'final';
        currentlyPlaying = playMusic(3);
    }
    // fetch database of questions & answers
    fetch('assets/questions/questions.json')
    .then((response) => response.json())
    .then((questions) => {
        let questionRef;
        // reset question conatiner
        document.getElementById('question-container').remove();
        displayConatiner.innerHTML = displayConatiner.innerHTML + questionAreaHTML;
        document.getElementsByClassName('moneybar-item')[questionIndex].style.background = 'var(--current-moneybar)';
        // randomly select a question and check if the same number was already used
        do {
            questionRef = 'q' + (Math.floor(Math.random() * 16));
        } while (questionsAlreadySelected.includes(questionRef) == true);
        questionsAlreadySelected.push(questionRef);
        // set correct answer to keep if 50:50 lifeline is used
        answerToKeep = Number(questions.qlevel[level].pointer[questionRef].answer);
        document.getElementById('question').innerHTML = questions.qlevel[level].pointer[questionRef].question;
        // display answer options in the grid
        let answerGrid = ['answer-a','answer-b','answer-c','answer-d'];
        for (let i = 0; i < answerGrid.length; i++){
            document.getElementsByClassName('answer-class')[i].style.background = 'var(--grey-transparent)';
            document.getElementById(answerGrid[i]).innerHTML = questions.qlevel[level].pointer[questionRef].options[i];
        }
        // event listeners for options
        const answers = document.querySelectorAll('.answer-class');
        answers.forEach((answer, index) => {
            answer.addEventListener('click', function clickHandler(event) {
                answer.style.background = 'var(--selected-answer)';
                checkAnswer(String(index), questions.qlevel[level].pointer[questionRef].answer);
            });
        });
    });
}

/**
 * Function checks player's answer against the correct answer
 * Function takes playerAnswer and correctAnswer as parameters 
 */
function checkAnswer(playerAnswer,correctAnswer){
        // stop timer while checking if answer correct
        timerStopped = true;
        addMask('on');
        let isWinner;
        if (isMusicOn == true){
            currentlyPlaying.pause();
        }
        playSound(4);
        // correct answer selected
        if (playerAnswer == correctAnswer){
            isWinner = true;
            addScore();
        // incorrect answer selected
        }else{
            isWinner = false;
        }
        answerToKeep = '';
        // reset variables and display another question if answer was correct
        setTimeout(() => {
            document.getElementsByClassName('answer-class')[correctAnswer].style.background = 'var(--correct-answer)';
            if (isWinner == true){
                if (questionIndex == 10){
                    endGame('winner');
                    return;
                }else{
                    playSound(5);
                }
                setTimeout(() => {
                    addMask('off');
                    document.getElementById('score').innerHTML = score;
                    document.getElementsByClassName('moneybar-item')[questionIndex-1].style.background = 'var(--correct-answer)';
                },500);
                askQuestion();
            }else{
                // end the game as selected answer wasn't correct
                playSound(6);
                setTimeout(() => {endGame('incorrectAnswer');},3500);
            }
        },3300);
}

/**
 * Function counts players score
 */
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

/**
 * Function is called after the game is over
 */
function endGame(reason){
    if (isMusicOn == true){
        currentlyPlaying.pause();
    }
    timerStopped = true;
    let front = `<div class="align-center-center">`;
    let back = `</div>`;
    addMask('on');
    // switch to end game reason
    switch (reason){
        case 'outOfTime' :
            alertMessage(`${front}You've run out of time ${playerName}!${back}${front}Your score ${score} pts is not eligible for Leader Board.${back}`);
            break;
        case 'incorrectAnswer' :
            alertMessage(`${front}That's wrong ${playerName}!${back}${front}Your score ${score} pts is not eligible for Leader Board.${back}`);
            break;
        case 'winner' :
            document.getElementById('score').innerHTML = score;
            document.getElementsByClassName('moneybar-item')[9].style.background = 'var(--correct-answer)';
            playSound(7);
            recordTheScore();
            alertMessage(`${front}You are a winner ${playerName}!${back}${front}Your score is ${score} pts.${back}`);
            break;     
    }
    okButton.addEventListener('click', function(){
        alertWindow.style.display = 'none';
        window.location.replace('leaderboard.html');
    });
}

/**
 * Function records the score in leader board if in the best 10 players
 */
function recordTheScore(){
    // read local storage
    let bestPlayers = JSON.parse(localStorage.getItem('bestPlayers'));
    if (!bestPlayers){
        bestPlayers = [];
        }
    let playersRecord = {
        name: playerName,
        score: score
      };
    bestPlayers.push(playersRecord);
    // sort the leader board in descending order
    bestPlayers.sort(function(a, b) {
        return b.score - a.score;
      });
    // have only 10 records
    bestPlayers = bestPlayers.slice(0, 10);
    // write to local storage
    localStorage.setItem('bestPlayers', JSON.stringify(bestPlayers));
    }