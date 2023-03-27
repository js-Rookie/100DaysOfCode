var firstName = 'matilda';//creates a property o the window object

const jonas = {
	firstName: 'Jonas',
	year: 1991,
	calcAge: function() {
		// console.log(this);
		console.log(2037-this.year);
		
		//Solution-1


		// const self = this; //self or that
		// const isMillenial = function(){
		// 	console.log(self);
		// 	//console.log(this.year >= 1981 && this.year <=1996);
		// 	console.log(self.year >= 1981 && self.year <=1996);
		// }

		//Solution-2

		const isMillenial = ()=>{
			console.log(this);
			//console.log(this.year >= 1981 && this.year <=1996);
			console.log(this.year >= 1981 && this.year <=1996);
		}
		isMillenial();
	},
	greet: () => console.log(`Hey ${this.firstName}`), //Here this indicates window object That is, window.firstname = undefined;
	//never use arrow function as a method
};

jonas.greet();
jonas.calcAge();


// Arguments Keyword
const addExp = function(a,b){
	console.log(arguments);
	return a+b;
}

addExp(2,5);
addExp(2,5,8,9);

const addArrow = (a,b)=>{
	console.log(arguments);
	return a+b;
}

addArrow(2,5,8,9);