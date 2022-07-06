let diemToan = prompt("Mời nhập điểm Toán");
let diemVan = prompt("Mời nhập điểm Văn");
let diemAnh = prompt("Mời nhập điểm Anh");
// Ép kiểu từ String sang Number
let diemTrungBinh = (Number(diemToan) + Number(diemVan) + Number(diemAnh)) / 3;
// Lấy chữ số thập phân đầu tiên sau dấu phẩy
alert('Điểm trung bình là:'+diemTrungBinh.toFixed(1));