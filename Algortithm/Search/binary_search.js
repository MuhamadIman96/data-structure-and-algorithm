function binarySearch(sortingArray, targetValue) {
  // membagi dua bagian untuk mencari target dengan sisi array
  let left = 0;
  let right = sortingArray.length - 1;

  for (let i = 0; i < sortingArray.length; i++) {
    let middle = Math.floor((left + right) / 2);
    // Jika menemukan target nilai yang dicari mengembalikan sebuah index dalam array
    if (arr[middle] === targetValue) return middle;
    else if (arr[middle] < targetValue) left = middle + 1;
    else right = middle - 1;
  }

  // Jika tidak tidak ditemukan target nilai yang dicari maka akan mengembalikan  - 1
  return -1;
}
