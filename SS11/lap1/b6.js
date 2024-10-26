let count=1;
let sum=0;

for(let i=0; ; i++) {
    if (i % 7 === 0) {
        sum += i;
    }
    count++;
    if(count===30) {
        break;
    }
}
console.log(sum);