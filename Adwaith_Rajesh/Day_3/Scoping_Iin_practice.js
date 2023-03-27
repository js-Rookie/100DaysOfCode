// ==============Scoping in Practice======

function calcAge(birthYear){
	const age = 2023-birthYear;
	function printAge() {
		 let output = `${firstName} , You are ${age}, born in ${birthYear}`;
		 	console.log(output);
		 	if(birthYear >= 1981 && birthYear <= 1996){
		 		var millenial = true;
		 		const firstName= 'Adwaith'; //Current Scope & Js does not bother for varible lookup
		 		const str = `Oh , you are a millenial, ${firstName}`;
		 		console.log(str);
		 		function add(a,b){
		 			return a+b; // exmaples for blocked scope functions
		 		}
		 		const output = 'New Output'; //Completely new  varible bound to this function scope
		 	}
		 	console.log(millenial);
		 	//console.log(output);
		 	//console.log(add(2,3));
		 	//console.log(str); Will not work because of the block scope
	}
	printAge();
	return age;
}

const firstName = 'Jonas';//global scope
calcAge(1995);