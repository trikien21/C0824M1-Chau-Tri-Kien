function printRectangle(height, width) {
    for (let i = 0; i < height; i++) {
        let line = "";
        for (let j = 0; j < width; j++) {
            if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
                line += "*";//in ký tự * ở xung quanh
            } else {
                line += " "; // Thêm khoảng trắng bên trong
            }
        }
        console.log(line); // In dòng ra console
    }
}
let height= 10;
let width= 5;
printRectangle(height, width);