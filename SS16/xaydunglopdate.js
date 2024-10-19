class date{
    day;
    month;
    year;
    constructor(day, month, year){
        this.day=day;
        this.month=month;
        this.year=year;
    }
}
let today=new date(2, 2, 2022);
today.day=20;
console.log(today);