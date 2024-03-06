// 5. 배열
const starbucks = ['아메리카노', '라떼', '콜드브루', '마끼아또']
console.log(starbucks[0]);
console.log(starbucks[3]);
console.log(starbucks.length);

// 객체
const starbucksMenu = {
    name: '아메리카노',
    price: 4000,
    size: 'tall large venti'
}
console.log(starbucksMenu.price)
console.log(starbucksMenu['size'])

const userA = {
    name: 'A',
    age: 60,
}
const userB = {
    name: 'B',
    age: 30,
    parent: userA
}
const user2 = [
    {
        name: 'A',
        age: 60
    },
    {
        name: 'B',
        age: 30,
        parent: userA
    }
]
console.log(user2[0].name)
console.log(user2[1].parent.age)

// 구조분해 할당
const arr = [1, 2, 3]
const [, b, c] = arr
console.log(arr[0], arr[1], arr[2])
console.log(b, c)

//chakra-ui 반응형 작업
// display={{'none', null, 'block'}}
// display={{sm: 'none', lg: 'block'}}

const arr2 = [1, 2, 3, 4, 5]
const [d, e, ...rest] = arr2
console.log(d)
console.log(e)
console.log(rest)

const obj = {
    name: 'A',
    age: 30,
    heigth: 180
}
const {name = '이름 없음', age: a, heigth: h = '키 정보 없음'} = obj
console.log(obj.name,obj.age, obj.heigth)
console.log(name, a, h)

// 선택적 체이닝 연산자
const user1 = {
    name: 'A',
    age: 30,
    address: '서울'
}
const user3 = {
    name: 'B',
    age: 40,
}
function printCity(props) {
    return props.address
}
console.log(printCity(user1))

// 조건문
function isPositive(props) {
    if (props > 0) {
        return '양수입니다.'
    } else if (props < 0) {
        return '음수입니다.'
    } else {
        return '0입니다.'
    }
}
console.log(isPositive(2))

function getSound2(props) {
    if (props === '개') return '멍멍'
    if (props === '고양이') return '고양이'
    return '알 수 없음'
}
console.log(getSound2('개'))
console.log(getSound2('사자'))

function getSound(props) {
    switch (props) {
        case '개':
            return '멍멍'
        case '고양이':
            return '야옹'
        default:
            return '알수없음'
        }
}
console.log(getSound2('개'))
console.log(getSound2('사자'))

// 반복문
const lovers = [
    {name: '여름', age: 3},
    {name: '겨울', age: 2},
    {name: '가을', age: 1}
]
for (let i = 0; i < lovers.length; i ++) {
    console.log(`${lovers[i].name}이 나이는 ${lovers[i].age}살입니다.`)
}
for (let lover of lovers) {
    console.log(`${lover.name}이 나이는 ${lover.age}살입니다.`)
}
console.log(`${lovers[0].name}이 나이는 ${lovers[0].age}살입니다.`)
console.log(`${lovers[1].name}이 나이는 ${lovers[1].age}살입니다.`)

// 함수
hello()
console.log(hello())
function hello() {
    console.log('안녕하세요. 선언문입니다.')
    return '안녕하세요'
}
const hello2 = function() {
    console.log('안녕하세요. 표현식입니다.')
}
hello()
console.log(hello())
hello2()

function sum(a, b = 5) {
    return a + b
}
console.log(sum())
console.log(sum(1, ))
console.log(sum(1, 3))
console.log(sum(4))

// 객체 함수 선언, 호출
const user = {
    name: '가을',
    age: 2,
}
function getName(props) {
    return props.name
}
console.log(getName(user))
function getNameAge(props) {
    return `${props.name}이 나이는 ${props.age}살입니다.`
}
console.log(getNameAge(user))

// 객체 구조 분해 할당
const user4 = {
    name: '겨울',
    age: 3,
    email: ''
}
function getNameAgeEmail({name, age, email = '없음'}) {
    // const {name, age} = props
    return `${name}이 나이는 ${age}살이고 이메일은 ${email}입니다.`
}
console.log(getNameAgeEmail(user4))

// 배열 구조 분해 할당
const table = ['row1', 'row2', 'row3']
function get2(props) {
    const [, b, c] = props
    return b
}
console.log(get2(table))

// 화살표 함수
const sum3 = (a, b) => {
    return a + b
}
console.log(sum3(2, 3))
const sum4 = (a, b) =>  a + b
console.log(sum4(2, 3))

// 화살표 함수(객체 데이터 반환)
const aa = () => {
    return {a: 1, b: 2}
}
const bb = () => ({a: 1, b: 2})

// 화살표 함수(배열 데이터 반환)
const cc = () => {
    return [1, 2, 3]
}
const dd = () => [1, 2, 3]