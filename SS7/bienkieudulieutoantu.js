inputphy= prompt("Input physic score: ");
inputche= prompt("Input chemical score: ");
inputmath= prompt("Input maths score: ");
let phy= parseInt(inputphy);
let che= parseInt(inputche);
let math= parseInt(inputmath);
let sum= phy + che + math;
document.write("the sum of score: "+sum);
let avg= sum/3;
document.write("\nthe average of score: "+avg);