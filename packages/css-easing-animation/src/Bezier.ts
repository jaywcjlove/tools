export class Bezier {
  x: number;
  y: number;
  width: number = 12;
  height: number = 12;
  left: number = 0;
  right: number = 0;
  top: number = 0;
  bottom: number = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getSides() {
    this.left = this.x - this.width / 2;
    this.right = this.left + this.width;
    this.top = this.y - this.height / 2;
    this.bottom = this.top + this.height;
  }
  draw(ctx: CanvasRenderingContext2D) {
    this.getSides();
    ctx.fillStyle = '#3ca35b';
    ctx.fillRect(this.left, this.top, this.width, this.height);
  }
}

export class Graph {
  x = 0;
  y = 130;
  height = 200;
  width = 200;
  constructor() {}
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // the 0.5 offset is to account for stroke width to make lines sharp
    ctx.strokeStyle = '#d8dee3';
    ctx.lineWidth = 1;
    ctx.strokeRect(this.x + 0.5, this.y - 0.5, this.width - 1, this.height);

    ctx.restore();
  }
}
