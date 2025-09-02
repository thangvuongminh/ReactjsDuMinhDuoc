// callback Function

// điều kiện
// là 1 function
// là tham số function khác
// đc gọi trong function đó
function callback(a, b) {
    return a * b;
}
function check(result) {
    const ans = callback(4, 5);
    console.log(ans);
}
//check(result);
// arrow function with callback
const callback2 = (a) => console.log(`Suc vat ${a}`);
const test = (callback2) => callback2("Hello");
test(callback2);

/// curring function :  tức là function trả về function
// function curringFunction(num) {
//     return function (fuc) {
//         let rest = [];
//         for (let i = 0; i < num; ++i) {
//             if (fuc(i)) rest.push(i);
//         }
//         return rest;
//     };
// }
// const ans = curringFunction(5)(function (num) {
//     return num % 2 == 0;
// });
// console.log(ans);

// function curringFunction(num) {
//     return function () {
//         let rest = [];
//         for (let i = 0; i < num; ++i) {
//             rest.push(i);
//         }
//         return rest;
//     };
// }
// const ans = curringFunction(5)();
// console.log(ans);

// ##########################
// arrow Function with curring function
const curring2 = (num) => (func) => {
    const ans = [];
    for (let i = 0; i < num; ++i) {
        ans.push(i);
    }
    return ans;
};
const printt = curring2(10)();
console.log(printt);
