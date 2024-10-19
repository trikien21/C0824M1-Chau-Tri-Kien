function factorial(num){
    let Factorial= 1;
    for(let i=1; i<=num; i++){
        Factorial= Factorial*i;
    }
    return Factorial;
}

function sum1(num){
    let sum=0;
    for(let i=1; i<=num; i++){
        sum += 1/i;
    }
    return sum;
}

function sum2(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            sum = sum + 1 / factorial(i);
        } else {
            sum = sum - 1 / factorial(i);
        }
    }
    return sum;
}

function sum3(num){
    let sum=1;
    for(let i=2; i<=num; i++){
        sum= sum + 1/factorial(2*i-1);
    }
    return sum;
}

// let number=Number(prompt("nhap so: "));
let number=8;
    result1= sum1(number);
    result2= sum2(number);
    result3= sum3(number);

console.log("sum of number 1: "+result1);
console.log("sum of number 2: "+result2);
console.log("sum of number 3: "+result3);
