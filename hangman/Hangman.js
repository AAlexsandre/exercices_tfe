import Database from './Database.js';
import Word from './Word.js';

export default class Hangman {
    constructor() {
        this.words = new Database();
        this.word = new Word(this.words.random());
        this.chance = 7;
    }

    render(container_id) {
        let game = document.getElementById(container_id);
        this.createElement(game);
    }

    start(container_id) {
        this.render(container_id);
    }

    createElement(game) {

        let clue = document.createElement("p");
        let findWord = document.createElement("p");
        let placeLetter;
        for (let i = 0; i < this.word.word.word.length; ++i) {
            placeLetter = document.createElement("span");
            placeLetter.id = i;
            placeLetter.value = this.word.word.word.charAt(i);
            placeLetter.innerHTML = "_ ";
            findWord.appendChild(placeLetter);
        }
        let lifes = document.createElement("p");
        let form = document.createElement("form");
        form.id = "inputForm";
        let enterLetter = document.createElement("input");
        this.renderComponent(game, clue, findWord, lifes, form, enterLetter);
    }

    renderComponent(game, clue, findWord, lifes, form, enterLetter) {
        clue.innerHTML = "Clue : " + this.word.word.clue;
        if (this.word.sendTheLengthOfTheWorld() < 7) {
            this.chance = this.word.sendTheLengthOfTheWorld();
            lifes.innerHTML = "Remaining lives : " + this.word.sendTheLengthOfTheWorld();
        } else {
            lifes.innerHTML = "Remaining lives : " + this.chance;
        }
        enterLetter.placeholder = "Enter a letter";
        enterLetter.id = "try";
        this.appenChild(game, clue, findWord, lifes, form, enterLetter);
    }

    appenChild(game, clue, findWord, lifes, form, enterLetter) {
        let found =false;
        // let finish = false;
        let sizeImage = ["-75px","-150px", "-225px", "-300px", "-375px"];
        let index = 0;
        game.appendChild(clue);
        game.appendChild(findWord);
        game.appendChild(lifes);
        game.appendChild(form);
        inputForm.appendChild(enterLetter);
        enterLetter.setAttribute("maxLength", 1);

        enterLetter.addEventListener("keypress", (event) => {
            if (event.key === "Enter" && this.chance != 0) {
                event.preventDefault();
                for (let i = 0; i < this.word.sendTheLengthOfTheWorld(); ++i) {
                    if (enterLetter.value == this.word.word.word.charAt(i)) {
                        found = true;
                        game.children[2].children[i].innerHTML = enterLetter.value;
                    }

                    // if(game.children[2].children[i].innerHTML == "_ "){
                    //     finish = false;
                    // }
                }

                if (found == false) {
                    this.chance--;
                    lifes.innerHTML = "Remaining lives : " + this.chance;
                    document.getElementById("image").style.backgroundPosition = sizeImage[index], "0px";
                    index++;
                    if(this.chance == 1) {
                        document.getElementById("image").style.backgroundPosition = "-450px", "0px";
                    }
                }
                enterLetter.value = "";
                found = false;
            }

        });
    }
}