function countnumber() {
    let arr = [];
    let count=0;
    let number;
    do {
        number = Number(prompt("nhập số phần tử của mảng(không quá 50): "));
    } while (number <= 0 || number > 50 );
    arr = new Array(number);

    for (let i = 0; i < number; i++) {
        arr[i] = Number(prompt(`nhập phần tử ${i}: `));
    }
    let k= Number(prompt("số chia: "));
    for(let i=0; i<number; i++){
        for(let j=0; j<number; j++){
            if((arr[i] + arr[j]) % k===0){
                count++;
            }
        }
    }
    return count;
}

console.log(countnumber());
