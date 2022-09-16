document.getElementById("htb").addEventListener("click", htb);
document.getElementById("bth").addEventListener("click", bth);
document.getElementById("htn").addEventListener("click", htn);
document.getElementById("nth").addEventListener("click", nth);
document.getElementById("ntb").addEventListener("click", ntb);
document.getElementById("btn").addEventListener("click", btn);

function htb() {
    //get input
    var input = document.getElementById("input").value;
    //convert hex to binary
    var binary = parseInt(input, 16).toString(2);
    //output
    document.getElementById("output").value = binary;
}

function bth() {
    //get input
    var input = document.getElementById("input").value;
    //convert binary to hex
    var hex = parseInt(input, 2).toString(16);
    //output
    document.getElementById("output").value = hex;
}


function htn() {
    //get input
    var input = document.getElementById("input").value;
    //convert hex to number
    var number = parseInt(input, 16);
    //output
    document.getElementById("output").value = number;
}

function nth() {
    //get input
    var input = document.getElementById("input").value;
    //convert number to hex
    var hex = parseInt(input, 10).toString(16);
    //output
    document.getElementById("output").value = hex;
}

function ntb() {
    //get input
    var input = document.getElementById("input").value;
    //convert number to binary
    var binary = parseInt(input, 10).toString(2);
    //output
    document.getElementById("output").value = binary;
}

function btn() {
    //get input
    var input = document.getElementById("input").value;
    //convert binary to number
    var number = parseInt(input, 2);
    //output
    document.getElementById("output").value = number;
}