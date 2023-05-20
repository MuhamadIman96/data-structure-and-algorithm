function bubbleSort(array) {
  let isSwap = false;

  for (let i = 0; i < array.length; i++) {
    isSwap = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      // Jika nilai awal lebih besar daripada nilai index didepannya tukar nilai
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwap = true;
      }
    }

    // jika tidak ada nilai yang ditukar atau sudah tersorting hentikan proses
    if (!isSwap) {
      break;
    }
  }
  return array;
}
