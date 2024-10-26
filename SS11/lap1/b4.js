function fibonacci(N){
    if(N===0 || N===1){
        return 1;
    }
    else{
        return fibonacci(N-1)+ fibonacci(N-2);
    }
}

let N=0;
let count=0;
let chia5="";
while(count<20){
    if(fibonacci(N)%5===0){
        console.log(fibonacci(N));
        break;
    }
    count++;
    N++;
}

