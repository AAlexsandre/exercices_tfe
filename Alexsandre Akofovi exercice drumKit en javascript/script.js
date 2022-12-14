function createPads() {
    let boardPad = document.getElementById("drumHolder");
    let pad;
    let description;
    for (let i = 0; i < 9; ++i) {
        pad = document.createElement("div");
        pad.setAttribute("id", "pad" + i);
        pad.setAttribute("class", "pad");
        pad.setAttribute("onclick", 'playAudio(this)');
        boardPad.appendChild(pad);
        description = document.createElement("p");
        description.innerHTML = arrayData[i].lettre;
        pad.appendChild(description);
        addSounds(pad, i);
    }
}

createPads();

function addSounds(pad, i) {
    let audio = document.createElement("audio");
    let source = document.createElement("source");
    pad.appendChild(audio);
    audio.appendChild(source);
    audio.setAttribute("id", "sound" + i);
    source.setAttribute("src", "ressources/" + arrayData[i].src);
}

function playAudio(padSound) {
    document.getElementById(padSound.childNodes[1].id).play();
    padSound.style.opacity = "50%";
}