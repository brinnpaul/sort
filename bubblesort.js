function bubbleSort(arr) {

  var swapped = true;
  this.count = 0;

  // function swap() {};

  while(swapped) {
    swapped = false;
    for (var i=0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1])  {
        var swap = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = swap;
        swapped = true;
        this.count++
      }
    }
  }
  return arr;
}

bubbleSort.prototype.timesLooped = function() {
  return this.count;
}
