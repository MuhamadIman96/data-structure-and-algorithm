function mergeSort(array) {
  if (array.length <= 1) return array;

  const middleSide = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middleSide);
  const rightSide = array.slice(middleSide);

  const leftSort = mergeSort(leftSide);
  const rightSort = mergeSort(rightSide);

  return mergeHelper(leftSort, rightSort);
}

function mergeHelper(leftArray, rightArray) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    resultArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    resultArray.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return resultArray;
}

const arr = [32, 21, 12, 65, 2, 31, 1, 90, 91];
console.log(mergeSort(arr));
