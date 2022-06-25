function Bubble() {

    consecutive_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(items[j], myArray[j], "yellow"); // Color update

            if (myArray[j] > myArray[j + 1]) {
                div_update(items[j], myArray[j], "red"); // Color update
                div_update(items[j + 1], myArray[j + 1], "red"); // Color update

                var temp = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = temp;

                div_update(items[j], myArray[j], "red"); // Height update
                div_update(items[j + 1], myArray[j + 1], "red"); // Height update
            }
            div_update(items[j], myArray[j], "lightblue"); // Color update
        }
        div_update(items[j], myArray[j], "green"); // Color update
    }
    div_update(items[0], myArray[0], "green"); // Color update

    enable_buttons();
}