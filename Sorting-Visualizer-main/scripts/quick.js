function Quick() {

    consecutive_delay = 0;

    quick_sort(0, array_size - 1);

    enable_buttons();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = myArray[start]; // make the first element as pivot element
    div_update(items[start], myArray[start], "yellow"); // Color update

    for (var j = start + 1; j <= end; j++) {
        // re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other
        if (myArray[j] < piv) {
            div_update(items[j], myArray[j], "yellow"); // Color update

            div_update(items[i], myArray[i], "red"); // Color update
            div_update(items[j], myArray[j], "red"); // Color update

            var temp = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = temp;

            div_update(items[i], myArray[i], "red"); // Height update
            div_update(items[j], myArray[j], "red"); // Height update

            div_update(items[i], myArray[i], "lightblue"); // Height update
            div_update(items[j], myArray[j], "lightblue"); // Height update

            i += 1;
        }
    }
    div_update(items[start], myArray[start], "red"); // Color update
    div_update(items[i - 1], myArray[i - 1], "red"); // Color update

    var temp = myArray[start]; // put the pivot element in its proper place
    myArray[start] = myArray[i - 1];
    myArray[i - 1] = temp;

    div_update(items[start], myArray[start], "red"); // Height update
    div_update(items[i - 1], myArray[i - 1], "red"); // Height update

    for (var t = start; t <= i; t++) {
        div_update(items[t], myArray[t], "green"); // Color update
    }

    return i - 1; // return the position of the pivot
}

function quick_sort(start, end) {
    if (start < end) {
        // stores the position of pivot element
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1); // sorts the left side of pivot
        quick_sort(piv_pos + 1, end); // sorts the right side of pivot
    }
}