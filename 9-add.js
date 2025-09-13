function add(a, b){
	return a + b;
}

let number1 = parseInt(process.argv[2], 10);
let number2 = parseInt(process.argv[3], 10);
let result = add(number1, number2);
console.log(result);