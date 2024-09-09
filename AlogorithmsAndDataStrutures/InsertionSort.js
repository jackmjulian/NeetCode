function insertionSort(arr) {
  // Start from the second element (index 1), because we assume the first element (index 0) is already sorted.
  for (let i = 1; i < arr.length; i++) {
    // j is the index of the element before the current element i
    let j = i - 1;

    // While we are not at the beginning of the array (j >= 0) and
    // the current element (arr[j + 1]) is smaller than the element before it (arr[j]),
    // we need to "swap" the two elements to maintain sorted order.
    while (j >= 0 && arr[j + 1] < arr[j]) {
      // Swap the elements at position j and j+1
      let tmp = arr[j + 1]; // Store the value of arr[j + 1] in a temporary variable
      arr[j + 1] = arr[j]; // Move arr[j] to the right (to position j+1)
      arr[j] = tmp; // Place the smaller value (stored in tmp) in the earlier position (j)

      // Move one step back to compare the previous element with the swapped one
      j--;
    }
  }

  // After sorting, return the sorted array
  return arr;
}

// The i pointer points at the element we are currently inserting into the sorted portion of the array.
// The j pointer starts off one index to the left of i.
// Our goal is to find the position that arr[i] should be inserted into the sorted portion of the array.
// We continue swapping it with arr[j] until we find the correct position.
// After each swap we shift j to the left by 1
// We stop once the element is greater than or equal to the element to its left.
