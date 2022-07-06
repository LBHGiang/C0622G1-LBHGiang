let a = prompt('Nhập số thứ nhất');
let b = prompt('Nhập số thứ hai');
a = parseInt(a)
b = parseInt(b)
let c = a + b;
if (a % b == 0) {
    alert('a chia hết cho b. Tổng của a và b là' + c);
} else {
    alert('a không chia hết cho b. Tổng của a và b là' + c);
}
