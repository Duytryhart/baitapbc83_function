const TAX1 = 0.05;
const TAX2 = 0.1;
const TAX3 = 0.15;
const TAX4 = 0.2;
const TAX5 = 0.25;
const TAX6 = 0.3;
const TAX7 = 0.35;

function getEleid(id) {
    return document.getElementById(id);
}
function tinhThuNhapChiuThue(income, people) {
    return income - 4 - (people * 1.6);
}
function tinhTienThue(tnct) {
    if (tnct <= 0) return 0;
    if (tnct <= 60) {
        return tnct * TAX1;
    } else if (tnct <= 120) {
        return 60 * TAX1 + (tnct - 60) * TAX2;
    } else if (tnct <= 210) {
        return 60 * TAX1 + 60 * TAX2 + (tnct - 120) * TAX3;
    } else if (tnct <= 384) {
        return 60 * TAX1 + 60 * TAX2 + 90 * TAX3 + (tnct - 210) * TAX4;
    } else if (tnct <= 624) {
        return 60 * TAX1 + 60 * TAX2 + 90 * TAX3 + 174 * TAX4 + (tnct - 384) * TAX5;
    } else if (tnct <= 960) {
        return 60 * TAX1 + 60 * TAX2 + 90 * TAX3 + 174 * TAX4 + 240 * TAX5 + (tnct - 624) * TAX6;
    } else {
        return 60 * TAX1 + 60 * TAX2 + 90 * TAX3 + 174 * TAX4 + 240 * TAX5 + 336 * TAX6 + (tnct - 960) * TAX7;
    }
}
function onSubmit2(){
     const name = getEleid("inputName2").value;
    const income = Number(getEleid("inputSalary").value);
    const people = Number(getEleid("inputUser").value);
    const output = getEleid("txtTax");

    const thuNhapChiuThue = tinhThuNhapChiuThue(income, people);
    const thuePhaiDong = tinhTienThue(thuNhapChiuThue);

    output.innerHTML = `👨‍💼 ${name} phải đóng thuế là: ${thuePhaiDong.toLocaleString()} triệu VND`;
}