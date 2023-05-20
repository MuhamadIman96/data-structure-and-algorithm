function linearSearch(sortingArray, targetValue) {
  for (let i = 0; i < sortingArray.length; i++) {
    if (sortingArray[i] === targetValue) return i;
  }

  return -1;
}
