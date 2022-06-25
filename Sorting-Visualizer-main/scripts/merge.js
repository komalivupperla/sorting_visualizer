function Merge() {

    consecutive_delay = 0;

    merge_partition(0, array_size - 1);

    enable_buttons();
}

function merge_sort(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = myArray[q++];
            div_update(items[q - 1], myArray[q - 1], "red"); // Color update
        }
        else if (q > end) {
            Arr[k++] = myArray[p++];
            div_update(items[p - 1], myArray[p - 1], "red"); // Color update
        }
        else if (myArray[p] < myArray[q]) {
            Arr[k++] = myArray[p++];
            div_update(items[p - 1], myArray[p - 1], "red"); // Color update
        }
        else {
            Arr[k++] = myArray[q++];
            div_update(items[q - 1], myArray[q - 1], "red"); // Color update
        }
    }

    for (var t = 0; t < k; t++) {
        myArray[start++] = Arr[t];
        div_update(items[start - 1], myArray[start - 1], "green"); // Color update
    }
}

function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        div_update(items[mid], myArray[mid], "yellow"); // Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}