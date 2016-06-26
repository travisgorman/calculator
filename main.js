// define variables
// map variables onto all input buttons
var display = document.querySelector('#display');
var zero = document.querySelector('#b0');
var one = document.querySelector('#b1');
var two = document.querySelector('#b2');
var three = document.querySelector('#b3');
var four = document.querySelector('#b4');
var five = document.querySelector('#b5');
var six = document.querySelector('#b6');
var seven = document.querySelector('#b7');
var eight = document.querySelector('#b8');
var nine = document.querySelector('#b9');
var add = document.querySelector('#add');
var subtract = document.querySelector('#subtract');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');
var clear = document.querySelector('#clear');
var calc = document.querySelector('#calc');

// add event listeners
// show a pre-defined value on the display value upon click
one.addEventListener('click', function(){
  display.value += 1;
});

two.addEventListener('click', function(){
  display.value += 2;
});

three.addEventListener('click', function(){
  display.value += 3;
});

four.addEventListener('click', function(){
  display.value += 4;
});

five.addEventListener('click', function(){
  display.value += 5;
});

six.addEventListener('click', function(){
  display.value += 6;
});

seven.addEventListener('click', function(){
  display.value += 7;
});

eight.addEventListener('click', function(){
  display.value += 8;
});

nine.addEventListener('click', function(){
  display.value += 9;
});

zero.addEventListener('click', function(){
  display.value += 0;
});


add.addEventListener('click', function(){
  display.value +='+';
});

subtract.addEventListener('click', function(){
  display.value +='-';
});

multiply.addEventListener('click', function(){
  display.value +='x';
});

divide.addEventListener('click', function(){
  display.value +='/';
});

clear.addEventListener('click', function(){
  display.value +='';
});

// calc.addEventListener('click', function(){
//   display.value +='='
// });
