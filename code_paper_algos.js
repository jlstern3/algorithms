// 1. Print 1 to x
// Please complete the codes below to have the function print all the integers from 1 to x.  
// If x is negative, have it print/log "negative number' and have the function return false.
function print_to_x(x){
    if(x<0){
        console.log("negative number");
        return false;
    }
    else{
        for(var i = 1; i < x+1; i++){
            console.log(i);
        }
    }
}




// 2. PrintSum
// Please complete the code below to have the function print integers from 0 to 255 and with each integer print the sum so far.  
// Have the function return the final sum

// 3. PrintSumArray
// Please complete the code below to have the function return the sum of all the values in a given array

// 4. Analyze an array’s values and return the average of each respective array.

// 5. Create an array with all the odd integers between 1 and 255 (inclusive)

// 6. Square each value in a given array, returning that same array with changed values.