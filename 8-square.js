let line = "";
let shape = "X";
let number = parseInt(process.argv.slice(2), 10);

if(isNaN(number)){
	console.log("Missing size");
}
else{
	for (let i = 0; i < number; i++) {
		let line = ""; 
		for (let j = 0; j < number; j++) {
		  line += shape;
		}
		console.log(line);
    }
}