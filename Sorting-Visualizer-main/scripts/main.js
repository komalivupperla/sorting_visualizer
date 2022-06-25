// Variables
var array_size = 10;

var create_array = document.querySelector("#generate_new_array");
var algo_buttons = document.querySelectorAll(".algos button");

var myArray = [];
var items = [];

var container = document.getElementById("array_container");


// Array generation
generate_array()
create_array.addEventListener("click", generate_array);

function generate_array() {
    // Clear previous iteration array items
    container.innerHTML = "";

    // Adding of divs to the array container
    for (var i = 0; i < array_size; i++) {
        myArray[i] = Math.floor(Math.random() * 100);
        items[i] = document.createElement("div");
        container.appendChild(items[i]);
        items[i].classList.add("array_element");
        items[i].style.height = myArray[i] + "%";
    }
}


for (var i = 0; i < algo_buttons.length; i++) {
    algo_buttons[i].addEventListener("click", run_algo);
}

function disable_buttons() {
    for (var i = 0; i < algo_buttons.length; i++) {
        algo_buttons[i].disabled = true;
        create_array.disabled = true;
    }
}

// Running the selected algorithm
function run_algo() {
    disable_buttons();

    switch (this.innerHTML) {
        case "Bubble": Bubble();
            break;
        case "Selection": Selection_Sort();
            break;
        case "Insertion": Insertion();
            break;
        case "Merge": Merge();
            break;
        case "Quick": Quick();
            break;
    }
}
