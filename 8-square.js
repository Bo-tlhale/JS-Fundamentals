let shape = "X";
let line = "";
let argument = process.argv.slice(2);
let number = parseInt(argument, 10);

if(isNaN(number)){
	console.log("Missing size");
}
else{
	let count = 0;
	for(let i=0; i<number; i++){
		line += shape;
	}
	while(count < number){
		console.log(line);
		count++;
	}
}