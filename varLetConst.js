/*ECMAScript
Var vs let vs const
The var keyword declares function-scoped variables.
Let can be used to declare variables scoped at block{} level which means the new scope is created between a pair of curly brackets {}.*/

//var
for (var x = 0;  x<10; x++) {
//code
} console.log(x);
/*would return 10 since x is now a declared variable with a value*/

//let
for (let x=0; x<10; x++) {
//code
} console.log(x);
/*return undefined
Would return undefined since x is only declared within the for loop; 
*/

//const
const campus = "Davis";
Campus = "Trafalgar";
//would return an error

/*however, if part of an array or object property, changes can be made*/
const student = {
	name:"Joe Doe",
	campus: "Davis",
	id: 991000555
};

student.campus = "Trafalgar";

const COLORS = ["red", "blue"];
CLOURS[0] = "green";
