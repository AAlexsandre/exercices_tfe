function createPads() {
    let boardPad = document.getElementById("drumHolder");
    let pad;
    let lettre;
    let description;

    for (let i = 0; i < tabSounds.length; ++i) {
        pad = document.createElement("div");
        pad.id = "pad" + i;
        pad.className = "pad";

        pad.addEventListener("click", (e) => {
            if (e.originalTarget.id == "") {
                playAudio(e.target.parentNode);

            } else {
                playAudio(e.originalTarget);
            }
        });

        // document.addEventListener('keydown', (e) => {
        //     if (e.key === "a") {
        //         playAudio(e.originalTarget);
        //     } else if (e.key === "b") {
        //         playAudio(e.originalTarget);
        //     }
        // });

        boardPad.appendChild(pad);
        lettre = document.createElement("p");
        description = document.createElement("p");

        lettre.innerHTML = tabSounds[i].lettre;
        description.innerHTML = tabSounds[i].description;

        pad.appendChild(lettre);
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
    audio.id = "sound" + i;
    source.src = "ressources/" + tabSounds[i].src;
}

function playAudio(padSound) {
    document.getElementById(padSound.childNodes[2].id).play();
    padSound.style.backgroundColor = "black";
}