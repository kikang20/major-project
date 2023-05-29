const guessLetterElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const Messages = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

let word = "magnolia";
let guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function (){
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

//console.log(placeholder);
// its for hidden dot before the player makes guesses. when the player make correct guess, the hidden dot will be replaced with the correct letter. 


guessLetterButton.addEventListener("click", function (e){
    e.preventDefault();

    const guess = letterInput.value;
    //console.log(guess);
    const goodGuess = validateInput(guess);

    if (goodGuess){
        makeGuess(guess);
    }
    letterInput.value = "";
    
    //console.log(guessLetterButton);
   
});

// // for button to click
// const validateInput = function (input){
//     const acceptedLetter = /[a-zA-Z]/;
//     if (input.length === 0){
//         console.log("please enter 1 letter");
//     } else if (input.length > 1) {
//         console.log("please enter just 1 letter.");
//     } else if (!input.match(acceptedLetter)){
//         console.log("doesn’t match the regular expression pattern")
//     } else {
//         return input;
//     }
// };
// //to accept only the letter A-Z. 1 letter at a time. 


// const makeGuess = function (guess){
//     guess = guess.toUpperCase();
//  if (guessedLetters.includes(guess)){
//     console.log("youve already guessed that letter! try again.");
//     playerGuessed();
//  } else{
//     guessedLetters.push(guess);
//     console.log(guessedLetters);
//     showGuessedLetters();
//  }
// };
// // to make players input to all uppercase. players cannot enter same letter.

// const showGuessedLetters = function (){
//     guessLetterElement.innerHTML = "";
//     for (const letter of guessedLetters){
//     const li = document.createElement("li");
//     li.innerText = letter;
//     guessLetterElement.append(li);
//     }
// };
// // to accept and store players guess.

// const updateWordInProgress = function (guessedLetters) {
//     const wordUpper = word.toUpperCase();
//     const wordArray = wordUpper.split("");
//     const revealWord= [];
//     for (const letter of wordArray) {
//         if (guessedLetters.includes(letter)) {
//           revealWord.push(letter.toUpperCase());
//         } else {
//           revealWord.push("●");
//         }
//       };
//     wordInProgress.innerText = revealWord.join("");
//     checkIfWin();
// };
// //to display correct letters on the screen.

// const updateGuessesRemaining = function (guess){
//     const wordUpper = word.toUpperCase();
//     if (!wordUpper.includes(guess)){
//         console.log("sorry, the word doesnt contain the letter");
//         remainingGuesses -= 1;
//     } else {
//         console.log("Good try.The letter is in the word");
//     };

//     if (remainingGuesses === 0 ){
//         console.log("the game is over");
//     } else if (remainingGuesses === 1){
//         console.log("you have 1 more guess remaining");
//     } else {
//         console.log(`you have ${remainingGuesses} guesses remaining`);
//     }

// };
// //to count and monitor the players guess and display the messages.

// const checkIfWin = function (){
//     if (word.toUpperCase() === wordInProgress.innerText){
//         emptyMessages.classList.add("win");
//         emptyMessages.innerHTML = `<p class="highlight"> You guessed correct the word! Congrats!</p>`;
//         startOver();
//     }
// };
// //
// const startOver = function (){
//     guessLetterButton.classList.add("hide");
//     remainingGuessesElement.classList.add("hide");
//     guessLetterElement.classList.add("hide");
//     playAgainButton.classList.remove("hide");
// };

// playAgainButton.addEventListener("click", function(){
//     emptyMessages.classList.remove("win");
//     guessedLetters = [];
//     remainingGuess = 8;

//     getWord();

// });
