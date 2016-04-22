describe ('Merge Sort', function() {
  it('split function returns an array of two arrays', function() {
    var arr = [1,2,3];
    var splitArr = split(arr);
    expect( splitArr.length ).toEqual(2);
  });

  it('is able to merge two sorted arrays into one sorted array', function() {
    var arr1 = [1,2,3],
        arr2 = [6, 7, 8];
    expect( merge(arr1, arr2) ).toEqual([1,2,3,6,7,8]);
  });

  it('handles an empty array', function(){
      expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an array with 1 element', function() {
    expect( mergeSort([1]) ).toEqual( [1] );
  });
  //What's going on here? -> don't know
  // it ("doesn't run more than log2(array.length) times", function() {
  //   var arr = [10,9,8,7,6,5,4,3,2,1];
  //   spyOn(window, 'mergeSort');
  //   expect(mergeSort.calls.count()).toEqual(Math.ceil(Math.log2(arr.length)));
  // });

  it('Merge Sort returns a sorted array', function() {
    var arr = [10,9,8,7,6,5,4,3,2,1];
    spyOn(Array.prototype, 'sort');
    expect( mergeSort(arr) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
    expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

});

//returns empty array
//returns array with one element when given an array with one element
// returns sorted array
// make sure native array sort is never called
// maybe: make sure faster than bubble
// expect itself to be called rounded up value of Math.log2(arr.length)
//
