const guessLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessTextInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const spanRemainingGuess = document.querySelector(".remaining span");
const Emptymessages = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";

const empty = function (word){
    const emptyletter = [];
    for (const letter of word){
        console.log(letter);
        emptyletter.push("●");
    }
    wordInProgress.innerText = emptyletter.join("");
};

empty(word);

guessButton.addEventListener("click", function (e){
    e.preventDefault();
    const capture = guessTextInput.value;
    console.log(capture);
    guessTextInput.value = "";
}