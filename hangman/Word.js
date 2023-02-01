export default class Word{

    constructor(word){
        this.word = word;

    }

    positionsFor(letter){
        for(let i = 0; i < this.word.word.length; ++i){
            if(letter == this.word.word.charAt(i)){
                return i;
            }
        }
        return null;
    }

    sendTheLengthOfTheWorld(){
        return this.word.word.length;
    }
}