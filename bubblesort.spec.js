describe('Bubble Sort', function(){

    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with 1 element', function() {
      expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('Bubble Sort returns a sorted array', function() {
      var arr = [10,9,8,7,6,5,4,3,2,1];
      spyOn(Array.prototype, 'sort');
      expect( bubbleSort(arr) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
      expect(Array.prototype.sort.calls.count()).toEqual(0);
    });
});

// describe ('Merge Sort', function() {
//   it('handles an empty array', function(){
//       expect( mergeSort([]) ).toEqual( [] );
//   });
//
//   it('handles an array with 1 element', function() {
//     expect( mergeSort([1]) ).toEqual( [1] );
//   });
//
//   it ("doesn't run more than log2(array.length) times", function() {
//     var arr = [10,9,8,7,6,5,4,3,2,1];
//     spyOn(window, 'mergeSort').and.callThrough(arr);
//     expect(mergeSort.calls.count()).toEqual(Math.ceil(Math.log2(arr.length)));
//   });
//   it('Merge Sort returns a sorted array', function() {
//     var arr = [10,9,8,7,6,5,4,3,2,1];
//     spyOn(Array.prototype, 'sort');
//     expect( bubbleSort(arr) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
//     expect(Array.prototype.sort.calls.count()).toEqual(0);
//   });
//
// });
