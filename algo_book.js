// 1. Create a function that returns an array with multiple of 3 up to 999 (pg 28)

// 2. Implement a function that accepts two non-negative integers as arguments 
//ex: lastDigitAtoB(a,b) should return the last digit of the first number (a) raised to an exponent of the second number (b)
//pg 43

// 3. Given an array and an additional value, insert this
// value at the beginning of the array. Do this
// without using any built-in array methods. (pg 52)

// 4. Given an array, index, and additional value, insert
// the value into the array at the given index. Do this
// without using built-in array methods. You can
// think of PushFront(arr,val) as equivalent to
// InsertAt(arr,0,val).

// 5. RemoveAt
// Given an array and an index into the array,
// remove and return the array value at that index.
// Do this without using any built-in array methods
// except pop(). Think of PopFront(arr) as
// equivalent to RemoveAt(arr,0).

// 6. PopFront
// Given an array, remove and return the value at
// the beginning of the array. Do this without using
// any built-in array methods except pop().
function popFront(arr){
    temp = arr[0];
    return temp;

}

// 7. Reverse Array
// Given a numerical array, reverse the order of the
// values. The reversed array should have the same
// length, with existing elements moved to other
// indices so that the order of elements is reversed.

// 8. Remove Negatives
// Implement a function removeNegatives() that
// accepts an array and removes any values that
// are less than zero.
// Second-level challenge: don’t use nested loops.

// 9. Skyline Heights
// You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3] would
// represent three buildings: first is actually below street level, second is seven stories high, and third is
// three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
// array containing heights of the buildings you can see, in order. Given [1,-1,7,3] return [1,7].

// 10. Binary Search
// Given a sorted array and a value, return whether
// that value is present in the array. Do not
// sequentially iterate the entire array. Instead,
// ‘divide and conquer’, taking advantage of the fact
// that the array is sorted.

// 11. Min Of Sorted-Rotated
// You will be given a numerical array that has first
// been sorted, then rotated by an unknown
// amount. Find and return the minimum value in
// that array

// 12. Rotate Array
// Implement rotateArr(arr, shiftBy) that
// accepts array and offset. Shift arr’s values to the
// right by that amount. ‘Wrap-around’ any values
// that shift off array’s end to the other side, so that
// no data is lost. Operate in-place: given
// ([1,2,3],1), change the array to [3,1,2].
// Optionally, add these advanced features:
// a) allow a negative shiftBy (shift left, not right),
// b) minimize memory usage. With only a few local
// variables (not an array), handle arrays and
// shiftBys in the millions,
// c) minimize how many touches of each element.

// 13. Second-to-Last
// Return the second-to-last element of an array.

// 14. Second-Largest
// Return the second-largest element of an array.

// 15. Nth-to-Last
// Return the element that is N-from-array’s-end. (pg 55)

// 16. Nth-Largest
// Given an array, return the Nth-largest element:
// there should be (N - 1) elements that are larger

// 17. arrConcat
// Replicate JavaScript’s concat(). Create a
// standalone function that accepts two arrays.
// Return a new array containing the first array’s
// elements, followed by the second array’s
// elements. Do not alter the original arrays. Ex.:
// arrConcat( ['a','b'], [1,2] ) should
// return ['a','b',1,2]. (pg 56)

// 18. Shuffle
// Recreate the shuffle()built into JavaScript, to
// efficiently shuffle a given array’s values. Do you
// need to return anything from your function?

// 19. Faster Factorial
// Remember iFactorial from last chapter? Take
// that implementation and use a time-space
// tradeoff to accelerate the average running time.
// Recall that iFactorial(num) returns the product of
// positive integers from 1 to the given num. For
// example: fact(1) = 1, fact(2) = 2, fact(3)
// = 6. For these purposes, fact(0) = 1.

// 20. Smarter Sum
// Use a time-space tradeoff to accelerate the
// average running time of an iSigma(num) function
// that returns the sum of all positive integers from 1
// to num. Recall: sig(1) = 1, sig(2) = 3, sig(3) = 6,
// sig(4) = 10.

// 21. Fabulous Fibonacci
// Use a time-space tradeoff to accelerate the
// average running time of an iFibonacci(num)
// function that returns the ‘num’th number in the
// Fibonacci sequence. Recall: fib(0) = 0, fib(1) = 1,
// fib(2) = 1, fib(3) = 2.

// 22. Tricky Tribonacci
// Why stop with fibonacci? Create a function to
// retrieve a “tribonacci” number, from the sum of
// the previous 3. Tribonaccis are {0, 0, 1, 1, 2, 4, 7,
// 13, 24, 44, 81, ...}. Again, use a time-space
// tradeoff to make this fast. (pg 57)