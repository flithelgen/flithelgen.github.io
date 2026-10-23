// Drag-och-scroll-karusell (baserad på "Drag and scroll carousel" av supahfunk, MIT).
// Omskriven så att den bara påverkar sin egen ruta och inte hela sidan:
//  - dra med mus/finger, eller scrolla i sidled (trackpad / shift + hjul)
//  - vanlig lodrät scroll på sidan fungerar som vanligt, även på mobil
//  - piltangenter fungerar när karusellen har fokus
const lerp = (a, b, t) => (1 - t) * a + t * b;
const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

class DragCarousel {
  constructor(el) {
    this.el = el;
    this.wrap = el.querySelector(".carousel__wrap");
    this.items = [...el.querySelectorAll(".carousel__item")];
    this.bar = el.querySelector(".carousel__progress-bar");
    this.reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    this.target = 0; // dit vi vill komma
    this.x = 0; // där vi är just nu (glider mot target)
    this.maxScroll = 0;
    this.dragging = false;
    this.running = false;

    this.tick = this.tick.bind(this);
    this.measure = this.measure.bind(this);

    new ResizeObserver(this.measure).observe(this.el);
    this.el.querySelectorAll("img").forEach((img) => img.addEventListener("load", this.measure));

    el.addEventListener("pointerdown", (e) => this.onDown(e));
    el.addEventListener("pointermove", (e) => this.onMove(e));
    el.addEventListener("pointerup", (e) => this.onUp(e));
    el.addEventListener("pointercancel", (e) => this.onUp(e));
    el.addEventListener("wheel", (e) => this.onWheel(e), { passive: false });
    el.addEventListener("keydown", (e) => this.onKey(e));
    el.addEventListener("dragstart", (e) => e.preventDefault()); // hindrar att bilder "dras loss"

    this.measure();
  }

  measure() {
    this.maxScroll = Math.max(0, this.wrap.scrollWidth - this.el.clientWidth);
    this.target = clamp(this.target, 0, this.maxScroll);
    this.start();
  }

  onDown(e) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    this.dragging = true;
    this.lastX = e.clientX;
    this.el.classList.add("is-dragging");
    this.el.setPointerCapture(e.pointerId);
  }

  onMove(e) {
    if (!this.dragging) return;
    this.target = clamp(this.target + (this.lastX - e.clientX) * 1.5, 0, this.maxScroll);
    this.lastX = e.clientX;
    this.start();
  }

  onUp(e) {
    if (!this.dragging) return;
    this.dragging = false;
    this.el.classList.remove("is-dragging");
    if (this.el.hasPointerCapture(e.pointerId)) this.el.releasePointerCapture(e.pointerId);
  }

  onWheel(e) {
    // Bara sidleds-scroll (eller shift + hjul) styr karusellen. Lodrät scroll släpps igenom.
    const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
    if (!dx) return;
    e.preventDefault();
    this.target = clamp(this.target + dx, 0, this.maxScroll);
    this.start();
  }

  onKey(e) {
    const step = this.items[0].offsetWidth;
    if (e.key === "ArrowRight") this.target = clamp(this.target + step, 0, this.maxScroll);
    else if (e.key === "ArrowLeft") this.target = clamp(this.target - step, 0, this.maxScroll);
    else return;
    e.preventDefault();
    this.start();
  }

  start() {
    if (this.running) return;
    this.running = true;
    requestAnimationFrame(this.tick);
  }

  tick() {
    const prev = this.x;
    this.x = lerp(this.x, this.target, 0.1);
    const speed = Math.min(100, prev - this.x);

    this.wrap.style.transform = `translateX(${-this.x}px)`;
    const progress = this.maxScroll ? this.x / this.maxScroll : 0;
    this.bar.style.transform = `scaleX(${0.18 + progress * 0.82})`;

    // Lätt "kläm"-effekt när man dra snabbt – avstängd om man har valt minskad rörelse.
    if (!this.reduceMotion) {
      const s = Math.abs(speed);
      this.items.forEach((item) => {
        item.style.transform = `scale(${1 - s * 0.002})`;
        item.querySelector("img").style.transform = `scaleX(${1 + s * 0.004})`;
      });
    }

    // Stanna loopen när allt har lugnat sig, så vi inte kör 60 fps i onödan.
    if (Math.abs(this.target - this.x) < 0.1 && Math.abs(speed) < 0.01) {
      this.x = this.target;
      this.running = false;
      return;
    }
    requestAnimationFrame(this.tick);
  }
}

document.querySelectorAll("[data-carousel]").forEach((el) => new DragCarousel(el));
