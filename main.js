document.getElementById("convert").addEventListener("click", convert);
document.getElementById("mode").addEventListener("click", mode);
document.getElementById("rightshift").addEventListener("click", rightshift);
document.getElementById("leftshift").addEventListener("click", leftshift);

function rightshift() {
    //get input
    var input = document.getElementById("shiftinput").value;
    var length = input.length;
    //ammount to shift
    var shift = document.getElementById("shiftamount").value;
    var amount = ""
    for (var i = 0; i < shift; i++) {
        amount += "0";
    }
    //shift binary
    var shifted = (amount + input).substring(0, length);
    //output
    document.getElementById("shiftoutput").value = shifted;
}

function leftshift() {
    //get input
    var input = document.getElementById("shiftinput").value;
    //ammount to shift
    var shift = document.getElementById("shiftamount").value;
    //shift binary
    var shifted = input.substring(shift, input.length) + "0"*shift;
    //output
    document.getElementById("shiftoutput").value = shifted;
}

modes = ["number converter", "binary shift"];
var mode_index = 0;
function mode() {
    mode_index += 1;
    if (mode_index >= modes.length) {
        mode_index = 0;
    }

    console.log(mode_index);

    for (var i = 0; i < modes.length; i++) {
        document.getElementById(modes[i]).classList.remove("shown");
        document.getElementById(modes[i]).classList.add("hidden");
    }
    document.getElementById(modes[mode_index]).classList.remove("hidden");
    document.getElementById(modes[mode_index]).classList.add("shown");
}

function convert() {
    //get input
    var input = document.getElementById("input").value;
    //get from and to
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    console.log(from, to);
    //convert
    var converted = parseInt(input, from).toString(to);
    //output
    document.getElementById("output").value = converted;
}