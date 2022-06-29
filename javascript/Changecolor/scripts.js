const btn = document.getElementById('myBtn');
const body = document.getElementsByTagName('body')[0];

const listener = function(){
	btn.addEventListener('click', async() => {
		const { changeColor } = await import ('./modules/methods.js');
		changeColor(body);
	});
};

listener();