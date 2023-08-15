function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    const n = arr.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap the root (maximum) element with the last element
        heapify(arr, i, 0); // Call heapify on the reduced heap
    }

    return arr;
}

const unsortedArray = [12, 50, 11, 120, 13,999, 5, 250, 6, 7,];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [5, 6, 7, 11, 12, 13, 50, 120, 250, 999]
