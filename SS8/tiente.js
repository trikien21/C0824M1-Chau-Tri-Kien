function ChangeMoney() {
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let ToC = document.getElementById("To").value;
    let result;

    if (FromC === "USD" && ToC === "VND") {
        result = "result: " + (Amount * 23000) + "dong";
    } else if (FromC === "VND" && ToC === "USD") {
        result = "result: " + (Amount / 23000) + "$";
    }
    document.getElementById("result").innerHTML = result;
}
