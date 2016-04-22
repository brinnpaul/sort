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
        count++;
      }
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  // function split(arr) {
  //   var middle = Math.floor(arr.length/2);
  //   var left = arr.slice(0,middle);
  //   var right = arr.slice(middle);
  //   return [left, right];
  // }
  var splitArr = split(arr);
  return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
}

function split(arr) {
  var middle = Math.floor(arr.length/2);
  var left = arr.slice(0,middle);
  var right = arr.slice(middle);
  return [left, right];
}

function merge(left, right) {
  var result = [];
  var i = 0;
  var j = 0;
  while (result.length < right.length+left.length) {
    if (left[i] === undefined){
      result.push(right[j]);
      j++;
    } else if (right[j] === undefined){
      result.push(left[i]);
      i++;
    } else if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result;
}

bubbleSort.prototype.timesLooped = function() {
  return this.count;
}

function timeData(userInput) {
  var results = [];
  var nativeArr = [];
  var bubbleArr = [];
  var mergeArr = [];

  var max = userInput || 14;

  for (var i = 9; i <= max; i++) {
    var numItems = Math.pow(2, i);
    var nativeTestArray = [];

    for(var j = 0; j < numItems; j++) {
      var rand = Math.floor(Math.random() * numItems);
      nativeTestArray.push(rand);
    }

    var bTestArray = nativeTestArray.slice(0);
    var mTestArray = nativeTestArray.slice(0);

    console.time(numItems + ' native');
    var nativeStart = new Date().getTime();
    nativeTestArray.sort(function(a, b){ return a - b; });
    var nativeEnd = new Date().getTime();
    console.timeEnd(numItems + ' native');

    nativeArr.push([numItems, nativeEnd-nativeStart]);

    console.time(numItems + ' bubble');
    var bubbleStart = new Date().getTime();
    bubbleSort(bTestArray);
    var bubbleEnd = new Date().getTime();
    console.timeEnd(numItems + ' bubble');

    bubbleArr.push([numItems, bubbleEnd-bubbleStart]);

    console.time(numItems + ' merge');
    var mergeStart = new Date().getTime();
    mergeSort(mTestArray);
    var mergeEnd = new Date().getTime();
    console.timeEnd(numItems + ' merge');

    mergeArr.push([numItems, mergeEnd-mergeStart]);
  }
  results.push(nativeArr);
  results.push(bubbleArr);
  results.push(mergeArr);
  return results;
}
