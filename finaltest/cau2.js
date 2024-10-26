function lamtron(diem){
    if(diem<0 || diem>100){
        return "Điểm không hợp lệ.";
    }

    if(diem<48){
        return "trượt";
    }
    let boi5;
    if(diem%5===0){
        boi5=diem;
    }else{
        boi5= diem+(5-(diem %5));
    }

    if(boi5 - diem<3 ){
        return boi5;
    }else{
        return diem;
    }
}

console.log(lamtron(45));
console.log(lamtron(88));
console.log(lamtron(95));
console.log(lamtron(55));

