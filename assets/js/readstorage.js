// Start function readStorage once DOM loaded
document.addEventListener('DOMContentLoaded', readStorage);

/**
 * Function reads local storage
 */
function readStorage(){
    // Add event listener to 'play-again-button'
    document.getElementById('play-again-button').addEventListener('click', function(){
        window.location.replace('index.html');
    });
    let positionInLeaderboard = 1;
    let bestPlayers = JSON.parse(localStorage.getItem('bestPlayers'));
    // if local storage does exist and the length is bigger then 0 read it
    if (bestPlayers != null && bestPlayers.length > 0) {
        document.getElementById('leaderboard-content').innerHTML = document.getElementById('leaderboard-content').innerHTML + `<div class="leaderboard-heading"><span id="leaderboard-position">Position</span><span id="leaderboard-name">Name</span><span id="leaderboard-score">Score</span></div>`;
        bestPlayers.forEach(function(player){
            let displayName = player.name;
            let displayScore = player.score;
            document.getElementById('leaderboard-content').innerHTML = document.getElementById('leaderboard-content').innerHTML + `<div class="leaderboard-row"><span id="leaderboard-position">${positionInLeaderboard}.</span><span id="leaderboard-name">${displayName}</span><span id="leaderboard-score">${displayScore}</span></div>`;  
            
            positionInLeaderboard++;
        });
        // color first = gold, second = silver and third = bronze in the leader board list
        const ratingColor = document.getElementsByClassName('leaderboard-row');
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
    // if local storage doesn't exist or no redcords yet display this message
    }else{
        document.getElementById('leaderboard-content').innerHTML = document.getElementById('leaderboard-content').innerHTML + `<div class="leaderboard-empty">Play the game to enter the Leader Board !</div>`;
    }
}