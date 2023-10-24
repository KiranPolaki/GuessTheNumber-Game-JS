//random number generated to keep at .number class in place of innerHtml
//But only when the user gesses the correct answer
/*let rand = Math.floor(Math.random() * 20) + 1;
console.log(rand);
document.querySelector(".guess").value = 30;
console.log(document.querySelector(".guess").value);*/

//random number generate chestam  by iusing Math.random and ade 20 numbers lopala unchuta
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

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
    }
  }
  //if guess greater than secret number
  else if (guess > secretNumber) {
    if (score > 1) {
      //svcreen meda message change chesa too high ane
      message.textContent = "📈 Tooo High!";
      score--;
      //score ne update chstam html lo
      document.querySelector(".score").textContent = score;
      //wrong answer ke call chese red light ostade 100milliseconds
      wrongAnswer();
    }
    //if score zero ke velepotey
    else {
      //message marustam you lost the game ane
      message.textContent = "🤷‍♂️ You lost the game!";
      //score html lo select chese dane zero chestam
      document.querySelector(".score").textContent = "0";
    }
  }
  //if guess is less than secrenumber
  else if (guess < secretNumber) {
    if (score > 1) {
      //message change chestam too low ane
      message.textContent = "📉 Tooo Low!";
      score--;
      //replace score
      document.querySelector(".score").textContent = score;
      //wrong answer ke call chestey red light display avtade
      wrongAnswer();
    } else {
      message.textContent = "🤷‍♂️ You lost the game!";
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //secret number lo malli random number generate chestam
  secretNumber = Math.floor(Math.random() * 20) + 1;
  let number = document.querySelector(".number");
  //input field ne null chesam antey value remove chesam
  document.querySelector(".guess").value = null;
  //aa box ke malli question mark petam correct answer undede
  number.textContent = "?";
  //width tagginchale
  number.style.width = "15rem";
  //score ne normal cheskovale
  document.querySelector(".score").textContent = "20";
  //background color change cheyale
  document.querySelector("body").style.backgroundColor = "#222";
  // akada text marustam malli guess cheyandi ane
  document.querySelector(".message").textContent = "start guessing...";
});
