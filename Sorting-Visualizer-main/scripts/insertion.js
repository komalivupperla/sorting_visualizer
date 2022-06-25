function Insertion() {
    consecutive_delay = 0;

    for (var j = 0; j < array_size; j++) {
        div_update(items[j], myArray[j], "yellow"); // Color update

        var key = myArray[j];
        var i = j - 1;
        while (i >= 0 && myArray[i] > key) {
            div_update(items[i], myArray[i], "red"); // Color update
            div_update(items[i + 1], myArray[i + 1], "red"); // Color update

            myArray[i + 1] = myArray[i];

            div_update(items[i], myArray[i], "red"); // Height update
            div_update(items[i + 1], myArray[i + 1], "red"); // Height update

            div_update(items[i], myArray[i], "lightblue"); // Color update
            if (i == (j - 1)) {
                div_update(items[i + 1], myArray[i + 1], "yellow"); // Color update
            }
            else {
                div_update(items[i + 1], myArray[i + 1], "lightblue"); // Color update
            }
            i -= 1;
        }
        myArray[i + 1] = key;

        for (var t = 0; t < j; t++) {
            div_update(items[t], myArray[t], "green"); // Color update
        }
    }
    div_update(items[j - 1], myArray[j - 1], "green"); // Color update

    enable_buttons();
}