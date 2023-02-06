//STEP 1
function halfOf(num) {
    var half = num / 2;
    console.log('Half of ' + num + ' is ' +  half);
    return half;
}

halfOf(5);

//STEP 2
function squareNumber(num) {
    var squaredNumber = num * num;
    console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
    return squaredNumber;
}
squareNumber(3);

//STEP 3
function percentOf(num1, num2) {
    var percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;
}

percentOf(2, 4);

//STEP 4
function findModulus(num1, num2) { 
    var divisor;
  	for (let i = 1; i <= num1 && i <= num2; i++) {
        if( num1 % i == 0 && num2 % i == 0) {
      		divisor = i;
    	}
  	}
    console.log(divisor+' is the modulus of '+num1+' and '+num2);
  	return divisor;
}

findModulus(4, 10);

