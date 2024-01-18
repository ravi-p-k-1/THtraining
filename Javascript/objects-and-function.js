var person = {
  fname: "ravi",
  lname: "kakadia",
  joinName: function (city, country) {
    console.log("my comment",this.fname + " " + this.lname);
    return this.fname + " " + this.lname + " " + city +  " " + country;
  },
  cars: [
    { name: "Audi", model: [1, 2, 3] },
    { name: "BMW", model: [1] },
    { name: "Mercedes", model: [1, 2] },
  ],
//   get getFirstName() {
//     return this.fname;
//   },
  set setFirstName(name){
    this.fname = name;
  },
};

// console.log(person["fname"]);
// console.log(person.joinName(person));

person.nation = "India";

delete person.nation;

// console.log(person.nation);

// for (let p in person) {
//   console.log(p);
//   console.log(person[p]);
// }

// console.log(Object.values(person));
// console.log(Object.keys(person));

// console.log(JSON.stringify(person));

// json stringify will not display functions.
// to display functions

// person.joinName = person.joinName.toString();

// console.log(JSON.stringify(person));

// console.log(JSON.stringify(person.cars));

// getter and setters in objects

// another way of adding the property to the Objects.
Object.defineProperty(person, "getFirstName", {
    get: function () {
        return this.fname;
    }
});

// person.setFirstName="ravi"
// console.log(person.getFirstName);

function Person(first, last){
    this.fname = first;
    this.lname = last;
};

Person.prototype.nation = "India";

const obj1 = new Person("ravij", "Bharadwaj");


for(let o in obj1){
    console.log(o, obj1[o]);
    // console.log(o);
}

Numbers={};

Numbers[Symbol.iterator]=function(){
    let n=0;
    done=false;
    return {
        next: ()=>{
            n+=10;
            if(n===100) return {done:true};
            return {value:n, done:done};
        }
    }
}

const temp1 = Numbers[Symbol.iterator]();

// for(let t of Numbers){
//     console.log(t);
// }

// SETS
const letters = new Set(['a','b','c']);
letters.add('d')
letters.add(1);
letters.add(1);
letters.delete(1);
console.log(letters.has('d'));
console.log(letters.values());

letters.forEach((value, value2, set)=>{
    console.log(set);
});


// self invoking function
(async()=>{
  // console.log("hello world");
})();

// If you don't pass a arguement in function parameter will take default undefined.
// to avoid this and assign default value to the function parameters we can do like below.

const hello=(text="helloworld")=>{
  console.log(text);
};

hello();
hello("hello");

// REST operator

const sum=(...args)=>{
  let sum=0;
  for(let arg of args){
    sum+=arg;
  }
  console.log(sum);
};

// sum(1,2,4);

// accessing arguments when function parameters are less than the number of arguments provided.
// Use the arguments object only when writing function normally do not use it with arrow function or a variable.


printNumbers(2,3,4,1,8,7,9);

function printNumbers(){
  for (let i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
  }
}

// Call method in javascript

var person1={
  fname: "sahaj",
  lname: "patel"
};

console.log(person.joinName.call(person1, "ahmedabad", "india"));

// Apply method in javascript
// it is similar to Call but the difference is that it take argument in form of array.

console.log(person.joinName.apply(person1, ["surat", "india"]));

// Bind method in javascript
// almost similar to Call difference is that it is used with callback functions because callback loses 'this' value

let jname=person.joinName.bind(person1);
// setTimeout(jname, 1000);

// Javascript Closure
// this method helps in providing private variables that cannot be accesed by any other method.

const add = (function(){
  let counter=0;
  return function(){
    counter+=1; 
    return counter;
  }
})();

console.log(add());
console.log(add());

