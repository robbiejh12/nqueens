var boardSize = 4; //set square size

var solutions = 0;
var array = [];

function init() {
	if (!anyMatch(array.length, y)) {
		array.push(y);
	}
}

function anyMatch(x,y) {
	if (yMatch(y) || diaMatch(x,y)) {
		return true;
	}
	return false;
}

function yMatch(y) {
	if (array.includes(y)) {
		return true;
	}
	return false;
}

function diaMatch(x,y) {
	for (i=0;i<array.length;i++) {
		if (Math.abs(x - i) == Math.abs(y - array[i])) {
			return true;
		}
		return false;
	}
}
