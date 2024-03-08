console.log('슈렉 프라푸치노 주문')

setTimeout(() => {
    console.log('아메리카노 주문')
    console.log('아메리카노 제공')
}, 2000)

console.log('슈렉 프라푸치노 제공')

// 비동기 처리 사용
function orderCoffee(name, time) {
    console.log(`주문: ${name}, 시간: ${time / 1000}초`)
    setTimeout(() => {
        console.log(`${name}가 만들어졌습니다.`)
    }, time)
}
orderCoffee('카페모카', 5000)
orderCoffee('아메리카노', 3000)
orderCoffee('카페라떼', 4000)