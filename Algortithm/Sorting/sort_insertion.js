function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    /* menampung nilai sementara jika index awal i lebih rendah
       akan terjadi swap jika lebih besar daripada nilai index didepannya */
    let currentValue = array[i];
    let j = i - 1;
    /* Jika  index j bukan 0 dan nilai yang berada di index j lebih besar dari pada 
       nilaisementara maka lakukan pertukaran nilai */
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = currentValue;
  }
  return array;
}

const arr = [29, 2, 14, 37, 15];
insertionSort(arr);
