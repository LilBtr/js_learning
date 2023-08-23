let a
let b
a ||= b
// a || (a = b)

age = 23

let access = age >= 14 && age <= 90

console.log(access)

let dio = !(age >= 14 && age <= 90)
let dio1 = (age < 14 || age > 90)

console.log(dio)
console.log(dio1)

document.body.innerHTML = prompt('Ваш логин:') == 'admin' ? prompt('Пароль:') == 'admin' ? 'Здравствуйте!' : 'Неверный пароль' : 'Вы кто?'
