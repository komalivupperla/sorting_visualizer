// We have to change background-color and height of the sorting element
var speed = 5000;

// Decrease numerator to increase speed
var delay_time = 10000 / (Math.floor(array_size / 10) * speed);

//This is needed to be updated on every div change so that visualization is visible
var consecutive_delay = 0;

// Change the color and size of the sorting element
function div_update(container, height, color) {
    window.setTimeout(function () {
        container.style.height = height + "%";
        container.style.backgroundColor = color;
    }, consecutive_delay += delay_time);
}

function enable_buttons() {
    window.setTimeout(function () {
        for (var i = 0; i < algo_buttons.length; i++) {
            algo_buttons[i].disabled = false;
            create_array.disabled = false;
        }
    }, consecutive_delay += delay_time);
}
