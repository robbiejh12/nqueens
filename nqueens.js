var boardSize = 4; //set square size

var solutions = 0;
var array = [];
var maxVal = (boardSize-1);

function init(x,y) {
	while (x<boardSize) {
		while (y<boardSize) {
			console.log(x,y);
			var point = new Point(x,y);
			point.compare();
			y++;
		}
		y=0;
		x++;
	}
	cycle();
}

function cycle() {
	if (array.length<maxVal) {
		var pop = array.pop();
		init(pop.x,pop.y);
	}
}

function Point(x,y) {
	this.x = x;
	this.y = y;
	this.index = false;
	this.compare = function () {
		if (!anyMatch(this.x,this.y)) {
			this.add();
			console.log(array);
		};
	};
	this.add = function () {
		array.push(this);
		this.index = array.indexOf(this);
	};
	this.del = function () {
		array.splice(this.index,1)
	};
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
