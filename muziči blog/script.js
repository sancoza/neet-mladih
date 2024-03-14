
var string = "Blues - Rock - Hip Hop - Jazz - Funky";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();

document.addEventListener('DOMContentLoaded', function () {
	const menu = document.querySelector('.navigation ul');
	const hamburger = document.querySelector('.hamburger-menu');

	hamburger.addEventListener('click', function() {
		menu.classList.toggle('showMenu');
	});
});