let line = "C is fun";
let argument = process.argv[2];

if(typeof argument !== "number"){
	console.log("Missing number of occurences");
}

let count = 0;
while(count < argument){
	console.log(line);
	count++;
}