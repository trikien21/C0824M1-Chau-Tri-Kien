function doanso() {
    let number = +prompt("so ban doan trong khoang: ");
    let number_rand = Math.floor(Math.random() * number);
    console.log(number_rand);
    let number_check = +prompt("nhap so ban doan: ");
    let count = 0;
    while (number_check !== number_rand) {
        count++;
        if (count === 4) {
            alert("Ban da het so lan doan");
            break;
        } else if (number_check < number_rand) {
            alert("so ban doan be hon");
        } else {
            alert("so ban doan lon hon");
        }
        number_check = prompt("nhap so ban doan: ");
    }
    if (count === 4) {
        document.write("ban da het so lan doan");
    } else {
        document.write("ban da doan trung. Chuc mung ban");
    }
}