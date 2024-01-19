const testing=()=>{
    let a=Math.random();
    // if(a<0.5) throw new Error("value of a less than 0.5");
    if(a<0.5) throw "value of a less than 0.5";
    else console.log(a);
}


try {
    testing()
} catch (error) {
    console.log(error);
}

// using try catch with promise

function Multiple_promise(){

	console.log("Started");

	let promise = new Promise((resolve, reject)=>{
		setTimeout(()=>{resolve("Fulfilled")}, Math.random()*2000+1000);
        let error = {messsage:"error testing", status: 404};
        reject(error);
	});

	console.log("Promise created");

	return promise;

}

async function display2(){
    try {
        let data = await Multiple_promise();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("process is done");
    }
}

display2();



