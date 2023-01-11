f = 0;
let xoff = 0.0;

function setup() {
	createCanvas((W = 800), W);
	background(255);
}

function draw() {
	translate((w = 400), w);
	stroke((D = 100), 22);
	xoff = xoff + 0.01;
	let n = noise(xoff);
	line(sin(f) * 100, tan(f) * 100, n, tan(f));
	f++;
}

function keyPressed() {
	h = 0;
	f = 0;
	clear();
}
