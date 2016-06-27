var numberButtons = document.querySelectorAll('.numbers button');
var operatorButtons = document.querySelectorAll('.operators button');
var answerArea = document.getElementById('answer');
var clearButton = document.querySelector('.clear');
var equalsButton = document.querySelector('.equals');
var firstNumber;
var operator;

// var clk = document.querySelectorAll('numbers').addEventListener('click', function(e){
//   console.log(e.target.innerHTML);
//   console.log(answerArea.innerHTML);
// } )
// numberButtons.addEventListener('click', function(){
//   console.log(newNumberVal);
//   console.log(oldNumberVal);
//   console.dir(answerArea.innerHTML)
// })


document.querySelector('.numbers').addEventListener('click', function(e){
  console.log(answerArea.innerHTML);
  console.log(e.target.innerHTML);
  console.log(e);
})


for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function(e) {
    // debugger;
    var newNumberVal = e.target.innerHTML;
    var oldNumberVal = document.getElementById('answer').innerHTML;
    if (answerArea.innerHTML.length < 7) {
      document.getElementById('answer').innerHTML = oldNumberVal+newNumberVal;
    } else {
      alert('Sorry, that number is too big. We can\'t math that hard');
    }
  });
}
//
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function(e) {
    // debugger;
    firstNumber = answerArea.innerHTML;
    operator = e.target.innerHTML;
    answerArea.innerHTML = '';
  });
}

clearButton.addEventListener('click', function() {
  answerArea.innerHTML = '';
});

equalsButton.addEventListener('click', function() {
  var answer;
  if (operator === '+') {
    answer = Number(firstNumber) + Number(answerArea.innerHTML);
  } else if (operator === '-') {
    answer = Number(firstNumber) - Number(answerArea.innerHTML);
  } else if (operator === 'x') {
    answer = Number(firstNumber) * Number(answerArea.innerHTML);
  } else {
    answer = Number(firstNumber) / Number(answerArea.innerHTML);
  }
  if (answer > 9999999) {
    answerArea.innerHTML = 'too big';
  } else {
    answerArea.innerHTML = String(answer).slice(0, 7);
  }
});
