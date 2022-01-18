const numberGuessingGame = document.querySelector("#numberGuessingGame");
const maxNumber = document.querySelector("#maxNumber");
const answerNumber = document.querySelector("#answerNumber");
const gameGuide = document.querySelector("#gameGuide");
const gameResult = document.querySelector("#gameResult");

function startGame(event) {
  event.preventDefault();
  const maxNumberChosenByUser = parseInt(maxNumber.value);
  const answerNumberChosenByUser = parseInt(answerNumber.value);
  const randomNumber = Math.floor(Math.random() * maxNumberChosenByUser);

  console.log(maxNumberChosenByUser);
  console.log(answerNumberChosenByUser);
  console.log(randomNumber);

  if (isNaN(maxNumberChosenByUser) || isNaN(answerNumberChosenByUser)) {
    gameGuide.innerText = "You have to enter correct number!";
  } else {
    gameGuide.innerText = `You chose: ${answerNumberChosenByUser}, the machine chose: ${randomNumber}`;
    if (randomNumber === answerNumberChosenByUser) {
      gameResult.innerText = "You win!";
    } else {
      gameResult.innerText = "You lost!";
    }
  }
}

numberGuessingGame.addEventListener("submit", startGame);
