/*for…of Loop
Allows iteration over arrays or strings (any 
reiterable object).

Does not work with actual objects.
The code inside the loop is element of the array or string.*/

//for…of
let campuses = {
	"Davis",
	"Trafalgar",
	"HMC"};
For (let x of campuses) {
	console.log(x);}
/*Notice the difference in the output code as compared to a regular for loop*/

let college = "Sheridan";

for (let letter of college) {
	console.log(letter);}
//Regular for loop
for (var x=0; x<college.length; x++ { 
	console.log(college[x]);}
