let argument = process.argv.slice(2);
if(argument.length === 0){
	console.log("undefined is undefined");
}
else if(argument.length === 1){
	console.log(argument + " is undefined");
}
else{
	console.log(process.argv[2] + " is " + process.argv[3]);
}