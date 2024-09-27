function ChangeTemp(){
    let Amount= document.getElementById("amount").value;
    let From= document.getElementById("From").value;
    let To= document.getElementById("To").value;
    let result;

    if(From === "C" && To === "F"){
        result= "result: " +(Amount *9 /5 +32)+ "F";
    }else if(From === "F" && To ==="C"){
        result= "result: " +(Amount *5 /9 -32)+ "C";
    }
    document.getElementById("result").innerHTML=result;
}