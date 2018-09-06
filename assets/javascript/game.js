

var dale = false
var Letters = false
var wins = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var lettersTressed = lettersGuessed.length;
var lettersGuessed2 = [];
var answerDisplay = [];
var words = ["kramer", "hilary", "eddie", "roger", "screech"];
var word
function game() {var word = words[Math.floor(Math.random() * words.length)];

        var answerArray = [];
        
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        var remainingLetters = word.length;



 {
    document.onkeyup = function (event) {

        
        if ((event.key >= "a") && (event.key <= "z")) {
            var guess = event.key;
        }
        else { event.key = "" };

        if
        ((lettersGuessed.length <= 13) &&
            (guess !== lettersGuessed[" "])) {
            lettersGuessed.push(guess)
        }
        else {
            lettersGuessed2.push(guess)
        };


        for (var j = 0; j < word.length; j++) {
            if
            (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;




            }
            
            console.log(answerArray)
            console.log(word)
        }
        if ((remainingLetters == 0) && (word === "eddie")) {
            alert("You guesed it! It's Eddie Fraiser's dad's dog, wanna play again?")
            wins++;
            game();
            lettersGuessed =[];
            lettersGuesed =[];

        }
        else if ((remainingLetters == 0) && (word === "kramer")) {
            alert("You guessed it! It's Kramer the neighbor on Seinfeld, wanna play again?");
            dale;
            wins++;
            game();
            lettersGuessed = [];
            lettersGuessed2 = [];
        }

        else if ((remainingLetters == 0) && (word === "screech")) {
            alert("You guessed it! It's screech from saved by the bell, wanna play again?");
            dale;
            wins++;
            game();
            lettersGuessed =[];
            lettersGuessed2=[];
        }
        else if ((remainingLetters == 0) && (word === "hilary")) {
            alert("You guessed it! It's Hilary, Will's cousin in Fresh Prince of Bel Air, wanna play again?");
            dale;
            wins++;
            game();
            lettersGuessed2 = [];
        }

        else if ((remainingLetters == 0) && (word === "roger")) {
            alert("You guessed it! It's Roger the annoying neighbor in Sister Sister, wanna play again?");
            dale;
            wins++;
            game();
            lettersGuessed2 = [];
        };
        
                document.querySelector("#guesses").innerHTML = guessesLeft;
                document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
                document.querySelector("#lettersGuessed2").innerHTML = lettersGuessed2;
                document.querySelector("#theWord").innerHTML = answerArray;
                document.querySelector("#wins").innerHTML = wins;

            }

        }} 









game();


if (dale === true) {
    game();
}

