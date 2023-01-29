const keys = document.querySelectorAll('.key');


function activateKeyDown(e) {
	
}

window.addEventListener('keydown', (e) => {
	keys.forEach(k => {
		const literal = k.querySelector('.literal').textContent;
		const regex = new RegExp(literal, 'i');
		const audio = k.querySelector('audio');

		if (regex.test(e.key)) {
			k.classList.add('active');
			audio.currentTime = 0;
			audio.play();
		}
	})
});

window.addEventListener('mousedown', (e) => {
	const k = e.target;
	const audio = k.querySelector('audio');
	k.classList.add('active')
	audio.currentTime = 0;
	audio.play();
});

keys.forEach(k => {
	k.addEventListener('transitionend', () => {
		k.classList.remove('active');
	})
})