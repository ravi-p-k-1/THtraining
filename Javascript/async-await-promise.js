// The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise.

// The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.


(async function(){
    let promise = new Promise(function(resolve){
        setTimeout(()=>resolve("this is me"),1000);
    });
    let value = await promise;
    console.log(value);
})();

// (async function(){
//     console.log(await Promise.resolve("this is me"));
// })();

for (let i = 0; i < 20; i++) {
    console.log("blahblah");
}



// doing it with multiple promises

function asynchronous_operational_method() {
	let first_promise = 
		new Promise((resolve, reject) => resolve("Hello"));
	let second_promise = 
		new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(" GeeksforGeeks..");
		}, 2000);
	});
	let combined_promise = 
		Promise.all([first_promise, second_promise]);
		// Promise.allSettled([first_promise, second_promise]);
		// Promise.any([first_promise, second_promise]);
		// Promise.race([first_promise, second_promise]);
	return combined_promise;
}

async function display() {
	let data = await asynchronous_operational_method();
	console.log(data);
}

display();


// simple example of displaying promise status 

function Multiple_promise(){

	console.log("Started");

	let promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{resolve("Fulfilled")}, Math.random()*2000+1000);
	});

	console.log("Promise created");

	return promise;

}

async function display2(){
	let data = await Multiple_promise();
	console.log(data);
}

display2();







