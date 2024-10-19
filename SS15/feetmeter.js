function footToMeter(foot){
    let meter= 0.305*foot;
    return meter;
}

function metterToFoot(meter){
    let foot= 3.279*meter;
    return foot;
}

let foot= Number(prompt("nhap foot: "));
console.log(foot +"foot "+ "=" + footToMeter(foot)+ " meter");
let meter= Number(prompt("nhap meter: "));
console.log(meter +"meter "+ "=" + meterToFoot(meter)+ " foot");
