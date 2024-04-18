let a = 10.20;
let b = "50"
console.log(a);
console.log(b); 
console.log(Number(b))  //converting string to number using Number()
console.log(Number("hello")+22) //not a number
console.log(Number(true))

//Numbers Methods
let k="20.09ss"
let s = "aaa20.64"
console.log(Number.isInteger(29.34));   //false because it is not an integer
console.log(Number.parseFloat(s));   //20.64 //parsing float value from the given string 
console.log(Number.parseInt(k))
console.log(Number.isFinite(Infinity));    //false because it's Infiniter

let r = "aa43op.56a"
console.log(Number.parseInt(r));


//Using toFixed()
let myVar = "423.098888";
console.log(Number.parseFloat(myVar).toFixed(2));

//Using toString
let z = 42.0999
console.log(z.toString())

//chaining
console.log((5 + 7).toString().length)


//NaN - Two Types : Number.isNaN() , isNaN()
console.log(Number.isNaN(29));         //false because it's a number
console.log(Number.isNaN("hello"));   //false
console.log(isNaN("hello"));  //true


