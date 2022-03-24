// Khai bao bien
// var fullName = 'Tran Nhat Kien';
// var age = 26;

//built-in
// console.log(fullName)
// confirm('Xac nhan tuoi')
// setTimeout(function(){
//     alert('thong bao')
// }, 1000)
// setInterval(function(){
//     console.log('Day la log')
// }, 1000)

//Toan tu
// Giới thiệu về toán tử JS
// 1. Toán tử số học
// 2. Toán tử gán '
// 3. Toán tử so sánh
// 4. Toán tử logic

// /*** Toán tử số học
//             --> Cộng
//             --> Trừ
//             --> Nhân
//             --> Lũy thừa 关 *
//             --> Chia
//      I
//             --> Chia lấy số dư
//             --> Tăng 1 giá trị số
//             --> Giảm 1 giá trị số

/** Toán tử gán
/ ** Toán tử gán
                     Tương đương
                     X = y
Toán tử Ví dụ
         x = y
                     X = X + y x += y
          X -= y
+=
                     X = X - y -D
          X *= y X = X * y **
                     X = X / y x /= y
          X **= y **= x = X ** y
*/

// console.log('--- Hậu tố ---');

// var number1 = 1;

// console.log(number1++); // 1
// console.log(number1); // 2

// console.log(number1++); // 2
// console.log(number1); // 3

// console.log('--- Tiền tố ---');

// var number2 = 1;

// console.log(++number2); // 2
// console.log(number2); // 2

// console.log(++number2); // 3
// console.log(number2); // 3

// // Toán tử -- tương tự các bạn nhé, điểm khác
// // là thay vì cộng 1 trừ toán tử -- sẽ trừ 1


// Toán tử ++
// Prefix & Postfix

// var a = 6;

// var a = --a; 
// console.log(a)
//1: +1 cho a, a = a + 1 => a = 7
//2: trả về a sau khi đc + 1


// var output = a--;
// console.log('output: ',output);
//1: a copy, a copy = 6
//2: trừ 1 của a ;
//3: trả về a copy 


/*
 * Toán tử chuỗi - String operator
*/

// var firstName = 'Kien';
// var lastName = 'Tran';
// console.log(firstName + lastName);


/**
  * If - else
 */


/*
Kiểu dữ liệu trong Javascript
1. Dữ liệu nguyên thủy - Primitive Data
      Number
      String
      Boolean
      Undefined
      Null
     -Symbol
2. Dữ liệu phức tap - Complex Data
      Function T
      Object
*/
// var a = 1;
// var a = 2;
// var c = 1.5;


// //string type 
// var fullName = 'Son Dang'
// console.log(fullName);

// funcion
// var myFuncion = function(){
//       alert('Hello motherfuck');
// }
// myFuncion();


//Toan tu so sach - p2

/*
* === 
* !==
*/

// var a = 1;
// var b = '1';

// console.log(a!== b);

// Hiểu hơn về câu lệnh điểu kiện và phép so sánh
// và hiểu đc phép ss

// var a = 1;
// var b = 2;

// // var result = a < b && a < 0;

// // console.log(result);

// var result = 'a' || 'b' || 'c' || NaN;


// console.log('result',result)
// // if(result){
//       console.log('DK dung');
// }else{
//       console.log('Sai');
// }


/******
 1. Hàm?
  Một khối mã
   Làm 1 việc cụ thể
2. Loại hàm
   Built-in
  Tự định nghĩa
3. Tính chất
   Không thực thi khi định nghĩa
   Sẽ thực thi khi được gọi
   Có thể nhận tham số
   Có thể trả về 1 giá trị
4. Tao hàm đầu tiên
 */

// a-z A-Z 0-9 _ $

// function showDialog() {
//       // code
//       alert('Hi xin chào các bạn');
// }
// showDialog();

// call() ->toán tử để gọi hàm








// Tham số hàm - Javascript cơ bản
/** 
1. Tham số?
   - Định ngĩa?
   Kiểu dữ liệu?
   Tính private?
   1 tham số
   - Nhiều tham số
2. Truyền tham số
  - 1 tham số
  - Nhiều tham số
3. Ar guments?
HÁC Đối tượng arguments
   Giới thiệu vòng for
*/

// 1.Tham số

// function writelog(message,message2) {
//    var myString = '';
//    for(var param of arguments){
//       myString +=`${param} - `
//    }
//    console.log(myString)
// }

// writelog('Test message','Test 2','log 3');

// console.log(1,2,3,4,5)


// Return trong hàm - JS cơ bản 
// var isConfirm = confirm('Message');
// console.log(isConfirm);
// function cong(a,b){
//    return a + b;
   
// }
// var result = cong(2,8);
// console.log(result)

/* Một số điều cần biết về function
N. Khi function đặt trùng tên?
2. Khai báo biến trong hàm? có
3. Định nghĩa hàm trong hàm?
*/

// function showMessage(){
//    // var fullName = 'Kien Tran';
//    // console.log(fullName);
//    function showMessage2(){
//       console.log('Message 2')
//    }
//    console.log(showMessage2);
// }
// showMessage();

// function showMessage(){
//    console.log('Message 2')
// }

// function showMessage(){
//    console.log('Message 3')
// }



/*  Các loại function

1. Declaration function
2. Expression function
3.  Arrow function
*/

