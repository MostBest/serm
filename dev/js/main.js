'use strict';

function l( param ) {
	console.log( param );
}


let btn = document.querySelectorAll('.btn');

btn.forEach(function(item) {
	item.addEventListener('click', addElement);
});

function addElement(e) {

	let elem 		= this.getBoundingClientRect(); // не работает в IE9
	let subElem = document.createElement('span');
	subElem.classList.add('inc');

	this.appendChild(subElem); // при каждом клике плодит сущность

	let x = e.pageX - elem.left - elem.width / 2;
	let y = e.pageY - elem.top - elem.height / 2;

	subElem.style.left = x + 'px';
	subElem.style.top  = y + 'px';
	subElem.classList.add('animate');
}
