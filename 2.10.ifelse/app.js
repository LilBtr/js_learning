const age = 18
let accessAllowed = age >= 18 // true/false

console.log(accessAllowed)


let result

if (2 + 4 < 7) {
	result = 'Мало'
} else {
	result = 'Много'
}

let result1 = 2 + 4 < 7 ? 'Мало' : 'Много'

console.log(result1)

let login = 'Админ'

let message = login == 'Сотрудник' ? 'Привет' : login == 'Админ' ? 'Здравствуйте' : login == '' ? 'Нет логина' : ''

console.log(message)