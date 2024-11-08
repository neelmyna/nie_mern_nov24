function doSquare() {
    let num = parseInt(document.getElementById("number").value);
    let square = num * num;
    document.getElementById("output").value = square;
    document.getElementById("output_caption").innerHTML = "square";
}
function doCube() {
    let num = parseInt(document.getElementById("number").value);
    let cube = num * num * num;
    document.getElementById("output").value = cube;
    document.getElementById("output_caption").innerHTML = "cube";
}

function findResult(operation) {
    let num = parseInt(document.getElementById("number").value);
    let result = 0
    if (operation == 1) {
        document.getElementById("output_caption").innerHTML = "Square";
        result = num * num;
    }
    else {
        result = num * num * num;
        document.getElementById("output_caption").innerHTML = "Cube";
    }
        document.getElementById("output").value = result;
}