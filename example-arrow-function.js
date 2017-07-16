var names = ['andrew','julie', 'jen'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach(name =>console.log(name));

// var returnMe = (name) => name +'!';
// console.log(returnMe('Andrew'));
//
// var person = {
//   name : 'Andrew',
//   greet : function(){
//     names.forEach((name)=>
//       console.log(this.name + ' says hi to '+ name)
//     )
//   }
// };
//
// person.greet();

function add(a,b){
  return a+b
};
console.log(add(4,5));

//addStatement
var addExpression = (a,b) => a+b;
//addExpression

var addStatement = (a,b)=>{return (a+b);};

console.log('addStatement', addStatement(4,6));
console.log('addExpression', addExpression(9,5));

addExpression()
