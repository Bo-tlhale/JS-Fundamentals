let argument = process.argv[2];

let number = parseInt(argument, 10);
if(Number.isNaN(number)){
	console.log("Not a number");
}
else{
	console.log(number);
}
