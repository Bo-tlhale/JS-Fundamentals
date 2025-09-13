let line = "C is fun";
let argument = process.argv.slice(2);
let number = parseInt(argument, 10);

if(argument.length === 0){
	console.log("Missing number of occurences");
}
else{
	let count = 0;
	while(count < number){
		console.log(line);
		count++;
	}
}

