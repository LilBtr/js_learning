const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")


btn1.onclick = () => {
	outer: for (let i = 0; i < 3; i++) {

		for (let j = 0; j < 3; j++) {

			let input = prompt(`Значение на координатах (${i},${j})`, '');

			// если пустая строка или Отмена, то выйти из обоих циклов
			if (!input) break outer; // (*)

			// сделать что-нибудь со значениями...
		}
	}

alert('Готово!');

}


/*-------------------------------------------
break label; // не прыгает к метке ниже

label: for (...)
--------------------
label: {
	// ...
	break label; // работает
	// ...
 }
---------------------------------------------*/
btn2.onclick = () => {
	for (let i = 2; i <= 10; i++) {
		if (!(i % 2)) {
			alert(i)
		}
	}
}


btn3.onclick = () => {
	for (let i = 0; i < 3; i++) {
		alert(`number ${i}!`);
	}
	
	// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	
	let i = 0
	while (i < 3) {
		alert(`number ${i}!`)
		i++
	}
}

btn4.onclick = () => {
	let num;

	do {
		num = prompt("Введите число больше 100?", 0);
	} while (num <= 100 && num);
}

btn5.onclick = () => {
	let n = 10;

	nextPrime:
	for (let i = 2; i <= n; i++) { // Для всех i...
	
		for (let j = 2; j < i; j++) { // проверить, делится ли число..
		if (i % j == 0) continue nextPrime; // не подходит, берём следующее
		}
	
		alert( i ); // простое число
	}
} // Провалено