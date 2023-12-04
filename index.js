document.addEventListener("DOMContentLoaded", function() {
    let displayVal = "";
    const display = document.getElementById("display");

    document.querySelectorAll(".number").forEach(function(button) {
        button.addEventListener("click", function() {
            displayVal += this.value;
            //document.querySelector("#display").value=displayVal;
            display.value = displayVal;
        });
    });

    document.querySelectorAll(".operator").forEach(function(button) {
        button.addEventListener("click", function() {
            displayVal += this.textContent;
            display.value = displayVal;
        });
    });

    document.querySelector(".clear").addEventListener("click", function() {
        displayVal = "";
        display.value = "";
    });

    document.querySelector(".calculate").addEventListener("click", function() {
        try {
            displayVal = eval(displayVal);
            display.value = displayVal;
        } catch (e) {
            display.value = "Error";
        }
    });
});