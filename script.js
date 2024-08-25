
const textbox = document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");

function convert(){
    let temp = Number(textbox.value);  // Corrected the capitalization and spelling

    if(tofahrenheit.checked){
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + " ∘F";  // Corrected textContent capitalization
    }
    else if(tocelsius.checked){
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + " ∘C";  // Corrected textContent capitalization
    }
    else{
        result.textContent = "Select a Unit";
    }
}
