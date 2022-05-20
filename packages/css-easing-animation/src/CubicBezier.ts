import { Bezier, Graph } from './Bezier';

export type Points = { x1: number; y1: number; x2: number; y2: number };

export const getPoint = (str: string): Points => {
  const [x1 = 0, y1 = 0, x2 = 0, y2 = 0] = str.split(',').map((s) => Number(s.trim()));
  return { x1, y1, x2, y2 };
};

function isTouchEvent(e: MouseEvent | TouchEvent): e is TouchEvent {
  return e.type === 'touchstart' || e.type === 'touchend' || e.type === 'touchmove';
}

export class CubicBezier {
  canvas?: HTMLCanvasElement;
  timer = 500;
  handles = [new Bezier(50, 280), new Bezier(150, 180)];
  onChange?: (point: Points, isDrag?: boolean) => void;
  graph = new Graph();
  drag = false;
  draggingObj?: Bezier;
  oldX: number = 0;
  oldY: number = 0;
  /**
   * @example `cubic-bezier(0.42, 0, 1, 1)`
   */
  css = '';
  get time() {
    return this.timer;
  }
  get getCssStr() {
    return this.css;
  }
  get ctx() {
    return this.canvas ? this.canvas.getContext('2d') : null;
  }
  set time(num: number) {
    this.timer = num || 500;
  }
  constructor(dom: HTMLCanvasElement) {
    this.canvas = dom;

    this.onPress = this.onPress.bind(this);
    this.touchPress = this.touchPress.bind(this);
    this.onRelease = this.onRelease.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.onMove = this.onMove.bind(this);
    this.touchMove = this.touchMove.bind(this);

    this.canvas.addEventListener('mousedown', this.onPress, false);
    this.canvas.addEventListener('touchstart', this.touchPress, false);
  }
  /** get the x and y pos, normalized by getOffset */
  getPos(event: MouseEvent | TouchEvent) {
    const evn = isTouchEvent(event) ? event.touches[0] : event;
    const mouseX = evn.pageX - this.getOffSet(evn.target).left;
    const mouseY = evn.pageY - this.getOffSet(evn.target).top;

    return {
      x: mouseX,
      y: mouseY,
    };
  }
  /** from quirksmode.org. Modified slightly to return obj */
  getOffSet(obj: any) {
    let curleft = 0;
    let curtop = 0;
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
    }

