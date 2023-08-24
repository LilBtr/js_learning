const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')

btn1.onclick = () => {
	let fruits = ['Apple', 'Orange', 'Plum']
	// same as fruits[fruits.length-1]
	alert(fruits.at(-1)) // Plum
}

btn2.onclick = () => {
	let fruits = ['Apple', 'Orange', 'Pear']

	alert(fruits.pop()) // remove "Pear" and alert it

	alert(fruits) // Apple, Orange
}

btn3.onclick = () => {
	let fruits = ['Apple', 'Orange']

	fruits.push('Pear')

	alert(fruits) // Apple, Orange, Pear
}

btn4.onclick = () => {
	let fruits = ['Apple', 'Orange', 'Pear']

	alert(fruits.shift()) // remove Apple and alert it

	alert(fruits) // Orange, Pear
}

btn5.onclick = () => {
	let fruits = ['Orange', 'Pear']

	fruits.unshift('Apple')

	alert(fruits) // Apple, Orange, Pear
}

btn6.onclick = () => {
	let fruits = ['Apple']

	fruits.push('Orange', 'Peach')
	fruits.unshift('Pineapple', 'Lemon')

	// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
	alert(fruits)
}

btn7.onclick = () => {
	let arr = new Array(2) // will it create an array of [2] ?

	alert(arr[0]) // undefined! no elements.

	alert(arr.length) // length 2
}

btn8.onclick = () => {
	let styles = ['Jazz', 'Blues']
	styles.push('Rock-n-Roll')
	styles[Math.floor((styles.length - 1) / 2)] = 'Classics'
	alert(styles.shift())
	styles.unshift('Rap', 'Reggae')
}
