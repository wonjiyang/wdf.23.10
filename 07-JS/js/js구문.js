//구조분해할당
//배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
// function sum(a, b, c) {
//     console.log(a + b + c);
// }
//배열 구조 분해
const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
const[a, b, c] = arr;
console.log(a, b, c);

//각각의 변수가 미리 할당되어 있을 경우
let d = 0;
let e = 0;
let f = 0;
const arr2 = [1, 2, 3];
[d, e, f] = arr2;
console.log(d, e, f);

//나머지 할당
const arr3 = [1, 2, 3, 4, 5];
const [g, h, ...rest] = arr3;
console.log(g, h, rest);

//객체 구조 분해
const cat = {
    name: '겨울',
    age: 2
};

//기본값 할당, 변수 이름 바꾸기
const {name : nick, age = 0, birth = '0101'} = cat;
console.log(name, age);
console.log(nick, birth);

const airbnbbIcon = {
    img: 'airbnb.png',
    text: '한옥'
};
const {img, text} = airbnbbIcon;
console.log(img, text);

//선택적 체이닝
//?.을 사용하여 객체의 속성에 접근할 때 해당 속성이 없는 경우 undefined를 반환한다.
const user = null;
console.log(user?.name);
const user1 = {
    name: '겨울',
    age: 2,
    address: {
        city: 'Busan',
        dong: 'Sasang'
    }
};
const user2 = {
    name: '가을',
    age: 3
};
function printCity(user) {
    return user.address?.city || '주소가 없습니다.';
}
console.log(printCity(user1));
console.log(printCity(user2));

// 조건문
// if문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// }

// if else문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else {
//     // 조건이 false일 때 실행되는 코드
// }

// if else if문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else {
//     // 조건이 false일 때 실행되는 코드
// }

//음수, 양수 판별 함수
function isPositive (num) {
    if (num > 0) {
        console.log(`${num}은/는 양수입니다.`);
    } else if (num < 0) {
        console.log(num + '은/는 음수입니다.');
    } else {
        console.log(num + '은/는 0입니다.');
    }
};
isPositive(1);
isPositive(-1);
isPositive(0);

//swith문
//매개변수로 입력된 값과 일치하는 case문을 실행한다.
// swuth (매개변수) {
//     case 값1:
//         //매개변수 === 값1일 때 실행되는 코드
//         break;
//     case 값2:
//         //매개변수 === 값2일 때 실행되는 코드
//         break;
//     default:
//         //매개변수와 일치하는 case문이 없을 때 실행되는 코드
// }
function getPrice1(item) {
    switch (item) {
        case '패딩':
            return '280,000';
            //return이란 함수를 종료하고 값을 반환하는 것, break 사용 X
        case '바지':
            return '55,000';
        default:
            return '아이템 별로 상이';
    }
}
console.log(getPrice1('패딩'));
console.log(getPrice1('바지'));
console.log(getPrice1('모자'));

//if문
function getPrice2(item) {
    if (item === '패딩') return '280,000';
    if (item === '바지') return '55,000';
    return '아이템 별로 상이'
}
console.log(getPrice2('패딩'));
console.log(getPrice2('바지'));
console.log(getPrice2('모자'));

//반복문
//특정 코드를 반복적으로 실행할 때 사용한다.

//for문
//for (초기값; 조건; 증감식) {실행될 코드}
//1부터 10까지 출력
for (let i = 1; i <=10; i++) {
    console.log(i);
}

//break문 : 전체 반복문 종료
//10부터 1까지 출력
for (let i = 10; i >= 1; i--) {
    //i가 4보다 작은 수일 경우 종료하기
    if (i < 4) {
        break;
    }
    console.log(i);
}

//continue문 : 현재 반복을 멈추고 다음 반복을 진행(건너뛰기)
//10부터 1까지 출력
for (let i = 10; i >=1; i--) {
    //홀수만 출력
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
for (let i = 10; i >=1; i--) {
    //짝수만 출력
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

//for문으로 배열 출력
const animals = ['강아지', '고양이', '토끼'];
console.log(animals);
console.log(animals.length);
console.log(animals[0], animals[1], animals[2]);
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

//for of문
//for (변수 of 배열) {실행될 코드}
for (let animal of animals) {
    console.log(animal);
}

//ex2
const users = [
    {name: '겨울', age: 2},
    {name: '가을', age: 3},
    {name: '여름', age: 4},
    {name: '봄', age: 5},
];
console.log(users);
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    console.log(users[i].name);
}
for (let user of users) {
    console.log(user);
    console.log(user.name);
}