function fibonacci(N){
    if(N===0){
        return 0;
    }else if(N===1){
        return 1;
    }
    else{
        return fibonacci(N-1)+ fibonacci(N-2);
    }
}

let sum=0;
let N=0;
let count=0;
while(count<=20){
    sum+= fibonacci(N);
    N++;
    count++;
}
console.log(sum);