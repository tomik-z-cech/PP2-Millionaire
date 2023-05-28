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
 * Function for playing audio effects
 */
function playSound(track){
    var sound0 = new Audio ('https://tomik-z-cech.github.io/PP2-Millionaire/assets/audio/ding.wav');
    switch (track){
        case 'sound0' : {
            sound0.play();
            break;
        }
    }
    console.log('Playing sound ...');
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
        startGame();
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
    document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `<div id="life-lines-container" class="blue-border grey-background">
    </div>`;
    setTimeout(() => {
        document.getElementById('life-lines-container').innerHTML =  document.getElementById('life-lines-container').innerHTML + `prvni`;
        playSound('sound0');
    }, 800);
    setTimeout(() => {
        document.getElementById('life-lines-container').innerHTML =  document.getElementById('life-lines-container').innerHTML + `druhy`;
        playSound('sound0');
    }, 1600);
    setTimeout(() => {
        document.getElementById('life-lines-container').innerHTML =  document.getElementById('life-lines-container').innerHTML + `treti`;
        playSound('sound0');
    }, 2400);
}

/**
 * Function creates the moneybar section with animated effects
 */
function createMoneyBar(){
    console.log('Creating Money Bar ...');
}

/**
 * Function welcomes player in the game
 */
function welcomePlayer(){
    console.log('Displaying welcome message ...');
    document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `Hello ${playerName} !`;
}

/**
 * Function prepares the user view for game
 */
function prepareGameView(){
    clearDisplayArea();
    document.getElementById('display-container').style.backgroundImage = "url('assets/images/game-background.jpg')";
    welcomePlayer();
    createLifelines();
    createMoneyBar();
}

/**
 * Main function that starts the game
 */
function startGame(){
    prepareGameView();
}
