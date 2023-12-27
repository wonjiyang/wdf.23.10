// 변수
// 데이터를 저장하고 사용하는 데이터의 이름
// var, let, const
// var: ES6 이전에 사용하던 변수 (현재는 잘 사용하지 않음)

// 변수 선언
let a = 10;
const b = 5;

console.log(a);
console.log(b);
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);

// let 변수 (변수의 값을 변경할 수 있음)
let c = 10;
console.log(c);

// 변수 값 변경
c = 20;
console.log(c);

// const 변수 (변수의 값을 변경할 수 없음)
const d = 5;
console.log(d);

// d = 10;

// zero base numbering
// js는 배열의 index가 0부터 시작

// 배열 선언
const animals = ["dog", "cat", "fish"]

console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

// 데이터 종류

// 문자열(string)
// 문자열은 작은 따옴표('') 또는 큰 따옴표("")로 감싸서 표현

let myName = '양원지';
let age = '23';

console.log(myName);
console.log(age);
console.log(`${myName} 나이는 ${age}살입니다.`);

// boolean (true, false)
let hungry = true;
let cool = false;

console.log(hungry);
console.log(cool);

// Object(객체)
// 여러 데이터를 하나의 변수에 저장하기 위해 사용
// { key: value}
let user = {
    name: '양원지',
    age: 23,
    cute: true,
};

console.log(user);
console.log(user.name);
console.log(`${user.name} 나이는 ${user.age}살입니다.`);
console.log(`${user.name}는 ${user.cute ? '귀여워요' : '귀엽지 않아요' }.`);