function createPads() {
    let boardPad = document.getElementById("drumHolder");
    let pad;
    let lettre;
    let description;


    for (let i = 0; i < tabSounds.length; ++i) {
        pad = document.createElement("div");
        pad.id = "pad" + i;
        pad.className = "pad";
        pad.className += " notPlaying";

        

        pad.addEventListener("click", (e) => {
            if (e.target.id == "") {
                console.log(e);
                playAudio(e.target.parentNode);

            } else {
                playAudio(e.target);
            }
        });

        boardPad.appendChild(pad);
        lettre = document.createElement("p");
        description = document.createElement("p");

        lettre.innerHTML = tabSounds[i].lettre;
        description.innerHTML = tabSounds[i].description;

        pad.appendChild(lettre);
        pad.appendChild(description);
        addSounds(pad, i);
    }

    document.addEventListener("keydown", function (event) {
        for (let j = 0; j < tabSounds.length; ++j) {
            if (event.key == tabSounds[j].lettre) {
                pad.id = "pad" + j;
                pad.childNodes[2].id = "sound"+j;
                playAudio(pad);
            };
        }
    });
}

createPads();

function addSounds(pad, i) {
    let audio = document.createElement("audio");
    let source = document.createElement("source");
    pad.appendChild(audio);
    audio.appendChild(source);
    audio.id = "sound" + i;
    source.src = "ressources/" + tabSounds[i].src;
}

function playAudio(padSound) {
    let audio = document.getElementById(padSound.childNodes[2].id);
    console.log(padSound);
    audio.play();

    let isPlaying;
    let reading = setInterval(function () {
        isPlaying = notDoneYet(audio);
        padSound.className = "pad playing";

        if (isPlaying == audio.duration) {
            padSound.className = "pad notPlaying";
            clearInterval(reading);
        }

    }, audio.duration);
}


function notDoneYet(audio) { return audio.currentTime }