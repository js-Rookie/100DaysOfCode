
// ======================Hoisting and TDZ in practice ====================

console.log(me);
console.log(job);
console.log(year);

var me = 'jonas';
let job = 'teacher';
const year  = 1991;

functions 
console.log(addDecl(2,3));
console.log(addExp(2,3)); //Cannot excess function before initialization
console.log(addArrow(2,3));//Cannot excess function before initialization

function addDecl(a,b) {
	return a+b ;
}

const addExp = function(a,b){
	a+b;
}
const addArrow = (a,b) => {
	a+b;
}

var addArrow = (a,b) => { //Here the output will state that it is not a function because . During hoisting
	//the function will be set to undefined.That is, undefined(2,3);
	a+b;
}


Example

if(!numProducts) deleteShoppingCart(); //numproducts = undefined;

var numProducts = 10;

function deleteShoppingCart() {
	console.log(`All Products Deleted`);
}

var x= 1; //it will create properties on the window
let y =2; //They(let & const) dont
const z =3; 

console.log(x===window.x);