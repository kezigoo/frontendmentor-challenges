const info = document.querySelector('.info');
const advice = document.querySelector('.advice');
const btn = document.querySelector('.btn');
const load = document.querySelector('.loadBox');
const error = document.querySelector('.errorBox');

async function fetchAPI() {
	info.classList.add('hidden');
	advice.classList.add('hidden');
	error.classList.add('hidden');
	load.classList.remove('hidden');
	try {
		const req = await fetch('https://api.adviceslip.com/advice');
		const res = await req.json();
		info.textContent = `advice #${res.slip.id}`;
		advice.textContent = `"${res.slip.advice}"`;
		info.classList.remove('hidden');
		advice.classList.remove('hidden');
		load.classList.add('hidden');
	} catch (err) {
		console.log(err);
		load.classList.add('hidden');
		error.classList.remove('hidden');
	}
}
const test = () => {
	anime.set('.btn>img', {
		rotate: 0,
		scale: 1,
	});
	anime({
		targets: '.btn>img',
		rotate: 360,
		keyframes: [{ scale: 1.3 }, { scale: 1 }],
		duration: 1000,
		easing: 'easeOutCubic',
	});
};
btn.addEventListener('click', () => {
	test();
	fetchAPI();
});
window.addEventListener('load', fetchAPI);
