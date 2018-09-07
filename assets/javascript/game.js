var seinfeld = ["k", "r", "a", "m", "e", "r"];
var fresh = ["h", "i", "l", "a", "r", "y"];
var fraiser = ["e", "d", "d", "i","e"];
var sister = ["r", "o", "g", "e", "r"];
var saved = ["s", "c", "r", "e", "e", "c", "h"];
var simpsons = ["m", "i", "l", "l", "h", "o", "u", "s", "e"]

var dale = false
var Letters = false
var wins = 0;
var guessesLeft = 6;
var lettersGuessed = [];
var lettersTressed = lettersGuessed.length;
var lettersGuessed2 = [];
var answerDisplay = [];
var words = [seinfeld, fresh, fraiser, sister, saved, simpsons];
var word
function game() {
    var word = words[Math.floor(Math.random() * words.length)];

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
                    Letters = true;




                }
                else if ((guess != answerArray[0]) && (guess != answerArray[1]) && (guess != answerArray[2]) && (guess != answerArray[3])
                        && (guess != answerArray[4]) && (guess != answerArray[5]) && (guess != answerArray[6]) && (guess != answerArray[7]) && (guess != answerArray[8]))
                        {
                            Letters= false;
                        }
                
            
          
            }
            if ((remainingLetters === 0) && (word === fraiser)) {
                alert("You guesed it! It's Eddie Fraiser's dad's dog, wanna play again?")
                game();
                wins++;
                lettersGuessed = [];
                lettersGuesed2 = [];
                guessesLeft = 6;

            }
            else if ((remainingLetters === 0) && (word === seinfeld)) {
                alert("You guessed it! It's Kramer the neighbor on Seinfeld, wanna play again?");
                wins++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;
            }

            else if ((remainingLetters === 0) && (word === saved)) {
                alert("You guessed it! It's screech from saved by the bell, wanna play again?");
                wins++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;

            }
            else if ((remainingLetters === 0) && (word === fresh)) {
                alert("You guessed it! It's Hilary, Will's cousin in Fresh Prince of Bel Air, wanna play again?");
                wins++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;
            }

            else if ((remainingLetters === 0) && (word === sister)) {
                alert("You guessed it! It's Roger the annoying neighbor in Sister Sister, wanna play again?");
                wins++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;

            }
            else if ((remainingLetters ===0) && (word === simpsons)) {
                alert("You guessed it! It's Millhouse, the kid who can't catch a break from the simpsons, wanna playagain?");
                wins ++;
                game();
                lettersGuessed = [];
                lettersGuessed2 = [];
                guessesLeft = 6;
            }

            if (guessesLeft <= 0) {
                alert("Ha Ha You're Dead, try again");
                game();
                guessesLeft = 6;
                lettersGuessed = [];
                lettersGuessed2 = [];
                
            };
            if (Letters === false) {
                guessesLeft --;
            };
        
            document.querySelector("#guesses").innerHTML = guessesLeft;
            document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
            document.querySelector("#lettersGuessed2").innerHTML = lettersGuessed2;
            document.querySelector("#theWord").innerHTML = answerArray.join(",");
            document.querySelector("#wins").innerHTML = wins;

        }

    }
}




game();




