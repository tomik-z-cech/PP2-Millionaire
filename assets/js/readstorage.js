// Start function readStorage once DOM loaded
document.addEventListener('DOMContentLoaded', readStorage);

function readStorage(){
    let bestPlayers = JSON.parse(localStorage.getItem('bestPlayers'));
    console.log(bestPlayers);
}
