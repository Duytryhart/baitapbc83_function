function disableInput() {
  const customerType = getEleid("selCustomer").value;
  const inputConnect = getEleid("inputConnect");
  if (customerType === "company") {
    inputConnect.classList.remove("hidden");
  } else {
    inputConnect.classList.add("hidden");
  }
}
function getEleid(id){
    return document.getElementById(id);
}

function calculateCableBill() {
  const customerType = getEleid("selCustomer").value;
  const id = getEleid("inputID").value;
  const channels = Number(getEleid("inputChanel").value);
  const connections = Number(getEleid("inputConnect").value);

  let total = 0;

  if (customerType === "user") {
    total = 4.5 + 20.5 + (channels * 7.5);
  } else if (customerType === "company") {
    const baseFee = connections <= 10 ? 75 : 75 + (connections - 10) * 5;
    total = 15 + baseFee + (channels * 50);
  }

  getEleid("txtNet").innerText = `Mã KH: ${id} - Tiền cáp: $${total.toFixed(2)}`;
}