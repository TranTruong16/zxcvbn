function checkNumber(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < (n / 2); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
function showResult() {
    var value = document.getElementById("number").value;
    if (isNaN(value)) {
        alert("Nhap lai");
        document.getElementById("number").value = "";
        document.getElementById("number").focus();
    } else {
        if (checkNumber(value)) {
            alert('day la so nguyen to');
        } else {
            alert("khong phai so nguyen to");
        }
    }
}