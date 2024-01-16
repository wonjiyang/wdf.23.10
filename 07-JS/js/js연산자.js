//덧셈 연산자
console.log(1 + 2);
console.log('가을' + '겨울');

//뺼셈 연산자
console.log(5 - 3);

//곱셈 연산자
console.log(2 * 3);

//나눗셈 연산자
console.log(6 / 3);

//나머지 연산자
//나머지가 0이면 짝수, 1이면 홀수
//(now % 슬라이드의 갯수) 나머지가 0일 경우 마지막 슬라이드
console.log(7 % 3);

//짝수, 홀수 판별 함수
function isEven(num) {
    return num % 2 === 0;
;}
// 함수 호출
console.log(isEven(2));

//할당 연산자
let now = 1;
console.log(now);
now = now + 1;//now에 1을 더한 값을 now에 할당
now += 1;// 축양형
console.log(now);
let c = 2;
c = c * 2;
c *= 2;
console.log(c);

//부정 연산자
//!를 사용하여 true를 false로, false를 true로 바꿀 수 있다.
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!!0);

//비교 연산자
//===, !==, <, >, <=, >=

//일치 연산자(형변환 일어나지 않음)
console.log(1 === 1);
console.log(1 === '1');

//불일치 연산자(형변환 일어나지 않음)
console.log(1 !== 1);
console.log(1 !== '1');

//대소 비교 연산자(형변환 일어남)
console.log(1 < 2);
console.log(1 <= 2);
console.log(1 > 2);
console.log(1 >= 2);

//논리 연산자
//&&(and) 연산자
//둘 다 true일 경우 true
console.log(true && true);
console.log(true && false);
console.log(1 < 2 && 2 < 3);
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 0 && false);
console.log('a' && 'b' && '');
console.log('a' && 'b' && 'c');

//||(or) 연산자
//둘 중 하나라도 true일 경우 true
console.log(true || true);
console.log(true || false);
console.log(false || false);