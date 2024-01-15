// String(문자)
console.log('hello');

const a = 'winter';
console.log(a);
console.log(`안녕 ${a}`);
// 리터럴 방식 : 백틱을 이용하면 문자열 안에 변수를 넣을 수 있다.

//  Number(숫자)
// 따옴표를 붙이지 않으면 숫자로 인식한다.
console.log(123);
console.log(1 + 2);
console.log('1' + 2);
console.log('1' + '2');

const b = -123;
const c = 1.23;
console.log(b, c);

console.log(b + 100, c * 2);

// 숫자로 변환
const d = 0.1;
const e = 0.2;
console.log(typeof (d + e).toFixed(1));
console.log(Number((d + e).toFixed(1)));

// Boolean(참과 거짓)
const f = true;
const g = false;

if(f) {
    console.log('참입니다.');
};

// Null, Undefined
// null : 값이 없다.
// undefined : 값이 할당되지 않았다.
let age = null;
console.log(age);
age = 20;
console.log(age);

let height;
console.log(height);
height = 160;
console.log(height);

// Array(배열)
// 여러개의 값을 순차적으로 나열한 자료
const animals = ['강아지', '고양이', '토끼']
console.log(animals);
console.log(animals[0]);
console.log(animals[2]);
console.log(animals[2]);
console.log(animals.length);
//배열의 마지막 요소
console.log(animals[animals.length - 1]);