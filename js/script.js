let operation = null;
let content = null;
window.onload = () => {
    document.getElementById("btn1").addEventListener("click", AddOnes);
    document.getElementById("btn0").addEventListener("click", AddZeros);
    document.getElementById("btnClr").addEventListener("click", DeleteContent);
    content = document.getElementById("btnEql").addEventListener("click", CalculateOperation);
    operation = document.getElementById("btnSum").addEventListener("click", Operations);
    operation = document.getElementById("btnSub").addEventListener("click", Operations);
    operation = document.getElementById("btnMul").addEventListener("click", Operations);
    operation = document.getElementById("btnDiv").addEventListener("click", Operations);
}



//AddOnes
function AddOnes() {
    document.getElementById("res").innerHTML += 1;
}

function AddZeros() {
    document.getElementById("res").innerHTML += 0;
}

function DeleteContent() {
    document.getElementById("res").innerHTML = "";
}

function Operations(operation) {
    let operator = "";
    switch (operation.target.id) {
        case "btnSum":
            operator = "+";
            break;
        case "btnSub":
            operator = "-";
            break;
        case "btnMul":
            operator = "*";
            break;
        case "btnDiv":
            operator = "/";
            break;
        default:
            operator = "";
    }
    document.getElementById("res").innerHTML += operator;
}


function CalculateOperation() {
    let content = document.getElementById("res").textContent;
    let pattern = /[^0-9]/;
    let numbers = content.split(pattern);
    result = 0;
    if (content.includes("+")) {
        result = parseInt(numbers[0], 2) + parseInt(numbers[1], 2);
    } else if (content.includes("-")) {
        result = parseInt(numbers[0], 2) - parseInt(numbers[1], 2);
    } else if (content.includes("*")) {
        result = parseInt(numbers[0], 2) * parseInt(numbers[1], 2);
    } else if (content.includes("/")) {
        result = parseInt(numbers[0], 2) / parseInt(numbers[1], 2);
    }
    document.getElementById("res").innerHTML = (result).toString(2);
}