// function showMessage(){ //=> Declaration function
//    console.log('Declaration function')
// }
// var message2 = function showMessage2(){ //=> Expression function
//    console.log('Expression function')
// }

/*
CHUỖI TRONG JAVASCRIPT
1. Tạo chuỗi
       Các cách tạo chuỗi
      - Nên dùng cách nào? Lý do?
       Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết Code
5. Template string ES6
*/
// backslash in JS

// var fullName = 'Kien tran la \'sieu nhan\'';

// console.log( fullName.length)

// var fN = 'Kien'
// var lN = 'Tran'

// console.log(`Toi la: ${fN} ${lN} `)

// LÀM VIỆC VỚI CHUỖI
// var myString = '         Hoc JS tai F8!        ';
// Keyword: Javascript string methods
// 1. Length
// console.log(myString.length)

// 2. Find index
// console.log(myString.lastIndexOf('JS'))


// 3. Cut string
// console.log(myString.slice(4,6))

// 4. Replace (ghi đè) 
// console.log(myString.replace(/JS/g,'Javascript'))


// 5. Convert to upper case
// console.log(myString.toUpperCase())


// 6. Convert to lower case
// console.log(myString.toLowerCase())


// 7. Trim loại bỏ khoảng trắng 2 đầu
// console.log(myString.trim())


// 8. Split dựa vào điểm chung để cắt thành mảng
// var languages = 'Javascript'
// console.log(languages.split(''))

// 9. Get a character by index
// const myString2 = 'Kien Tran';


// console.log(myString2.charAt(3))


/*
Kiểu số (Number) trong Javascript
1. Tạo giá tri Number
      Các cách tạo
      Dùng cách nào? Tại sao?
      Kiểm tra data type
2. Làm việc với Number
      To string
      To Fixed
*/

// var age = 18;
// var PI = 30000000.33332324234454575634523;


// console.log(PI.toFixed(5))

/*
Mảng trong Javascript - Array
1. Tạo mảng
     - Cách tạo
     Sử dụng cách nào? Tại sao?
    - Kiếm tra data type?
2. Truy xuất mảng
    Độ dài mảng
     Lấy phần tử theo index
*/




// var languages = [
//    'Javascript',
//    'C#',
//    'Java',
// ];
// // console.log(Array.isArray([]))
// console.log(languages[2])

/*
Làm việc với Array
// Keyword: J
1. To string
2. Join
3. Рор
4. Push
5. Shift
6. Unshift
7. Splicing
B. Concat
9. Slicing
*/

// var languages = [
//    'Javascript',
//    'C#',
//    'Java',
// ];

// console.log(languages.toString())
// console.log(languages.pop()) //Xoá phần tử cuối mảng và trả về phần tử đã xoá
// console.log(languages)


// console.log(languages.push('Dart','Java'))//Thêm phần tử cuối mảng và trả về độ dài
// console.log(languages)

// console.log(languages.shift())//Xoá đi phần tử ở đầu mảng
// console.log(languages)

// console.log(languages.unshift('Java','Dart'))//Thêm 1 hoặc nhiều phần tử ở đầu mảng trả về độ dài
// console.log(languages)

// languages.splice(1,1,'Dart') //Xoá phần tử , chèn phần tử

// console.log(languages)

// var languages2 = [
//    'Dart',
//    'Ruby'
// ];
// console.log(languages.concat(languages2))//Nối mảng

// console.log(languages.slice(0,-1))//Cắt phần tử trong mang



//Object trong JS


// var myInfo = {
//    name : 'Kien-chan',
//    age :18,
//    address:'HN'
// }
// myInfo['My-email'] = 'kiendz@gmail.com'
// console.log(myInfo.age) 

// alert('Hello')




/*
// Object constructor
*/

// function User(firstName, lastName, avatar){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.avatar = avatar;

//    this.getName = function(){
//       return `${this.firstName} ${this.lastName}`
//    }
// } 
// var author = new User('Kien', 'Chan', 'Avatar')
// var user = new User('Quy', 'Dan', 'Avatar')

// author.title = 'Chia se cho thay di'
// user.comment = 'co khoa asp.net k ad '

// console.log(author)
// console.log(user)


/*
Object prototyp-Basic
1. Prototype là gì?
2. Sử dụng khi nào?
*/
// function User(firstName, lastName, avatar) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.avatar = avatar;
//    this.getName = function() {
//       return `${this.firstName} ${this.lastName}` ;
//    }
// }

// User.prototype.className = 'F8'
// User.prototype.getClassName = function(){
//    return this.className;
// }
// var user = new User('Sơn', 'Đặng', 'Avatar 1');
// var user2 = new User('Tân', 'Đặng', 'Avatar 2');

// console.log(user.className)
// console.log(user2.getClassName())


/*
Đối tượng Date 
*/

// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth();
// var day = date.getDay();

// console.log(`${day}/${month}/${year}`)


/*
Math object
- Math.PI
  Math. round () // Làm trong số
  Math. abs ()
  Math.ceil()
  Math.floor()
  Math.random()
  Math.min()
  Math.max()
*/
// var random = Math.floor(Math.random() * 100);
// if(random < 5){
//    console.log('Success')
// }
// // console.log(Math.round(1.3))

/*
 Câu lệnh rẽ nhánh
*/
// var date = 2;
// if(date === 2){
//    console.log('Hôm nay là thứ 2')
// }