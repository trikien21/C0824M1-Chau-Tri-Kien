function printTriangleTopLeft(height) {
    for (let i = 1; i <= height; i++) {
        let line=" ";
        for(let j=0; j<i; j++){
            line+= "*";

        }
        console.log(line);
    }
}

function printTriangleTopRight(height) {
    for (let i = 1; i <= height; i++) {
        let line = '';
        for (let j = 0; j < height - i; j++) {
            line += ' '; // Thêm khoảng trắng
        }
        for (let j = 0; j < i; j++) {
            line += '*'; // Thêm dấu *
        }
        console.log(line);
    }
}

function printTriangleBottomLeft(height) {
    for (let i = height; i >= 1; i--) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += "*";
        }
        console.log(line);
    }
}

function printTriangleBottomRight(height) {
    for (let i = height; i >= 1; i--) {
        let line = " ";
        for (let j = 0; j < height-i; j++) {
            line += " ";
        }
        for(let j=0; j<i; j++){
            line+="*";
        }
        console.log(line);
    }
}

printTriangleTopLeft(5);
printTriangleBottomLeft(5);
printTriangleTopRight(5);
printTriangleBottomRight(5);