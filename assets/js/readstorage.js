// Start function readStorage once DOM loaded
document.addEventListener('DOMContentLoaded', readStorage);
let storage;
function readStorage(){
    const playerName = localStorage.getItem("player");
    console.log(playerName);
    const score = localStorage.getItem("score");
    console.log(score);
}
