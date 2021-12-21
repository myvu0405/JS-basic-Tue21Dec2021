// 1. Addition
// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
let sum=0;
for (let i=200;i<=2700; i++) {
    if (i%3==0 && i%5!=0) {
        sum+=i;
    }
    else if (i%3!=0 && i%5==0) {
        sum+=i;
    }
}
console.log(sum);

// 2. Shift the Values

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. 
// When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].
let anArr=[2,1,6,4,-7];
let outputArr=[];
for(let i=anArr.length-1; i>=0;i--){
    outputArr.push(anArr[i])
}

console.log(`original array is ${anArr} and the output array is ${outputArr}`);

// 3. FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array, 
// while replacing the values that are divisible by 3 with the word "Fizz", 
// the numbers that are divisible by 5 with the word "Buzz", 
// and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". 
// Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]
let fizzBuzz=[];
//let idx=0;
for (let i=1;i<=135;i++){
    if (i%3==0 && i%5==0) {
        fizzBuzz.push('FizzBuzz');
    }
    else if (i%3==0 && i%5!=0) {
        fizzBuzz.push('Fizz');
    }
    else if (i%3!=0 && i%5==0){
        fizzBuzz.push('Buzz');
    }
    else{
        fizzBuzz.push(i);
    }

}
console.log(fizzBuzz);

// 4. Fibonacci
// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
let fibo=[0,1];
let no1=0;
let no2=0;
let len=fibo.length;
no1=fibo[len-1];
no2=fibo[len-2];
while(no1+no2<1000000) {
    fibo.push(no1+no2);
    len=fibo.length;
    no1=fibo[len-1];
    no2=fibo[len-2];

}
console.log(fibo);

// 5. Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
let mixArr=[1,-2,4,1,-30,20,-100];
for(let i=0;i<mixArr.length;i++){
    if(mixArr[i] <0) {
        mixArr.splice(i,1);
    }
}
console.log(`Array after removed negative values: ${mixArr}`);

//6. Communist Censorship

function replaceString(aString){
    let result='';
    for (let i=0;i<aString.length;i++){
        result+='*';
    }
    
    return result;
}

let X = ['Man', 'I','Love','The','Matrix','Program'];
let idx=X.indexOf('Program');
console.log(idx);
X[idx]=replaceString(X[idx]);
console.log(X);