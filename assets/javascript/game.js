var fraiser = ["e", "d", "d", "i", "e"]
var prince = ["h", "i", "l", "a", "r", "y"]
var seinfeld = ["k", "r", "a", "m", "e", "r"]
var sisterSister = ["r", "o", "g", "e", "r"]
var savedBell = ["s", "c", "r", "e", "e", "c", "h"]

var guessesLeft = 10;
var lettersGuessed = [];
var lettersTressed = lettersGuessed.length;
var lettersGuessed2 = [];
var answerDisplay = [];
var words =[ "kramer", "hilary", "eddie", "roger", "screech"];
var word = words[Math.floor(Math.random()*words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;


document.onkeyup = function(event) {
    if (event.key >= "a" && (event.key <= "z")){
        var guess = event.key;}
        else {event.key = ""};
    if ((lettersGuessed.length <= 13) && (guess !== lettersGuessed[" "]))
    {
    lettersGuessed.push(guess)}
    else {lettersGuessed2.push(guess)};
    for (var j =0; j< word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters-- ;
       
    }
    
    };
    if (guess != j) {
        guessesLeft --;
    };
    document.querySelector("#guesses").innerHTML = guessesLeft;
    document.querySelector("#lettersGuessed").innerHTML= lettersGuessed;
    document.querySelector("#lettersGuessed2").innerHTML = lettersGuessed2;
    document.querySelector("#theWord").innerHTML = answerArray;
}