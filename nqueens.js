var size = 5;
var solutions = 0;
var array = [];

function init() {
	solve();
	console.log(array);
}

function solve() {
	for (x=0;x<5;x++) {
		if (array.includes(x)) {
			console.log('fail');
			break;
		}
		array.push(x);
	}
}

function clashes(x1,y1,x2,y2) {
	if (x1===x2 || y1===y2 || Math.abs(x1-x2) === Math.abs(y1-y2)) {
		return true;
	}
}




/*
if (x<boardSize && y<boardSize) {
		var point = new Point(x,y);
		iterate(point);
	}
}

function iterate(point) {
	while (point.clashes() && point.y<boardSize) {
		point.iter();
	}
	if (point.y>=boardSize) {
		var pop = array.pop();
		pop.iter();
		init(pop.x,pop.y);
	}
}

function Point(x,y) {
	this.x = x;
	this.y = y;
	this.clashes = function () {
		return anyMatch(this.x,this.y);
	};
	this.add = function () {
		array.push(this);
		//this.index = array.indexOf(this);
	};
	this.del = function () {

	}
	this.iter = function () {
		this.y++;
	}
}

function anyMatch(x,y) {
	if (lineMatch(x,y) || diaMatch(x,y)) {
		return true;
	}
	return false;
}

function lineMatch(x,y) {
	for (i=0;i<array.length;i++) {
		if (array[i].x==x || array[i].y==y) {
			return true;
		}
	}
	return false;
}

function diaMatch(x,y) {
	for (i=0;i<array.length;i++) {
		if (Math.abs(x - array[i].x) == Math.abs(y - array[i].y)) {
			return true;
		}
	}
	return false;
}

*/
