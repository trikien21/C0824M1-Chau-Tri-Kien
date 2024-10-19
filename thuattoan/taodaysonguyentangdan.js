function isMonotonic(a){
    let tang= true;
    let giam= true;
    for(let i=1; i<a.length; i++){
        if(a[i] === a[i-1]){
            return false;
        }
        if(a[i] < a[i-1]){
            tang= false;
        }else{
            giam= false;
        }
    }
    return tang || giam;
}

let arr=[1,4,5,7,9];
let arr1=[0];
let arr2=[3,3];
console.log(isMonotonic(arr));
console.log(isMonotonic(arr1));
console.log(isMonotonic(arr2));