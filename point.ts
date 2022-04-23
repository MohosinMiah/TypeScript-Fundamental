export class PointB {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log("X = " + this.x + " Y = " + this.y);
  }
}
