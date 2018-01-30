"use strict";

let word;
// word = prompt("What would you like to see backwards?");
// console.log(reverseString(word));

// word = prompt("What phrase would you like me to capitilize the letter of each word?");
// console.log(capitalizeEachWord(word));

// word = prompt("Enter something you think might be a palindrome:");
// console.log(palindromeTest(word));

// primeNumbers(1, 100000);

// word = prompt("Where would you like your sequence to start?");
// fibonacci(word);

// word = prompt("What number do you think is happy?");
// happyNumber(word);

// word = prompt("what string do you need compressed?");
// compressString(word);

function reverseString(word){
	let reverseWord = "";
	for(let i = word.length; i >= 0; i--){
		reverseWord += word.charAt(i);
	}
	return reverseWord;
}

function capitalizeEachWord(string){
	let newString = "";
	for(let i = 0; i < string.length; i++){
		if (i === 0 || string.charAt(i-1) === " "){
			newString += string.charAt(i).toUpperCase();
		}else{
			newString += string.charAt(i);
		}
	}
	return newString;
}

function palindromeTest(word){
	let wordBackwards = reverseString(word).toLowerCase();
	if (word === wordBackwards){
		return `Hurray, ${word} is indeed a palindrome!!!`;
	}else{
		return `Sorry, ${word} is not a palindrome.`;
	}
}

function primeNumbers(numberOne, numberTwo){
	let primeNumbers = [];
	for(let i = numberOne; i <= numberTwo; i++){
		let factors = 0;
		for(let j = Math.floor(i/2); j > 1; j--){
			if(factors > 0) break;
			else if (i % j === 0) factors++;
		}
		if (factors === 0) {
			primeNumbers.push(i);
		}
	}
	console.log(primeNumbers.toString());
}

function fibonacci(num1){
	let number = [parseInt(num1)];
	number[1] = number[0];
	for (let i = 1; i < 10; i++){
		number.push(number[i-1] + number[i]);
	}
	console.log(number.toString());
}

function happyNumber(happyNumber){
	let number = happyNumber;
	do{
		let numSplit = number.split('');
		let num = 0;
		for(let i = 0; i < numSplit.length; i++){
			numSplit[i] = parseInt(numSplit[i]);
			num += Math.pow(numSplit[i], 2);
		}
		number = num.toString();
		console.log(numSplit.toString());
	}while(number !== "1" && number !== happyNumber);
	if(number === "1"){
		console.log(`${happyNumber} is a happy number.`);
	}else {
		console.log(`${happyNumber} is not a happy number.`);
	}
}

function compressString(string){
	let compressedString = [];
	let currentLetter = string.charAt(0);
	let counter = 0;
	for(let i = 0; i <= string.length; i++){
		if(currentLetter === string.charAt(i)){
			counter++;
		} else if (counter > 1){
			compressedString.push(counter);
			compressedString.push(currentLetter);
			counter = 1;
		} else {
			compressedString.push(currentLetter);
		}
		currentLetter = string.charAt(i);
	}
	console.log(compressedString.join(''));
}

