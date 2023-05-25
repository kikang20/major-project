const guessLetter = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessTextInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const spanRemainingGuess = document.querySelector(".remaining span");
const emptyMessages = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

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
    
});

const playersInput = function (input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input === ""){
        console.log("please enter 1 letter");
    } else if (!input.match(acceptedLetter)){
        console.log("doesn’t match the regular expression pattern")
    } else {
        return input;
    }
};

const makeGuess = function (letter){
    guess = guess.toUpperCase();
 if (guessedLetters.includes(guess)){
    console.log("youve already guessed that letter! try again.");
    playerGuesse();
 }
};
console.log(guessedLetters);

const playerGuesses = function (){
    guessLetter.innerHTML = "";
    const li = document.createElement = "li";
    li.innerText = letter;

};

const updateTheWord = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord= [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
          revealWord.push(letter.toUpperCase());
        } else {
          revealWord.push("●");
        }
      };
    console.log(wordArray);
};

const toCheck = function (){
    if (word.toUpperCase === wordInProgress){
        console.log("Win!");
        emptyMessages.classList.add("win");
        emptyMessages.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};