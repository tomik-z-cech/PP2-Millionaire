let playerName = '';
document.addEventListener("DOMContentLoaded", startingPoint);
console.log('Script loaded ...');
function startingPoint(){
document.getElementById('play-button').addEventListener('click', checkName);
};

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

// Function validates users input of name
function checkName(){
    if (document.getElementById('player-name-input').value === '') {
        console.log('Name empty !')
        alertMessage('Please enter your name !');
        startingPoint();
    }else{
        playerName = document.getElementById('player-name-input').value;
        console.log(`Name OK ... ${playerName}`)
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
    document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `mrdka z krtka`
}

function createMoneyBar(){
    console.log('Creating Money Bar ...');
}

function welcomePlayer(){
    console.log('Displaying welcome message ...');
    document.getElementById('display-container').innerHTML = document.getElementById('display-container').innerHTML + `Hello ${playerName} !`;
}

function prepareUserView(){
    clearDisplayArea();
    document.getElementById('display-container').style.backgroundImage = "url('assets/images/game-background.jpg')";
    welcomePlayer();
    createLifelines();
    createMoneyBar();
}