    return {
      left: curleft,
      top: curtop,
    };
  }
  onPress(event: MouseEvent | TouchEvent) {
    const mouseCoordinates = this.getPos(event);
    const x = mouseCoordinates.x;
    const y = mouseCoordinates.y;
    event.preventDefault();
    event.stopPropagation(); //not sure if this is needed

    const evn = isTouchEvent(event) ? event.touches[0] : event;
    // const evn = event instanceof TouchEvent ? event.touches[0] : event;

    //check to see if over any handles
    for (let i = 0; i < this.handles.length; i++) {
      let current = this.handles[i],
        curLeft = current.left,
        curRight = current.right,
        curTop = current.top,
        curBottom = current.bottom;

      //20 px padding for chubby fingers
      curLeft -= 20;
      curRight += 20;
      curTop -= 20;
      curBottom += 20;

      //console.log('current.x:',current.x, 'current.y:',current.y)
      if (x >= curLeft && x <= curRight && y >= curTop && y <= curBottom) {
        //over the current handle
        //console.log('over')
        //drag = true;
        this.draggingObj = current;
        this.oldX = evn.pageX;
        this.oldY = evn.pageY;
        document.addEventListener('mouseup', this.onRelease, false);
        document.addEventListener('touchend', this.touchEnd, false);
        document.addEventListener('mousemove', this.onMove, false);
        document.addEventListener('touchmove', this.touchMove, false);

        if (this.canvas) {
          this.canvas.style.cursor = 'move';
        }
        // set move cursor
        document.body.style.cursor = 'move';
      }
    }
  }
  touchEnd(event: TouchEvent) {
    this.onRelease();
    event.preventDefault();
  }
  onMove(event: TouchEvent | MouseEvent) {
    if (!this.canvas) return;
    let pageX = 0;
    let pageY = 0;
    if (isTouchEvent(event)) {
      pageX = event.touches[0].pageX;
      pageY = event.touches[0].pageY;
    } else {
      pageX = event.pageX;
      pageY = event.pageY;
    }

    let x = pageX - this.getOffSet(this.canvas).left,
      y = pageY - this.getOffSet(this.canvas).top;

    if (x > this.graph.width) {
      x = this.graph.width;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > this.canvas.height) {
      y = this.canvas.height;
    }
    if (y < 0) {
      y = 0;
    }
    if (this.draggingObj) {
      this.draggingObj.x = x;
      this.draggingObj.y = y;
    }

    this.updateDrawing(true);
  }
  touchMove(event: TouchEvent) {
    this.onMove(event);
    event.preventDefault();
  }
  onRelease() {
    this.drag = false;

    if (this.canvas) {
      // restore pointer cursor
      this.canvas.style.cursor = 'pointer';
      document.body.style.cursor = 'default';
    }

    document.removeEventListener('mousemove', this.onMove, false);
    document.removeEventListener('touchmove', this.touchMove, false);
    document.removeEventListener('mouseup', this.onRelease, false);
    document.removeEventListener('touchend', this.touchEnd, false);
  }
  touchPress(event: TouchEvent) {
    this.onPress(event);
    event.preventDefault();
  }
  updateDrawing(isDrag: boolean = false) {
    const canvas = this.canvas;
    if (!canvas || !this.ctx || this.handles?.length !== 2) return;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // draw graph
    this.graph.draw(this.ctx);
    // get handles
    const cp1 = this.handles[0];
    const cp2 = this.handles[1];

    // draw bezier curve
    this.ctx.save();
    this.ctx.strokeStyle = '#4C84D3';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(this.graph.x, this.graph.y + this.graph.height);
    //start at bottom left, first handle is cp1, second handle is cp2, end is top right
    this.ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, this.graph.width, this.graph.y);
    this.ctx.stroke();
    this.ctx.restore();

    // draw anchor point lines
    this.ctx.strokeStyle = '#f00';
    this.ctx.beginPath();
    this.ctx.moveTo(this.graph.x, this.graph.y + this.graph.height);
    this.ctx.lineTo(cp1.x, cp1.y);
    this.ctx.moveTo(this.graph.width, this.graph.y);
    this.ctx.lineTo(cp2.x, cp2.y);
    this.ctx.stroke();

    // draw handles
    for (var i = 0; i < this.handles.length; i++) {
      this.handles[i].draw(this.ctx);
    }

    const x1 = (cp1.x / this.graph.width).toFixed(3);
    const y1 = ((this.graph.height + this.graph.y - cp1.y) / this.graph.height).toFixed(3);
    const x2 = (cp2.x / canvas.width).toFixed(3);
    const y2 = ((this.graph.height + this.graph.y - cp2.y) / this.graph.height).toFixed(3);
    this.css = `${x1}, ${y1}, ${x2}, ${y2}`;
    if (this.onChange) {
      this.onChange({ x1: Number(x1), y1: Number(y1), x2: Number(x2), y2: Number(y2) }, isDrag);
    }
  }
  change({ x1, y1, x2, y2 }: Points) {
    const cp1 = this.handles[0];
    const cp2 = this.handles[1];
    cp1.x = x1 * this.graph.width;
    cp1.y = this.graph.y + this.graph.height - y1 * this.graph.height;
    cp2.x = x2 * this.graph.width;
    cp2.y = this.graph.y + this.graph.height - y2 * this.graph.height;
    this.updateDrawing();
  }
}
