let toan, ly, hoa;
toan = prompt('Nhập điểm toán');
ly = prompt('nhập điểm lý');
hoa = prompt('nhập điểm hóa');
toan = parseInt(toan);
ly = parseInt(ly);
hoa = parseInt(hoa);
var tong = (toan + ly + hoa);
var dtb = tong / 3;
document.write('Điểm trung bình =' + dtb + '. Tổng là: ' + tong);