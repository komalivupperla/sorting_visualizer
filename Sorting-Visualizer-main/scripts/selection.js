function Selection_Sort() {

    consecutive_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        div_update(items[i], myArray[i], "red"); // Color update

        index_min = i;

        for (var j = i + 1; j < array_size; j++) {
            div_update(items[j], myArray[j], "yellow"); // Color update

            if (myArray[j] < myArray[index_min]) {
                if (index_min != i) {
                    div_update(items[index_min], myArray[index_min], "lightblue"); // Color update
                }
                index_min = j;
                div_update(items[index_min], myArray[index_min], "red"); // Color update
            }
            else {
                div_update(items[j], myArray[j], "lightblue"); // Color update
            }
        }

        if (index_min != i) {
            var temp = myArray[index_min];
            myArray[index_min] = myArray[i];
            myArray[i] = temp;

            div_update(items[index_min], myArray[index_min], "red"); // Height update
            div_update(items[i], myArray[i], "red"); // Height update
            div_update(items[index_min], myArray[index_min], "lightblue"); // Color update
        }
        div_update(items[i], myArray[i], "green"); // Color update
    }
    div_update(items[i], myArray[i], "green"); // Color update

    enable_buttons();
}