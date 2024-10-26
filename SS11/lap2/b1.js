
function fibonacci(n){
    if(n===0){
        return 0;
    }
    else if(n===1){
        return 1;
    }else{
        return fibonacci(n-1)+fibonacci(n-2);
    }

}
let number= Number(prompt("nhap so luong: "));
for(let i=0; i<number; i++){
    document.write(fibonacci(i)+"<br>");
}