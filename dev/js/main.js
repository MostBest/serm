'use strict';

function l(param) {
	console.log( param );
}

let btn = document.querySelectorAll('.btn');

btn.forEach(function(item) {
	item.addEventListener('click', addElement);
});

function addElement(event) {
	event.preventDefault();
	let  elem = document.createElement('div');
	elem.classList.add('pulse');
	this.appendChild(elem);

	l( elem );
}
