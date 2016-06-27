
var output = document.querySelector('output');



var number1 = document.querySelector('#b1');
number1.addEventListener('click',function(){

output.value += 1;

});

var number2 = document.querySelector('#b2');
number2.addEventListener('click',function(){
// var output = document.querySelector('#output');
output.value +=2;
});


var number3 = document.querySelector('#b3');
number3.addEventListener('click',function(){
// var output = document.querySelector('#output');
output.value+=3;
});

var plus = document.querySelector('#plus');
plus.addEventListener('click',function(){
// var output = document.querySelector('#output');
output.value+= "+";
});

var number4 = document.querySelector('#b4');
number4.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+=4;
});



var number5 = document.querySelector('#b5');
number5.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+=5;
});


var number6 = document.querySelector('#b6');
number6.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+=6;
});


var subtract = document.querySelector('#subtract');
subtract.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+= "-";
});

var number7 = document.querySelector('#b7');
number7.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+=7;
});


var number8 = document.querySelector('#b8');
number8.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+=8;
});

var number9 = document.querySelector('#b9');
number9.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+=9;
});


var number0= document.querySelector('#b0');
number0.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+=0;
console.log(output.value, typeof(output.value));
});


var multiply = document.querySelector('#multiply');
multiply.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+= "*";
});

var divide = document.querySelector('#divide');
divide.addEventListener('click',function() {
// var output = document.querySelector('#output');
output.value+= "/";
});

var clear = document.querySelector('#clear');
clear.addEventListener('click',function() {
output.value = '';
//total = '';
//output.textContent = '';
});





var calculate = document.querySelector('#calculate');
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
