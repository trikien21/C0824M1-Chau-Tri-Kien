function findNumber(){
    let arr=[];
    let number;
    do{
        number= Number(prompt("nhập số phần tử của mảng(không quá 20): "));
    }while(number<=0 || number>20);
    arr=new Array(number);

    for(let i=0; i<number; i++){
        arr[i]= Number(prompt(`nhập phần tử ${i}: `));
    }
    let multiplesof3And5= [];
    let sum=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] %3===0 && arr[i] %5===0){
            multiplesof3And5.push(arr[i]);
            sum+=arr[i];
        }
    }
    console.log("Các số bội chung của 3 và 5: ", multiplesof3And5);
    console.log("Tổng của các số là: ", sum);
}


findNumber()