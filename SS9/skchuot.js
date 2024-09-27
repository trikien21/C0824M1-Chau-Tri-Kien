let imObj;
imgObj= document.getElementById("myImage");
function init(){
    imgObj = document.getElementById("myImage");
    imgObj.style.position= "absolute";
    imgObj.style.left= "0px";
}
function moveRight(){
    imgObj.style.left= parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;