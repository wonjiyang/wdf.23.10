const animals = new Array('dog', 'cat', 'fish')
console.log(animals)
console.log(animals.length)
console.log(animals[1])

const americano =  {
    name: '아메리카노',
    price: 4000,
    front: function() {
        return `${this.name}는 ${this.price}원입니다.`
    }
}
console.log(americano.front())
const latte =  {
    name: '라떼',
    price: 4500,
    front: function() {
        return `${this.name}는 ${this.price}원입니다.`
    }
}
console.log(americano.front.call(latte))

// 프로토타입(속성값)을 이용한 메소드 생성
// 속성값 생성
function Front(name, price) {
    this.name = name
    this.price = price
}
// 메소드 생성
Front.prototype.calling = function() {
    return `${this.name}는 ${this.price}원입니다.`
}
// 객체 생성
const ame = new Front('아메리카노', 4000)
const lat = new Front('라떼', 4500)
console.log(ame)
console.log(ame.calling())
console.log(lat)
console.log(lat.calling())

// 클래스 함수로
class Front2 {
    constructor(name, price, size) {
        this.name =name
        this.price = price
        this.size = this.size
    }
    makeCoffee() {
       return `${this.name} ${this.size} 주문 들어왔습니다.`
    }
    getPrice() {
        if (this.size === 'large') {
            return this.price + 500
        } else if (this.size === 'small') {
            return this.price - 500
        } else {
            return this.price
        }
    }
    calling() {
        return `${this.name}는 ${this.getPrice()}원입니다.`
    }
}
const ame2 = new Front2('아메리카노', 4000, 'large')
const lat2 = new Front2('라떼', 4500, 'tall')
const cap = new Front2('카푸치노', 4500, 'small')
console.log(ame2.calling() )
console.log(lat2.calling())
console.log(cap.calling())

// extends 상속
class Special extends Front2 {
    specialCoffee() {
        return `오늘의 커피 : ${this.name}는 ${this.getPrice()}원 입니다.`
    }
}
const milktea = new Special('밀크티', 5500, 'large')
console.log(milktea.specialCoffee())