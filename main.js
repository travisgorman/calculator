// define variables
// map variables onto all input buttons
var output = document.querySelector('#output');
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

//add event listeners
// add a pre-defined value onto the output value upon click

one.addEventListener('click', function(){
  output.value += 1;
  console.dir( one );

});

two.addEventListener('click', function(){
  output.value += 2;
  console.dir( two );

});

three.addEventListener('click', function(){
  output.value += 3;
  console.dir( three );

});

four.addEventListener('click', function(){
  output.value += 4;
  console.dir( four );

});

five.addEventListener('click', function(){
  output.value += 5;
  console.dir( five );

});

six.addEventListener('click', function(){
  output.value += 6;
  console.dir( six );

});

seven.addEventListener('click', function(){
  output.value += 7;
  console.dir( seven.value );

});

eight.addEventListener('click', function(){
  output.value += 8;
  console.dir( eight.attributes );

});

nine.addEventListener('click', function(){
  output.value += 9;
  console.dir( nine );

});

zero.addEventListener('click', function(){
  output.value += 0;
  console.dir( zero );
});

add.addEventListener('click', function(){
  output.value +='+';
});

subtract.addEventListener('click', function(){
  output.value +='-';
});

multiply.addEventListener('click', function(){
  output.value +='x';
});

divide.addEventListener('click', function(){
  output.value +='/';
});

clear.addEventListener('click', function(){
  output.value +='';
});

// on click, the `calc` key does math accordingly
// and writes the calculation to the output


var calculate = document.querySelector('#calc');

calculate.addEventListener('click',function(){

  var operation = output.innerText;
  var num1 = operation[0];
  var num2 = operation[2];
  var operator = operation[1];
  var total = '';

  if (operator === '+'){
    total = Number(num1) + Number(num2);
    output.innerText = total;
  }
  else if (operator === '-'){
    total = Number(num1) - Number(num2);
    output.value = total;
    output.innerText = total;
 }
  else if (operator === '*'){
    total = Number(num1) * Number(num2);
    output.value = total;
    output.innerText = total;
  }
  else if (operator === '/'){
    total = Number(num1) / Number(num2);
    output.value = total;
    output.innerText = total;
  }
});
// calc.addEventListener('click', function(){
//
//   var
//
//
// });
// calc.addEventListener('click', function(){
//   output.value +='='
// });

//
