// Start function readStorage once DOM loaded
document.addEventListener('DOMContentLoaded', readStorage);

function readStorage(){
    let positionInLeaderboard = 1;
    let bestPlayers = JSON.parse(localStorage.getItem('bestPlayers'));
    if (bestPlayers != null && bestPlayers.length > 0) {
        document.getElementById('leaderboard-content').innerHTML = document.getElementById('leaderboard-content').innerHTML + `<div class="leaderboard-heading"><span id="leaderboard-position">Position</span><span id="leaderboard-name">Name</span><span id="leaderboard-score">Score</span></div>`;
        bestPlayers.forEach(function(player){
            let displayName = player.name;
            let displayScore = player.score;
            document.getElementById('leaderboard-content').innerHTML = document.getElementById('leaderboard-content').innerHTML + `<div class="leaderboard-row"><span id="leaderboard-position">${positionInLeaderboard}.</span><span id="leaderboard-name">${displayName}</span><span id="leaderboard-score">${displayScore}</span></div>`;  
            
            positionInLeaderboard++;
        });
        const ratingColor = document.getElementsByClassName('leaderboard-row');
        console.log(ratingColor);
        for (let i = 0; i < bestPlayers.length; i++){
            switch (i){
            case 0 :    ratingColor[i].style.color = 'var(--gold)';
                        break;
            case 1 :    ratingColor[i].style.color = 'var(--silver)';
                        break;
            case 2 :    ratingColor[i].style.color = 'var(--bronze)';
                        break;
            default :   break;
            }
        }
    }else{
        document.getElementById('leaderboard-content').innerHTML = document.getElementById('leaderboard-content').innerHTML + `<div class="leaderboard-empty">Play the game to enter the leaderboard !</div>`;
    }
}