class temperature{
    celsius;
    constructor(celsius){
        this.celsius= celsius;
    }
    fahrenheit(){
        return 9/5*this.celsius+32;
    }
    kelvins(){
        return this.celsius+273.15;
    }
}
let Temperature= new temperature(35);
let F= Temperature.fahrenheit();
let K= Temperature.kelvins();

document.write("do K: "+ Temperature.kelvins()+ "do F: "+ Temperature.fahrenheit());