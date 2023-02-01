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

    createElement(game){
        
        let clue = document.createElement("p");
        let findWord = document.createElement("p");
        let lifes = document.createElement("p");
        let form = document.createElement("form");
        form.id = "inputForm";
        let enterLetter = document.createElement("input");
        this.renderComponent(game,clue,findWord,lifes,form,enterLetter);
    }

    renderComponent(game,clue,findWord,lifes,form,enterLetter){
        clue.innerHTML = "Clue : " + this.word.word.clue;
        for(let i = 0; i < this.word.sendTheLengthOfTheWorld(); ++i ){
            findWord.innerHTML += "_ ";
        }
        if(this.word.sendTheLengthOfTheWorld() < 7){
            this.chance = this.word.sendTheLengthOfTheWorld();
            lifes.innerHTML = "Remaining lives : " + this.word.sendTheLengthOfTheWorld();
        } else {
            lifes.innerHTML = "Remaining lives : " + this.chance;
        }
        enterLetter.placeholder = "Enter a letter";
        enterLetter.id = "try";
        this.appenChild(game,clue,findWord,lifes,form,enterLetter);
    }

    appenChild(game,clue,findWord,lifes,form,enterLetter){
        game.appendChild(clue);
        game.appendChild(findWord);
        game.appendChild(lifes);
        game.appendChild(form);
        inputForm.appendChild(enterLetter);
    }


}