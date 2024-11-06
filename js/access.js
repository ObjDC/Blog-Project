const audio = new Audio('../sounds/ding.mp3');
audio.volume = 1

function close_tab() {
    document.getElementById("close").style.opacity = 0
    document.getElementById("close").style.zIndex = 0
    audio.play();
}


function open_tab() {
    document.getElementById("close").style.opacity = 1
    document.getElementById("close").style.zIndex = 99999999999
    audio.play();
}