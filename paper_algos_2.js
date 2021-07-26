1. 
function foo(x,y){
    return 5;
}
console.log(foo(5,5))

2. 
function foo(x,y){
    var z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
var b = foo(2,2)
console.log(b);
console.log(foo(6,8));

3. 
function foo(x){
    var z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
var y = foo(2);
y.push(5);
console.log(y);

4. 
function foo(x){
    if(x[0] <x [1]) {
        return true;
    }
    else {
        return false;
    }
}
var b = foo([2,3,4,5])
console.log(b);


5. 
function foo(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 0){
            x[i] = "Coding"
        }
    }
}
console.log(foo([1,2,3,4]))

6. 
function foo(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 5){
            x[i] = "Coding"
        }
        else if(x[i] < 0){
            x[i] = "Dojo"
        }
    }
}
console.log(foo([5,7,-1,4]))

7. 
function foo(x){
    if(x[0] > x[1]) {
        return x[1];
    }
    return 10;
}
var b = foo([5,10])
console.log(b);

8. 
function sum(x){
    var sum = 0;
    for(var i=0; i<x.length; i++){
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}
