const textInput = document.querySelector(".text-area");

textInput.addEventListener("keydown", function(event) {
    if (event.key === " ") {
        event.preventDefault();
        const currentValue = textInput.value;
        textInput.value = currentValue.slice(0, -1); 
    } else if (event.key === "Backspace") {
        const currentValue = textInput.value;
        textInput.value = currentValue + " ";
        event.preventDefault();
    }
});