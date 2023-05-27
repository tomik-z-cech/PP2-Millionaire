let playerName = '';
console.log('Script loaded ...');
document.getElementById('play-button').addEventListener('click', checkName);

// Function validates users input of name
function checkName(){
    if (document.getElementById('player-name-input').value === '') {
        console.log('Name empty !')
        alert('Please enter your name !')
    }else{
        playerName = document.getElementById('player-name-input').value;
        console.log('Name OK ...')
        console.log('Starting game ...')
        prepareUserView();
    }
}

// Function clears display area
function clearDisplayArea(){
    console.log('Clearing display area ...');
    document.getElementById('display-container').innerHTML = '';
}

function createLifelines(){
    console.log('Creating lifelines ...');
}

function createMoneyBar(){
    console.log('Creating Money Bar ...');
}

function welcomePlayer(){
    console.log('Displaying welcome message ...');
    document.getElementById('display-container').innerHTML = `Hello ${playerName} !`;
}

function prepareUserView(){
    clearDisplayArea();
    document.getElementById('display-container').style.backgroundImage = "url('assets/images/game-background.jpg')";
    welcomePlayer();
    createLifelines();
    createMoneyBar();
}

