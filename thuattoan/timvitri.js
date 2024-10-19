function timsolonthuN(arr, n){
    let giatrikhtrung= [...new Set (arr)].sort((a,b) => b-a);// da lam 1 mang moi va sap xep
    if(n>giatrikhtrung){
        return -1;
    }
    return giatrikhtrung[n-1];
    //da sap xep 1 mang moi
}

let arr=[4,5,6,7,8,9,10];
let n=3;
console.log(timsolonthuN(arr, n));