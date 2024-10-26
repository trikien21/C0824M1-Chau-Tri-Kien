function factorial(n){
    let f=1;
    for(let i=1; i<=n; i++){
        f*= i;
    }
    return f;
}

let number= Number(prompt("nhap so nguyen duong: "));
document.write(factorial(number));