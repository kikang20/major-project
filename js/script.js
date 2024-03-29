const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
let guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
  const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
  const words = await response.text();
  const wordArray = words.split("\n");
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  word = wordArray[randomIndex].trim();
  placeholder(word);
};

getWord();

const placeholder = function (word){
    const placeholderLetters= [];
    for (const letter of word){
        //console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();

    const guess = letterInput.value;
    //console.log(guess);
    const goodGuess = validateInput(guess);

    if (goodGuess){
        makeGuess(guess);
    }
    letterInput.value = "";
    
});

 
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0){
        message.innerText = `please enter 1 letter`;
    } else if (input.length > 1) {
        message.innerText = `please enter just 1 letter.`;
    } else if (!input.match(acceptedLetter)){
        message.innerText = `You can only type a letter. No number or special character`;
    } else {
        return input;
    }
};



const makeGuess = function (guess){
    guess = guess.toUpperCase();
 if (guessedLetters.includes(guess)){
    message.innerText = `you've already guessed that letter! Try again.`;
   
 } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showGuessedLetters();
    updateGuessesRemaining(guess);
    updateWordInProgress(guessedLetters);
 }
};

const showGuessedLetters = function (){
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters){
    const li = document.createElement("li");
    li.innerText = letter;
    guessedLettersElement.append(li);
    }
};


const updateWordInProgress = function (guessedLetters) {
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
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};


const updateGuessesRemaining = function (guess){
    const wordUpper = word.toUpperCase();
    if (!wordUpper.includes(guess)){
        message.innerText = "sorry, the word does not contain the letter";
        remainingGuesses -= 1;
    } else {
        message.innerText= "Good try.The letter is in the word";
    };

    if (remainingGuesses === 0 ){
        message.innerText =`The game is over. The word was ${word.toUpperCase()}.`;
        startOver();
    } else if (remainingGuesses === 1){
        remainingGuessesSpan.innerText = "you have 1 more guess remaining";
    } else {
        remainingGuessesSpan.innerText = `you have ${remainingGuesses} guesses remaining`;
    }

};


const checkIfWin = function (){
    if (word.toUpperCase() === wordInProgress.innerText){
        message.classList.add("win");
        message.innerHTML = `<p class="highlight"> You guessed correct the word! Congrats!</p>`;
        startOver();
    }
};

const startOver = function (){
    guessLetterButton.classList.add("hide");
    remainingGuessesElement.classList.add("hide");
    guessedLettersElement.classList.add("hide");
    playAgainButton.classList.remove("hide");
};

playAgainButton.addEventListener("click", function(){
    message.classList.remove("win");
    guessedLetters = [];
    remainingGuesses = 8;
    remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    guessedLettersElement.innerHTML = "";
    message.innerText = "";

    getWord();

    guessLetterButton.classList.remove("hide");
    playAgainButton.classList.add("hide");
    remainingGuessesElement.classList.remove("hide");
    guessedLettersElement.classList.remove("hide");
  });


