document.querySelector('.wrap').style.border = '1px solid red';
document.querySelector('.header').style.background = 'blue';
document.querySelector('.header').style.height = '100px';
document.querySelector('.header').style.padding = '1i0px';

const parent = document.querySelector('.wrap')
console.log(parent.children)
console.log(parent.childNodes)
console.log(parent.firstChild)
console.log(parent.firstElementChild)

document.getElementById('main').style.backgroundColor = 'lightblue'
document.getElementsByClassName('content-section')[0].style.backgroundColor = 'lightblue'

document.querySelector('.content-section p').style.border = '1px solid blue'
const secp = document.querySelectorAll('.content-section p')
secp.forEach((p) => (p.style.color = 'white'))
secp[0].textContent = 'Hello'
secp[1].innerHTML = '<em>글씨가 눕는</em>'

const link = document.querySelector('.link')
link.setAttribute('href', 'http://google.com')
link.textContent = '구글로 이동'

const newEl = document.createElement('div')
newEl.textContent = '새로운 요소'
document.querySelector('.sidebar').appendChild(newEl)
document.querySelector('.sidebar ul').lastElementChild.remove(newEl)

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    console.log('버튼 클릭')
})