function ktsnt(number){
    let isprime=false;
    for(let i=2; i<= number; i++){
        if(number%i===0){
            isprime= true;
            break
        }
    }
    if(isprime===true){
        console.log(number+ "la so nguyen to");
    }
    else{
        console.log(number+ "khong la so nguyen to");
    }
}

let number;
do{
    number= +prompt("nhap so nguyen duong: ");
}while(number<=1 && !Number.isInteger(number));
ktsnt(number);
