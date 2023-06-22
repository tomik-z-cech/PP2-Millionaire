// Start function readStorage once DOM loaded
document.addEventListener('DOMContentLoaded', readStorage);

function readStorage(){
    let bestPlayers = JSON.parse(localStorage.getItem('bestPlayers'));
    console.log(bestPlayers);
    if (bestPlayers.length > 0 && bestPlayers) {
    bestPlayers.forEach(function(player){
        let displayName = player.name;
        let displayScore = player.score;
        document.getElementById('leaderboard').innerHTML = document.getElementById('leaderboard').innerHTML + `Player : ${displayName} - Score : ${displayScore} <br>`;  
    });
}
}