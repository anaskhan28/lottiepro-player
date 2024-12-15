class LottieProPlayer extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.animation = null;
    }
  
    connectedCallback() {
      const container = document.createElement('div');
      container.style.width = this.style.width || '300px';
      container.style.backgroundColor = this.style.backgroundColor || '#fff';
  
      this.shadow.appendChild(container);
  
      const lottieSrc = this.getAttribute('src');
      const speed = this.getAttribute('speed') || 1;
      const loop = this.getAttribute('trigger') === 'loop' ? true : false;
  
      if (lottieSrc) {
     
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';
        script.onload = () => {
          this.animation = window.lottie.loadAnimation({
            container: container,
            renderer: "svg",
            loop: loop,
            autoplay: true,
            path: lottieSrc,
          });
          this.animation.setSpeed(speed / 100);
        };
        document.head.appendChild(script);
      }
    }
  
    disconnectedCallback() {
      if (this.animation) {
        this.animation.destroy();
      }
    }
  }
  
  customElements.define('lottiepro-player', LottieProPlayer);
  