// Array methods

// let is block scoped
// var is function scoped or global scoped
// const is block scoped

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];

let size = fruits.length;

// console.log(size);

// console.log(fruits[2]);

// console.log(fruits.toString());

// console.log(fruits.join(" blah "));

var fruit = fruits.pop();

// console.log(fruit);

fruits.push("dragon fruit");

fruits.shift();

fruits.unshift(fruit);

fruits[fruits.length]="Banana";

// delete fruits[1];

let gender = ["male", "female"];

gender = fruits.concat(gender);

// gender.copyWithin(3,0);
// gender.copyWithin(2,0,2);

gender = [[1,2],[3,4, [8,9]],[5,6]];
gender= gender.flat();

gender.splice(2, 0, "Lemon", "Kiwi");

const citrus = fruits.slice(1);

console.log(fruits);

// Array Search

console.log(fruits.indexOf("Apple")+1);

console.log(fruits.includes("dragon fruit"));

const numbers = [1,5,3,4,2,6,1,8,9,0];

let first = numbers.find((value, index, array)=>{
    return index===1;
})

// similarly findLast() but it will start from the end.

first =  numbers.findIndex((value, index, array)=>{
    return value===2;
})

// similarly findLastIndex() but it will start from the end.

fruits.sort();

// toSorted() keeps the array unchanged but creates a new array.

fruits.reverse();

// toReveresed() keeps the array unchanged but creates a new array.

numbers.sort();

// sorting function is only for strings and does not work for numbers for this you have to apply a compare function in sorting.

numbers.sort((a,b)=>{
    return a-b;
});

// above code for ascending order.

numbers.sort((a,b)=>{
    return b-a;
});

// above code for descending order.

// to sort in random order we will return 0.5-Math.random();

numbers.sort((a,b)=>{
    return 0.5-Math.random();
});

// to find max and min in array you an do like below. or by sorting and finding first and last element.
console.log(Math.min(...numbers), Math.max(...numbers));

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

// sorting object arrays
// if based on numbers
cars.sort((a, b)=>{
    return a.year-b.year; 
});

cars.sort((a,b)=>{
    let x= a.type.toLowerCase();
    let y= b.type.toLowerCase();
    if(x>y) return 1;
    if(x<y) return -1;
    return 0;
});

console.log(cars);

let temp = 0;

// foreach function

numbers.forEach((value, index, array)=>{
    temp+=value;
    return;
});

// map creates a new array

let numbers2 = numbers.map((value)=>{
    if(value==1){
        return [22,22];
    }
    else return value;
});

// flatMap flattens the resulting array produced by 1 level, otherwise same as map;

numbers2 = numbers.flatMap((value)=>{
    if(value==1){
        return [22,22];
    }
    else return value;
});

// filter function creates a new array with elements that passes a test.

numbers2 = numbers.filter((value)=>{
    return value>3;
});

// reduce function runs on each array element but returns only one single value, 
// we can also give intital value to it 
// like in the below function the inital value is given 100 right after the callback function as a parameter;

numbers2 = numbers.reduce((pvalue, value, index, array)=>{
    return pvalue + value;
}, 100);

// reduceRight() similar to the reduce function but runs from right to left.

// every function checks whether all elements pass a test.
numbers2 = numbers.every((value)=>{
    return value<-1;
})

// some function checks whether some values pass a test.

numbers2 = numbers.some((value)=>{
    return value===1;
})

// from function creates an array out of a object with length property.

// The keys() method returns an Array Iterator object with the keys of an array.

// The entries() method returns an Array Iterator object with key/value pairs:
// like
// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// spread operator using ... I already know ;)

// with() method as a safe way to update elements in an array without altering the original array.

console.log(numbers2);




