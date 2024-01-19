//함수 선언하기

//함수 선언문
//function 함수이름 () {}
function hello () {
    console.log('hello');
}
//함수 표현식
//const 함수이름 = function () {}
const world = function () {
    console.log('world');
}
hello();
world();

//return
//함수를 종료하고 값을 반환하는 것
function h1() {
    return 'hello';
    // console.log('world');
    //return문 이후 작성된 코드는 실행되지 않는다.
}
function h2() {
    return ;
    // return 'hello';
}
h1();
h2();

//매개변수
//함수를 호출할 때 함수로 전달되는 값
// function 함수이름(매개변수1, 매개변수2) {}
function sum (x = 1, y = 2) {
    return x + y;
}
console.log(sum(1, 2));
console.log(sum(7, 3));
console.log(sum(5));

//객체의 구조 분해 할당
//일반적
const users = [
    {name: '봄',
    age: 4,},
    {name: '여름',
    age: 3},
    {name: '가을',
    age: 2},
    {name: '겨울',
    age: 1}
]
function getEmail({name, age}) {
    // const {name, age} = x;
    return `${name}의 나이는${age}입니다.`;
}
console.log(getEmail(users[0]));
console.log(getEmail(users[1]));
console.log(getEmail(users[2]));
console.log(getEmail(users[3]));

//배열의 구조 분해 할당
const animals = ['dog', 'cat', 'fish']
function getSecond([, b]) {
    // const [a, b, c] = array;
    return `내가 키우는 동물은 ${b}입니다.`;
}console.log(getSecond(animals));