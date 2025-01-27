'use strict';// we can use use strict in every block first line to use it 
// to make some strict process like declaration of variable used keyword like 
// var , let , const not like this 'userName = Meezan'

//  var can be redeclared / global & locally hoisted 
var userName = 'Meezan'

//  let can't be redeclared but can be reassigned / block hoisted
let age;
age = 20
console.log(age)

//  let can't be redeclared but can be reassigned / block hoisted
const address = 'India';
console.log(address)

const arr = ['hobbies'];
arr.push('gaming');
// Output -> ['hobbies' , 'gaming' ] even it's a constant but we can change it's value 
// due to preference data type but we cannot reassign them.

const arr1 = arr;
arr.push('development');
// arr = ['hobbies' , 'gaming' , 'development']
// arr1 = ['hobbies' , 'gaming' , 'development'] it's same as arr because it's 
// copies a reference to the arr and will have the same value as arr