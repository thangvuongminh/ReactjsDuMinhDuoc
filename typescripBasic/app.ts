// với kiểu dữ liệu nguyên thủy thì
// khởi tạo không cần  phải có giá trị cho nó:

// for example:
let car = "Toyota";
// lúc này car là kiểu string nếu là kiểu khác sẽ lỗi
//  car =100 => error

// ko cần khởi tạo và chỉ định kiểu dữ liệu cho nó
let test: number;
test = 100;
// test =" "  => error
let isLoading: boolean;
// isLoading  lúc này chỉ nhận 2 giá trị  true or false
isLoading = true; // ok
// isLoading = 1 // => error

//   đối với kiểu null thì gan bat ky gia tri nao cung khong duoc
let testNull: null;
// testAny = 1;
// testAny = " ";

// => ko the gan duoc voi kieu null

// khai báo với kiểu any
let testAny: any;
testAny = 1;
testAny = " ";

// với kiểu tham chiếu như object array function class   thi phai gan cho no du lieu
// for example
let obj = {}; // đúng
// let obj // sai
// obj.address = "da nang"  lỗi phải khai báo trước
let obj2 = {
    address: String,
};
// obj2.address = "Da Nang" cũng không được phải có constructor ban đầu trước khi định dạng dữ liệu

// ví dụ đúng
let obj3: {
    address: String;
    color: String;
};
//  obj3.address ="Da nang"  sai vì obj phải gán giá trị cho nó
let obj4: {
    address: String;
    color: String;
} = {
    address: " ",
    color: " ",
};
obj4.address = "Da nang"; // => ok

// -- Array --
//  nếu ko có []    khi gán thì sẽ lối
let product: any[] = [];
product.push(1);
product.push("VIet Nam");

// với kiểu array phần tử là number
let product2: number[] = [];
product2.push(10);
product2.push(100);
// product2.push(" ")  lỗi

//  với kiểu array phần tử là string
let product3: String[] = [];
product3.push("hello");
product3.push("An to");
// product3.push(1)  lỗi

// object array
let objectArr: {
    name: String;
    age: Number;
}[] = [
    {
        name: " ",
        age: 0,
    },
];

// function
// function  declaration
// tự động quy định kiểu trả về là number
function sum(a: number, b: number) {
    return a + b;
}
// hoặc
function sum2(a: number, b: number): number {
    return a + b;
}
//  bạn return string sẽ hiểu là  function sum3(a: number, b: number):string
function sum3(a: number, b: number) {
    return " ";
}

// lỗi
// function sum4(a: number, b: number): number {
//     return " ";
// }
// function sum5(a: number, b: number): String {
//     return 1;
// }
// function sum6(a: String, b: String): String {
//     return 1;
// }

// tương tự như arrowFunction
const testFunction = (a: number, b: number) => a + b;
const testFunction2 = (a: number, b: number): String => " ";

//  union

let price: String | Number | Boolean;
price = 20;
price = "10";
price = true;
//  3 giá trị đều được
//  price = null // => lỗi

// với object
let body: {
    name: String | number;
    firstName: String;
} = {
    name: " ",
    firstName: " ",
};
body.name = 10;
body.firstName = " ";

// enum
enum Sizes {
    S = "S",
    M = "M",
    L = "L",
    XL = "XL",
}

/*
 * Interface
 */
interface State {
    name: string;
    isLoading: boolean;
}

interface State {
    age: number;
}
let Person: State = {
    name: " ",
    isLoading: true,
    age: 10,
};

interface Name {
    name: string;
}

interface Age {
    age: number;
}

// interface Person = Name | Age  interface có thể merge   chứ ko  hoặc được
/**
 * Type
 */

type State2 = {
    name: string;
    isLoading: boolean;
};

let state23: State2 = {
    name: "Dang",
    isLoading: false,
};
// type ko thể   nạp trồng
type NameN = {
    name: string;
};

type AgeN = {
    age: number;
};
type Person = NameN | AgeN;
type Person2 = NameN & AgeN;
// cả 2 cách đều được
let Person3: Person = {
    name: "hello",
};

// class
class PersonMain {
    private name: string;
    age: number;
    readonly money: number = 40; // chỉ đọc

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    handle() {
        let value = this.money;
    }
}
const alex = new PersonMain("Alex", 10);
// alex.money = 200; có lỗi
// classs trên tương tự như

class PersonHi {
    constructor(public name: String, public age: number) {}
}
