
function fibonacci(num){
    if(num===0){
        return 0;
    }else if(num===1){
        return 1;
    }else
        return fibonacci(num-1)+ fibonacci(num-2);
}

let num=0;
let count=0;
while(count<20){
    for(let i=0; i<num; i++){
        let F= fibonacci(num);
        count++;
        document.write(F+ "</br>");
        break;
    }
    num++;
}



