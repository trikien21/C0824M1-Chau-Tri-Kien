// let text="";
// for(let i=0; i<=5; i++){
//     text+= "the number is"+i +"\n";
// }
// console.log(text);

let num= +prompt("Enter your number: ");
let total= 0;
for(let i=0; i<=num; i++){
    total= total+i;
}
console.log(num);
console.log("sum of N: ",+total);

