const user = {
    name: "AnTo",
    age: 20,
    sex: "female",
};

// destruct with object
// ------------------------------------------------------------------------
// destruct  not change variable
const { name, age, sex } = user;

// destruct change variable

const { name: nameUser, age: ageUser, sex: sexUser } = user;

// *********************************

// destruct with array
//-------------------------------------------------------
const list = [
    1,
    function (a, b) {
        return a + b;
    },
    "Test",
];

// destruct  not change variable
const [num, sum, message] = list;

//#######################################
// Spread syntax

// shallow copy
const cloneUser = { ...user }; // diffirent tham chieu
const cloneUser2 = user; // cung tham chieu

// => cloneUser  === user : false
// => cloneUser2  === user : true

//#######################################

// Rest parameter
const handle = (a, b, ...c) => {
    return c;
};
const value1 = handle(1, 2, 3, 4, 5, 6);
console.log(value1);
