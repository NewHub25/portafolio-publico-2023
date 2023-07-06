// import { fish, cat } from "../assets/img-base64.json";

export function loadCanvasFluid() {
  // const isMobile = window.innerWidth < 768; //Si el dispositivo es móbil
  const MOUSE_MOVE = true;
  const canvas = document.getElementById("canvas_one");
  // const IMAGE_BASE64 = new Image();
  // Esta linea de aca arriba no rinde bien junto con esta function, demora en renderizar desde el JSON
  const IMAGE_BASE64 = document.querySelector('.gatito img');
  // IMAGE_BASE64.src = cat.base64_300px;
  const context = canvas.getContext("2d");
  canvas.width = 400;
  canvas.height = 400;
  //Y estamos poniendo en los estilos SASS del canvas los mismos pixeles por el FLEX

  class Particle {
    constructor(effect, x, y, color) {
      this.effect = effect;
      this.x = x;
      this.y = y;
      this.originX = Math.floor(x);
      this.originY = Math.floor(y);
      this.color = color;
      this.size = this.effect.gap;
      this.vx = 0;
      this.vy = 0;
      this.ease = 0.2;
      this.dx = 0;
      this.dy = 0;
      this.distance = 0;
      this.force = 0;
      this.angle = 0;
      this.friction = 0.8;
    }
    draw(_context) {
      _context.fillStyle = this.color;
      _context.fillRect(this.x, this.y, this.size, this.size);
    }
    update() {
      this.dx = this.effect.mouse.x - this.x;
      this.dy = this.effect.mouse.y - this.y;
      this.distance = this.dx ** 2 + this.dy ** 2;
      this.force = -this.effect.mouse.radius / this.distance;
      if (this.distance < this.effect.mouse.radius && this.effect.mouse.down) {
        // if (this.distance < this.effect.mouse.radius) {
        this.angle = Math.atan2(this.dy, this.dx);
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
      }

      this.x +=
        (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
      this.y +=
        (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    }
    warp() {
      this.x = Math.random() * this.effect.width;
      this.y = Math.random() * this.effect.height;
      this.ease = 0.1;
    }
  }

  class Effect {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.particlesArray = [];
      this.image = IMAGE_BASE64;
      this.centerX = this.width * 0.5;
      this.centerY = this.height * 0.5;
      this.x = this.centerX - this.image.width * 0.5;
      this.y = this.centerY - this.image.height * 0.5;
      this.gap = 3;
      this.mouse = {
        radius: 10000,
        x: undefined,
        y: undefined,
        down: false,
      };
      // window.addEventListener("mousedown", (event) => {
      window.addEventListener(
        MOUSE_MOVE ? "mousemove" : "mousedown",
        (event) => {
          this.mouse.down = true;
          this.mouse.x = event.x - canvas.offsetLeft;
          this.mouse.y = event.y - canvas.offsetTop;
        }
      );
      window.addEventListener("mouseup", () => {
        this.mouse.down = false;
      });
    }
    init(_context) {
      _context.drawImage(
        this.image,
        this.x,
        this.y
        // canvas.width,
        // canvas.height
      );
      const pixels = _context.getImageData(0, 0, this.width, this.height).data;
      for (let y = 0; y < this.height; y += this.gap) {
        for (let x = 0; x < this.width; x += this.gap) {
          const index = (y * this.width + x) * 4;
          const alpha = pixels[index + 3];
          if (pixels[index + 3] > 0) {
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
            this.particlesArray.push(new Particle(this, x, y, color));
          }
        }
      }
    }
    draw(_context) {
      this.particlesArray.forEach((particle) => particle.draw(_context));
    }
    update() {
      this.particlesArray.forEach((particle) => particle.update());
    }
    warp() {
      this.particlesArray.forEach((particle) => particle.warp());
    }
  }
  const effect = new Effect(canvas.width, canvas.height);
  effect.init(context);
  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    effect.draw(context);
    effect.update();
    window.requestAnimationFrame(animate);
  }
  animate();
  canvas.addEventListener("click", () => effect.warp());
  setInterval(() => effect.warp(), 2000); //Dispersar las partículas en 2s
}
