// 1. Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanY(arr, Y){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if (arr[i]>Y){
            count += 1;
        }
    }
    console.log(count);
}

// 2. Given an array, print the max, min and average values for that array.
function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i = 1; i<arr.length; i++){
        sum+=arr[i];
        if(arr[i]>max){
            max = arr[i];
        }
        if (arr[i]<min){
            min = arr[i];
        }
    }
    var avg = sum/arr.length;
    console.log(max, min, avg);
}


// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’. 
function negativeDojo(arr){
    for (var i = 0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}

// 4. Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  
// For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].


// 5. Return the given array, after setting any negative values to zero.  
// For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function removeNegatives(arr){
    for (var i = 0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}

// 6. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  
// For example moveForward( [1,2,3]) should return [2,3,0].


// 7. Given an array, return an array with values in a reversed order.  
// For example, returnReversed([1,2,3]) should return [3,2,1].

// 8. Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  
// For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].