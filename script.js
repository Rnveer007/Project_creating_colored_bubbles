let btn_reset = document.querySelector("#reset");
let btn_undo = document.querySelector("#undo");
let btn_redo = document.querySelector("#redo");
let display = document.querySelector("#result_display");
result = document.body

let arr = [];   // Array to store dots for undo
let redoArr = [];// Array to store dots for redo

result.addEventListener("click", function (event) {
    if (event.target.nodeName === "DIV") return
    if (event.target.nodeName === "BUTTON") return

    let x = event.pageX;
    let y = event.pageY;

    let dotes = document.createElement("p");
    dotes.classList = "dotes";
    dotes.style.left = `${x - 10}px`;
    dotes.style.top = `${y - 10}px`;



    // Create rendom colors

    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    dotes.style.backgroundColor = randomColor;



    result.append(dotes);
    arr.push(dotes);
    redoArr = [];
})


btn_reset.addEventListener("click", function (e) {
    e.preventDefault()
    // result.innerHTML = ""; // Clear all dots
    arr.forEach(dotes => {
        result.removeChild(dotes)  // using forEach for remove dotes from body and keep button as it is 
    })
    arr = []; // Reset the array
    redoArr = []; // Reset redo history
})


btn_undo.addEventListener("click", function (e) {
    e.preventDefault();
    if (arr.length > 0) {
        let lastDot = arr.pop(); // Remove the last dot from the array
        result.removeChild(lastDot); // Remove it from the DOM
        redoArr.push(lastDot);
    }
});


btn_redo.addEventListener("click", function (e) {
    e.preventDefault();
    if (redoArr.length > 0) {
        let lastRedoDot = redoArr.pop(); // Get the last dot from redo array
        result.appendChild(lastRedoDot); // Add it back to the DOM
        arr.push(lastRedoDot); // Add it back to the undo array
    }
});


