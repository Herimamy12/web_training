let	container = document.querySelector('.container');
let	button = document.querySelector('.start_btn');
let	score = document.querySelector('.score');
let	time = document.querySelector('.time');

button.onclick = function (){
	let	scr = 0;
	let	tim = 10;
	container.innerHTML = "";

	let	interval = setInterval( function(){
		let	collector = document.createElement('img');
	
		collector.id="target";
		collector.src="grapes.png";
		container.appendChild(collector);
		collector.style.top = Math.random() * (500 - collector.offsetHeight) + 'px';
		collector.style.left = Math.random() * (600 - collector.offsetWidth) + 'px';
	
		setTimeout(function (){
			collector.remove();
		}, 6000);
	
		collector.onclick = function(){
			scr ++;
			collector.style.display = 'none';
		}

		score.innerHTML = `Score : ${scr}`
		time.innerHTML = `Time : ${tim}`
	
		if (tim == 0){
			clearInterval(interval);
			container.innerHTML = "finished";
		}
	}, 1000)

	setInterval (function (){
		tim --;
	}, 1001)
}