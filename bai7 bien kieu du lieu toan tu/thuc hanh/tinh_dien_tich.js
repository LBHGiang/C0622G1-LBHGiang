let nhapdai, nhaprong;
nhapdai = prompt('Nhập chiều dài');
nhaprong = prompt('Nhập chiều rộng');
let dai = parseInt(nhapdai);
let rong = parseInt(nhaprong);
let chuvi = 2 * (dai + rong);
let dientich = dai * rong;
alert('Chu vi la' + chuvi + ' dien tich la' + dientich);
// document.write('Chu vi la' + chuvi + ' dien tich la' + dientich);