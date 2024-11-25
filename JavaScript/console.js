var array = [2, 3, 4, 4, 'Virat'];  
console.log("The given array is:", array);  
var set = new Set();  
array.reduce((_, item)=> set.add(item),null);  
set.forEach(item => {  
        console.log("the converted array to set is:", item);  
    });  
