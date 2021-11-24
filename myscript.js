var input = document.querySelector('input');
var field = document.querySelector('.field');

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; 
}

function square(){
	var num = input.value;
	for (let i = 0; i < num; i++)
	{
		let square = document.createElement('div');
		square.classList.add('square')
		let side = getRandomInt(100, 500);
		square.style.height = side + 'px';
		square.style.width = side + 'px';
		square.style.left = getRandomInt(0, 500) + 'px';
		square.style.top = getRandomInt(0, 500) + 'px';

		square.addEventListener("mouseenter", function(){
			square.style.backgroundColor = "yellow"})
		square.addEventListener("mouseleave", function(){
			square.style.backgroundColor = "red"})
		square.addEventListener("dblclick", function(){
			field.removeChild(square)});
		field.append(square);
	}
}

function circle(){
	var num = input.value;
	for (let i = 0; i < num; i++)
	{
		let circle = document.createElement('div');
		circle.classList.add('circle')
		let radius = getRandomInt(20, 500);
		circle.style.height = radius + 'px';
		circle.style.width = radius + 'px';
		circle.style.left = getRandomInt(0, 500) + 'px';
		circle.style.top = getRandomInt(0, 500) + 'px';
		
		circle.addEventListener("mouseenter", function(){
            circle.style.backgroundColor = "yellow"})
        circle.addEventListener("mouseleave", function(){
            circle.style.backgroundColor = "green"})
		circle.addEventListener("dblclick", function(){
			field.removeChild(circle)});
		field.append(circle);
	}
}

function triangle(){
	var num = input.value;
	for (let i = 0; i < num; i++)
	{
		let triangle = document.createElement('div');
		triangle.classList.add('triangle')
		let side1 = getRandomInt(10, 200);
		let side2 = getRandomInt(10, 200);
		let side3 = getRandomInt(10, 200);
		triangle.style.borderLeft = side1 + 'px solid transparent';
		triangle.style.borderRight = side2 + 'px solid transparent';
		triangle.style.borderBottom = side3 + 'px solid blue';
		triangle.style.left = getRandomInt(0, 500) + 'px';
		triangle.style.top = getRandomInt(0, 500) + 'px';
		
		triangle.addEventListener("mouseenter", function(){
            triangle.style.borderBottomColor = "yellow"})
        triangle.addEventListener("mouseleave", function(){
            triangle.style.borderBottomColor = "blue"})
		triangle.addEventListener("dblclick", function(){
			field.removeChild(triangle)});
		field.append(triangle);
	}
}