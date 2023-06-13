// Start function readStorage once DOM loaded
document.addEventListener('DOMContentLoaded', readStorage);

function readStorage(){
    let sizeOfStorage = localStorage.length;
    for (i = 0; i < sizeOfStorage; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
    };
}
