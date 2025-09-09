let ans = 0;
const tokens = [];

function tokenize(str) {
	let token = '';
	let prev = "unk";
	str += ' ';

	let j = 0;
	for(let i in str) {
		if(str[i] == ' ') {
			if(token) tokens.push(token);
			token = '';
			prev = "unk";
		}
		else if(Number(str[i]) == str[i]) { 
			if(prev == "number" || prev == "unk") {
				token += str[i];
				prev = "number";
			} else {
				if(token) tokens.push(token);
				prev = "unk";
				token = '';
			}
		}
		else {
			if(prev == "number" || prev == "unk") {
				if(token) tokens.push(token);
				tokens.push(str[i]);
				prev = "unk";
				token = '';
			}
		}
	}

	console.log(tokens);
	mathing();
}

function mathing() {
	let ans = Number(tokens[0]); // start fresh
	for (let i = 1; i < tokens.length; i++) {
		if (tokens[i] == "+") {
			ans = Number(ans) + Number(tokens[i + 1]);
		}
		if (tokens[i] == "-") {
			ans = Number(ans) - Number(tokens[i + 1]);
		}
		if (tokens[i] == "*") {
			ans = Number(ans) * Number(tokens[i + 1]);
		}
		if (tokens[i] == "/") {
			ans = Number(ans) / Number(tokens[i + 1]);
		}
	}
	console.log(ans);
}

const readline = require('readline');

// Create an interface for reading input and writing output
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Prompt the user for input
rl.question('math: ', (answer) => {
	// Callback function executed when the user provides input and presses Enter

	tokenize(answer);

	// Close the readline interface
	rl.close();
});
