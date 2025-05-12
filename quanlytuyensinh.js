
function getEleid(id){
    return document.getElementById(id);
}
function checkDiem(diemmon2, diemmon3, diemmon4, khuvuc, doituong, diemchuan1){
    // Kiểm tra điểm liệt
    if (diemmon2 === 0 || diemmon3 === 0 || diemmon4 === 0) {
        return "RỚT vì có môn bị 0 điểm.";
    }
    // Tính tổng điểm
    let tongdiem = diemmon2 + diemmon3 + diemmon4 + khuvuc + doituong;

    // Kiểm tra đủ điểm hay không
    if (tongdiem <= diemchuan1) {
         return `RỚT - Tổng điểm: ${tongdiem}`;
    } else {
        return `ĐẬU - Tổng điểm: ${tongdiem}`;
    }
}
function onSubmit(){
   //Tổng điểm xét tuyển = môn1 + môn2 + môn3 + điểm ưu tiên khu vực + điểm ưu tiên đối tượng
let diemchuan1=Number(getEleid("inputScore1").value);
let diemmon2=Number(getEleid("inputScore2").value);
let diemmon3=Number(getEleid("inputScore3").value);
let diemmon4=Number(getEleid("inputScore4").value);
let selLocation=Number(getEleid("selLocation").value);
let selUser=Number(getEleid("selUser").value);
    let result = checkDiem(diemmon2, diemmon3, diemmon4, selLocation, selUser, diemchuan1);
let txtResult=getEleid("txtResult");
txtResult.innerHTML=result;
}