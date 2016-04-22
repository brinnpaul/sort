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
  var splitArr = split(arr)
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
