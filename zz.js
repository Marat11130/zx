//alert-(всплыв. окно)
//let f = перем. изм
//const f = перем. неизм
//console.log(bgdh (f))
//prompt("d'c'v")- собрать данные
//Надо убрать function и последнию }
function zzz() {
let f = prompt("Вы прошли курс? (да,нет,не знаю)")
if (f === "да") {
	alert("Молодцы.")
}
else if (f === "нет") {
	alert("Вы не молодцы.")
}
else if (f === "не знаю") {
		alert("Пройди еще раз.")
}
}


function zz(){
let age = prompt("Ваш возраст: ")
		if (age>=9.6) {
			alert("Вы взрослый!")
		}
		else if (age<9.6) {
			alert("Вы маленький!")
		window.open("rfede.html")
		setTimeout(function() {
		window.close("index.html")}, 0);
	}
	}

function z() {
	r=confirm("Перейти на сайт google.com?")
	if (!r) {
		window.event.returnValue=false
	}
}