function kiem_tra(){
    let can_nang= document.getElementById("can_nang").value;
    let chieu_cao= document.getElementById("chieu_cao").value;
    let bmi= can_nang/ (Math.pow(chieu_cao, 2))
    let result= "";

    if(bmi < 16)
        result= "gầy độ 3. Ăn nhiều vào ";
    else if(bmi<17)
        result= "gầy độ 2";
    else if(bmi<18.5)
        result= "gầy độ 1";
    else if(bmi<25)
        result= "bình thường";
    else if(bmi<30)
        result= "thừa cân";
    else if(bmi<35)
        result= "béo phì độ 1";
    else if(bmi<40)
        result= "béo phì độ 2";
    else
        result= "béo phì độ 3";

    document.getElementById("result").innerHTML= "Chỉ số BMI là: "+bmi + ".Bạn" + "<br>"+ result+ "</br>";

}