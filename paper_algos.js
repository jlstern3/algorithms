1.
function multiply(x,y){
    console.log(x);
    console.log(y);
}
var b = multiply(2,3);
console.log(b);


2. 
function multiply(x,y){
    return x*y;
}
var b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));


3. 
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
    i = i + 3; 
    console.log(i);
}


4. 
var x=15;
console.log(x);
function foo(){
    var x=10;
    console.log(x);
}
console.log(x);
foo();
console.log(x);


5. 
for(var i=0; i<15; i+=2){
    console.log(i);
}


5. 
for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){      
        console.log(i*j);
    }
} 

6. 
function foo(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<x; j++){        
            console.log(i*j);
        } 
    }
}
var z = foo(3,3);
console.log(z);

7. 
function foo(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){        
            console.log(i*j);
        } 
    }
    return x*y;
}
var z = foo(3,5);
console.log(z);


8. 
function foo(x,y){
    for(var i=0; i<x; i++){
        for(var j=0; j<y; j++){        
            console.log(i*j);
        } 
    }
    return x*y;;
}
var z = foo(3,5);
console.log(z);
