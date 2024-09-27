function ChangeUnit(){
    let Amount= document.getElementById("Amount").value;
    let From= document.getElementById("From").value;
    let To= document.getElementById("To").value;
    let result;
    if(From === "met" && To === "fit"){
        result="result: "+(Amount * 3.2808)+"fit";
    }
    else if(From === "fit" && To === "met"){
        result="result: "+(Amount / 3.2808)+"met";
    }
    document.getElementById("result").innerHTML=result;
}