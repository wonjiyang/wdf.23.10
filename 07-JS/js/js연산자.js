//연산자
//산술 연산자
//나머지 연산자(+, -, *, /, %)

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
    // num을 2로 나눈 나머지가 0이면 true, 아니면 false
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
// 연산자를 기준으로 가장 먼저 만나는 true값을 반한한다.
//모두가 false일 경우 마지막 값을 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || false); 
console.log(false || true);
console.log(1 || 0);
console.log(false || 0 || {});
console.log("" || 0 || NaN);

//병합 연산자
//|| 연산자와 비슷하다.
//null 또는 indefined는 제외하고 반환한다.
console.log(0 || 5);
console.log(0 ?? 5);
console.log(null ?? undefined);

//삼항 연산자
//조건 ? 참일 때 반환 : 거짓일 때 반환
console.log(1 < 2 ? '참' : '거짓');
console.log(1 > 2 ? '참' : '거짓');

//ex
function isCat(name) {
    return (
        //조건 ? 참 : 거짓
        name === '고양이' ? '고양이' : '고양이 아님'
    );
}
console,log(isCat('고양이'));
console,log(isCat('개'));

//배열의 전개
//..을 사용하여 배열이나 객체를 펼칠 수 있다.
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
console.log(num1.concat(num2));
console.log([...num1, ...num2]);

//객체 전개 연산자
const dog = {
    name  : '멍멍이',
    phone : '010-0000-0000'
};
const dogInfo = {
    ...dog,
    age : 2
};
console.log(dogInfo);

//함수의 전개
//...를 사용하여 파라미터(인수)를 전개할 수 있다.
function sum(a, b, c) {
    console.log(a + b + c);
}
sum(5, 6, 7);

//배열을 파라미터(인수)로 전달하려면?
const num3 = [5, 6, 7];
const num4 = [8, 9, 10];
sum(num3[0], num3[1], num3[2]);
sum(num4[0], num4[1], num4[2]);

//전개 연산자를 사용해 인수 전달
sum(...num3);
sum(...num4);