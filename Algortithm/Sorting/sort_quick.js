function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

const arr = [32, 21, 12, 65, 2, 31, 1, 90, 91];
console.log(quickSort(arr));
