function formatEmail(email){
    return /^[^s@]+@[^s@]+.[^s@]+$/.test(email);
}

class Student{
    fullname;
    email;
    phone;
    address;
    gender;

    constructor(fullname, email, phone, address, gender){
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
    }
}
function display(students) {
    let stt=0;
    let result  = `<table class='list-student'>
        <h3>Danh sách sinh viên</h3>
           <table>
                <tr>
               <td>STT</td>
               <td>Họ và tên</td>
               <td>Email</td>
               <td>Điện thoại</td>
               <td>Địa chỉ</td>
               <td>Giới tính</td>
               <td colspan="2">Hành Động</td>
                </tr>
           `
    for (let i = 0; i < students.length; i++) {
        stt++;
        let genderLabel= parseInt(students[i].gender) ;
        if(genderLabel===1){
            genderLabel= "Nam";
        }else if(genderLabel===2){
            genderLabel="Nữ";
        }
        result += "<tr>"
        result += `<td>${stt}</td>`
        result +=    `<td>${students[i].fullname}</td>`
        result +=    `<td>${students[i].email}</td>`
        result +=    `<td>${students[i].phone}</td>`
        result +=   `<td>${students[i].address}</td>`
        result +=   `<td>${genderLabel}</td>`
        result +=    `<td><button onclick="edit(${i})">Edit</button></td>`
        result +=    `<td><button onclick="deleteStudent(${i})">Delete</button></td>`
        result +=    "</tr>"
    }
    result+= "</table>"
    document.getElementById("result").innerHTML= result;
}

function edit(i){
    let editStudent= students[i];
    if(editStudent) {
        document.getElementById('fullname').value = editStudent.fullname;
        document.getElementById('email').value = editStudent.email;
        document.getElementById('phone').value = editStudent.phone;
        document.getElementById('address').value = editStudent.address;
        document.getElementById('gender').value = editStudent.gender;
        display(i);
        alert("Chỉnh sửa thành công");
    }
}

function deleteStudent(i){
    let isDelete= confirm(`Bạn có chắc muốn xoá học viên ${students[i].fullname}?`)
    if(isDelete){
        students.splice(i,1)
        display(students)
        alert("xoá thành công")
    }
}

function save() {
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = "";
    let student={fullname, email, phone, address, gender};

    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    // fullname
    if (fullname === "") {
        fullname="";
        document.getElementById("fullname-error").innerHTML = "Vui lòng nhập họ và tên "
    } else if (fullname.trim().length <= 5 || fullname.trim().length > 50)//.trim kh tính space
    {
        fullname="";
        document.getElementById("fullname-error").innerHTML = "Họ và tên không dưới 5 và trên 50 ký tự "
    } else {
        student.fullname=fullname;
        document.getElementById("fullname-error").innerHTML = "";
    }

    // email
    if (email === "") {
        email="";
        document.getElementById("email-error").innerHTML = "Vui lòng nhập email";
    } else if (!formatEmail(email)) {
        email="";
        document.getElementById("email-error").innerHTML = "Email không đúng định dạng";
    } else {
        student.email= email;
        document.getElementById("email-error")
    }

    // phone
    if (phone === "") {
        phone="";
        document.getElementById("phone-error").innerHTML = "Vui lòng nhập số điện thoại";
    } else if (phone.trim().length > 10) {
        phone="";
        document.getElementById("phone-error").innerHTML = "Số điện thoại không đúng";
    } else {
        student.phone=phone;
        document.getElementById("phone-error").innerHTML = "";
    }

    //address
    if (address ===""){
        address="";
        document.getElementById("address-error").innerHTML= "Vui lòng nhập địa chỉ";
    }else{
        student.address=address;
        document.getElementById("address-error").innerHTML = "";
    }

    //gender
    if(gender===""){
        gender="";
        document.getElementById("gender-error").innerHTML= "Vui lòng chọn giới tính";
    }else{
        student.gender=gender;
        document.getElementById("gender-error").innerHTML = "";
    }

    if(fullname && email && phone && address && gender){
        students.push(student);
        display(students);
    }
}

function search(){
    let studentSearch= document.getElementById("studentSearch").value;
    let result=[];
    for(let i=0; i<students.length; i++){
        if(students[i].fullname.includes(studentSearch)){
            result.push(students[i]);
        }
    }
    display(result);
}

let students=[];
students.push(new Student( 'Chau Tri Kien', 'trikien512@gmail.com', '0938868512', '87K', '1'));
students.push(new Student( 'Nguyen Thi A', 'nguyenthia@gmail.com', '123456789', "99H", '2'));
display(students);