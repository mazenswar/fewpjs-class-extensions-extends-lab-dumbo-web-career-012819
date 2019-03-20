// Your code here


class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get getCount() {
    return this.sides.length;
  }

  get perimeter() {
    let total = 0;
    this.sides.forEach(side => {
      total += side;
    })
    return total;
  }
}

class Triangle extends Polygon {

  get isValid() {
    if ((this.sides[0] + this.sides[1] > this.sides[2] ) && (this.sides[1] + this.sides[2] > this.sides[0] ) && (this.sides[0] + this.sides[2] > this.sides[1] )) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if(this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3]) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] ** 2;
  }



}
// Define a Square class that inherits from Polygon. It has access to perimeter inherited from Polygon.
// Implement a getter method isValid that checks if the the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
// Implement a getter method area that calculates the area of the square.
