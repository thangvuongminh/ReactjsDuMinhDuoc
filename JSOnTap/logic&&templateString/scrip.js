//  &&
const a = true;
const b = null; // undefined,'',0
const c = "hi";
console.log(a && b && c); // => OutPut: Null, undefined,'',0
console.log(a && c); // ==> OutPut: hi

//**************************

// ||    (false,Null, undefined,'',0) => false
console.log(a || b || c); // => OutPut:  a true  => true;
const d = null;
console.log(d || b || c); // => OutPut: Hi
// run until meet  value not (0,null,undefined.'',false);

// if not meet value true  output the last value
console.log(d || b || d); // => OutPut:  Null;

// ****************

// check if exsist value, for example:
user = {
    name: "Anto",
    age: 20,
    gender: "female",
};
console.log(user.hi); // => OutPut: undefined
// console.log(user.hi.name);  error

// resolve way normal

//if (user.hi) console.log(user.hi.name);

// new resolve
console.log(user.hi?.name);

// **************************

// likely  || but  ??  action only with  undefined,null
const k = undefined;
const h = null;
console.log(k ?? h); // output => null
const g = "Hello";
console.log(k ?? g ?? h); // output => Hello

// *****************************88

// template String
const str = `employ
not
attend`; // => ok

// const str2='employ
// not
// ok'     // => error
