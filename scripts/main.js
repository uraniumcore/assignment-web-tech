document.addEventListener('DOMContentLoaded', function () {
	let value = '';
	let prevValue = '';
	let output = '';
	let prevFunc = '';

	document.getElementById('ac').addEventListener('click', acFunction);
	document.getElementById('seven').addEventListener('click', sevenFunction);
	document.getElementById('eight').addEventListener('click', eightFunction);
	document.getElementById('nine').addEventListener('click', nineFunction);
	document.getElementById('four').addEventListener('click', fourFunction);
	document.getElementById('five').addEventListener('click', fiveFunction);
	document.getElementById('six').addEventListener('click', sixFunction);
	document.getElementById('one').addEventListener('click', oneFunction);
	document.getElementById('two').addEventListener('click', twoFunction);
	document.getElementById('three').addEventListener('click', threeFunction);
	document.getElementById('zero').addEventListener('click', zeroFunction);
	document.getElementById('equal').addEventListener('click', equalFunction);
	document.getElementById('add').addEventListener('click', addFunction);
	document.getElementById('subtract').addEventListener('click', subtractFunction);
	document.getElementById('point').addEventListener('click', pointFunction);
	document.getElementById('plusminus').addEventListener('click', plusminusFunction);
	document.getElementById('percent').addEventListener('click', percentFunction);
	document.getElementById('divide').addEventListener('click', divideFunction);
	document.getElementById('multiply').addEventListener('click', multiplyFunction);
	document.getElementById('rand').addEventListener('click', randFunction);


	function acFunction() {
		clearLine();
		clearVal();
	}

	function clearLine() {
		document.getElementById("myParagraph").textContent = "";
	}

	function clearVal() {
		value = '';
		prevValue = '';
		output = '';
		prevFunc = '';
	}

	function addFunction() {
		if(value) {
			if(prevFunc) {
				prevValue = String(Number(prevValue) + Number(value));
				value = '';
			} else {
				prevValue = value;
				value = '';
			}
			prevFunc = '+';
		}
		clearLine();
	}

	function subtractFunction() {
		if(value) {
			if(prevFunc) {
				prevValue = String(Number(prevValue) - Number(value));
				value = '';
			} else {
				prevValue = value;
				value = '';
			}
			prevFunc = '-';
		}
		clearLine();
	}

	function equalFunction() {
		if(prevFunc == '+') {
			console.log(value)
			document.getElementById("myParagraph").textContent = Number(value) + Number(prevValue);
			ans = String(Number(value) - Number(prevValue));
			clearVal();
			prevValue = ans;
		}
		if(prevFunc == '-') {
			console.log(value)
			document.getElementById("myParagraph").textContent = Number(value) - Number(prevValue);
			ans = String(Number(value) - Number(prevValue));
			clearVal();
			prevValue = ans;
		}
	}

	function zeroFunction() {
		value += '0';
		document.getElementById("myParagraph").textContent = value;
	}

	function oneFunction() {
		value += '1';
		document.getElementById("myParagraph").textContent = value;
	}

	function twoFunction() {
		value += '2';
		document.getElementById("myParagraph").textContent = value;
	}

	function threeFunction() {
		value += '3';
		document.getElementById("myParagraph").textContent = value;
	}

	function fourFunction() {
		value += '4';
		document.getElementById("myParagraph").textContent = value;
	}

	function fiveFunction() {
		value += '5';
		document.getElementById("myParagraph").textContent = value;
	}

	function sixFunction() {
		value += '6';
		document.getElementById("myParagraph").textContent = value;
	}


	function sevenFunction() {
		value += '7';
		document.getElementById("myParagraph").textContent = value;
	}

	function eightFunction() {
		value += '8';
		document.getElementById("myParagraph").textContent = value;
	}

	function nineFunction() {
		value += '9';
		document.getElementById("myParagraph").textContent = value;
	}

});



/*
*/