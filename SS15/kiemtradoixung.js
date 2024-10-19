function isPalindrome(str) {
    //split bo space
    let arr = str.split("");

    let firstCharacter = arr[0];
    let lastCharacter = arr[arr.length - 1];

    if (firstCharacter === lastCharacter) {
        //bo phan tu dau
        arr.shift();
        //bo phan tu cuoi
        arr.pop();
        if (isEnd(arr)) {
            return true
        } else {
            let newStr = arr.join("");
            return isPalindrome(newStr);
        }
    }

    return false
}

function isEnd(arr) {
    return arr.length === 0 || arr.length === 1;
}

let chuoi = "Aa11aA";
let botrang= chuoi.trim();
console.log(isPalindrome(botrang));
