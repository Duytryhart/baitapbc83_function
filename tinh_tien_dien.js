const muc1 = 500;
const muc2 = 650;
const muc3 = 850;
const muc4 = 1100;
const muc5 = 1300;

let totalMoney = 0;

function tinhTien1(soKw, price) {
    return soKw * price;
}

function tinhTien2(soKw, price) {
    return (soKw - 50) * price;
}

function tinhTien3(soKw, price) {
    return (soKw - 100) * price;
}

function tinhTien4(soKw, price) {
    return (soKw - 200) * price;
}

function tinhTien5(soKw, price) {
    return (soKw - 350) * price;
}

function checkTinhTienDien(soKw, giathanh1, giathanh2, giathanh3, giathanh4, giathanh5) {
    if (soKw <= 50) {
        totalMoney = tinhTien1(soKw, giathanh1);
    } else if (soKw <= 100) {
        totalMoney = tinhTien1(50, giathanh1) + tinhTien2(soKw, giathanh2);
    } else if (soKw <= 200) {
        totalMoney = tinhTien1(50, giathanh1) + tinhTien2(100, giathanh2) + tinhTien3(soKw, giathanh3);
    } else if (soKw <= 350) {
        totalMoney = tinhTien1(50, giathanh1) + tinhTien2(100, giathanh2) + tinhTien3(200, giathanh3) + tinhTien4(soKw, giathanh4);
    } else {
        totalMoney = tinhTien1(50, giathanh1) + tinhTien2(100, giathanh2) + tinhTien3(200, giathanh3) + tinhTien4(350, giathanh4) + tinhTien5(soKw, giathanh5);
    }
    return totalMoney;
}

function getEleid(id) {
    return document.getElementById(id);
}

function onSubmit1() {
    const userName = getEleid("inputName").value;
    const kW = Number(getEleid("inputKW").value);
    const thanhTien = getEleid("txtElecBill");

    const result = checkTinhTienDien(kW, muc1, muc2, muc3, muc4, muc5);
    const mydev = `
    <div>
        <p>${userName}, tiền điện của bạn là: <strong>${result.toLocaleString('vi-VN')}đ</strong></p>
    </div>
    `;
    thanhTien.innerHTML = mydev;
}
