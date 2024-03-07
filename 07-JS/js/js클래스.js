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