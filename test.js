window.onload = function() {

	function Romb(side, heigt) {
		this.side = side;
		this.height = heigt;
	}
	Romb.prototype.calculateTheArea = function() {
		document.write("Area = " + (this.side * this.height) + ";");
	};
	 new Romb(6, 6).calculateTheArea();

	function Square(side) {
		Romb.call(this, side, side);
	}
	Square.prototype = new Romb;

	// var square = new Square(7).calculateTheArea();

	function Rectangle(side, heigt) {
		Romb.call(this, side, heigt);
	}
	Rectangle.prototype = new Romb;
	// var rectangle = new Rectangle(8, 8).calculateTheArea();

	function Parallelogram(side, heigt) {
		Romb.call(this, side, heigt);
	}
	Parallelogram.prototype = new Romb;
	// var parallelogram = new Parallelogram (4, 8).calculateTheArea();

	function Trapezium(sideOne, sideTwo, heigt) {
		this.sideTwo = sideTwo;
		Romb.call(this, sideOne, heigt);
	}
	Trapezium.prototype.calculateTheArea = function() {
		document.write("Area = " + (this.side + this.sideTwo) * 0.5
				* this.height + ";");
	};
	var trapezium = new Trapezium(5, 8, 7);
	trapezium.calculateTheArea();
};