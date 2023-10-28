//random number generated to keep at .number class in place of innerHtml
//But only when the user gesses the correct answer
/*let rand = Math.floor(Math.random() * 20) + 1;
console.log(rand);
document.querySelector(".guess").value = 30;
console.log(document.querySelector(".guess").value);*/

//random number generate chestam  by iusing Math.random and ade 20 numbers lopala unchuta
const range = document.getElementById("inputRange");
let secretNumber = Math.floor(Math.random() * range.valueAsNumber) + 1;
let score = 20;
let highScore = 0;

//okavela game already adivunte highScore ni update chestam
if (sessionStorage.getItem("highScore") != null) {
  highScore = sessionStorage.getItem("highScore");
  document.querySelector(".highscore").textContent = highScore;
}
else {
  //lekapothe highScore ni initialize chestam
  sessionStorage.setItem("highScore", 0);
}


function wrongAnswer() {
  let active = document.querySelector("body");
  active.classList.add("wrong-answer"),
    setTimeout(function () {
      active.classList.remove("wrong-answer");
    }, 100);
}

document.querySelector(".check").addEventListener("click", function () {
  // button click chesina ventaney input field lo value baytake teskovale.
  const guess = Number(document.querySelector(".guess").value);
  // em em aytey change chestamo vatne store cheskuntamu
  let message = document.querySelector(".message");
  message.classList.remove("new-range");

  // Added Sound Effect to button click
  let audio = new Audio("sounds/button-click.mp3");
  audio.play();

  if (score == 1) {
    document.querySelector("body").style.backgroundColor = "darkred";
  }

  //no number entered
  if (!guess) {
    message.textContent = "😒 Come on enter a number will ya!";
  }
  //guess is equal to secret number
  else if (guess == secretNumber) {
    //textcontent use chestey text marchanchu adayna html element de
    message.textContent = "🙌 Correct Answer!";
    //question mark place lo mana secret number ne display chestam
    document.querySelector(".number").textContent = secretNumber;
    //Correct ayinde kabbati aaa secret number size pencham
    document.querySelector(".number").style.width = "30rem";
    // motam body ke select chese background color change chesa
    document.querySelector("body").style.backgroundColor = "#60b347";
    //Check chestam score > highscore aa kada
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      //save chesina highScore ni kuda update chestam
      sessionStorage.setItem("highScore", highScore);
    }

  }
  //if guess greater than secret number
  else if (guess > secretNumber) {
    // Checking if the difference between the guess and the secret number is 1 or 2
    if (guess - secretNumber <= 2 && guess - secretNumber > 0) {
      message.textContent = "😬 It's close!";
    } else if (score > 1) {
      message.textContent = "📈 Tooo High!";
      score--;
      document.querySelector(".score").textContent = score;
      wrongAnswer();
    } else {
      message.textContent = "🤷‍♂️ You lost the game!";
      document.querySelector(".score").textContent = "0";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
  else if (guess < secretNumber) {
    // Checking if the difference between the secret number and the guess is 1 or 2
    if (secretNumber - guess <= 2 && secretNumber - guess > 0) {
      message.textContent = "😬 It's close!";
    } else if (score > 1) {
      message.textContent = "📉 Tooo Low!";
      score--;
      document.querySelector(".score").textContent = score;
      wrongAnswer();
    } else {
      message.textContent = "🤷‍♂️ You lost the game!";
      document.querySelector(".score").textContent = "0";
    }
  }
});


document.querySelector(".again").addEventListener("click", function () {
  // Reload the page
  location.reload();
});


document.querySelector(".again").addEventListener("click", function () {
  let number = document.querySelector(".number");
  score = 20;
  document.querySelector(".guess").value = null;
  number.textContent = "?"; 
  number.style.width = "30rem";
  
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".check").addEventListener("click", checkGuess); // Add event listener back
});

//Added functionality to enable user to use enter key to guess the number
const input = document.getElementById("inputGuess");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("check").click();
  }
})

range.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    
    const newrange = event.target.value;

    let message = document.querySelector(".message");

    let audio = new Audio("sounds/button-click.mp3");
    audio.play();

    if(newrange < 20) {
      message.classList.remove("new-range");
      message.textContent = "Enter range more then 20 !";
    } 
    else {
      document.getElementById("inputRange").value = newrange;
      secretNumber = Math.floor(Math.random() * newrange) + 1;

      message.textContent = "Yo.. uh set a new range 🚀";

      message.classList.add("new-range");
    }
  }
})

