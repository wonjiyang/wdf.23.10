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