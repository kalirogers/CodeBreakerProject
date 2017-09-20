let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here


}

function setHiddenFields() {
  var randomNum = Math.floor(Math.random() * 1000);
  console.log(randomNum);
  var randomNumString = randomNum.toString();
  console.log(typeof(randomNumString));
  while(randomNumString.length < 4) {
      randomNumString = "0" + randomNumString;
      console.log(randomNumString);
      }
  answer.value = randomNumString;
  attempt.value = 0;
  console.log(attempt);
  console.log(answer);
}

setHiddenFields();
