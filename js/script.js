const slides = [
  {
    image: "img/01.jpg",
    title: "Svezia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    image: "img/02.jpg",
    title: "Svizzera",
    text: "Lorem ipsum.",
  },
  {
    image: "img/03.jpg",
    title: "Gran Bretagna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "img/04.jpg",
    title: "Germania",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
  },
  {
    image: "img/05.jpg",
    title: "Paradise",
    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
  },
];

const appVue = new Vue({
  // selettore dell'elemento html dove avviare vue
  el: "#app",

  // Conterrà tutti i dati necessari all'applicazione
  data: {
    // varie chiavi necessarie all'app
    imgSlides: slides,
    currentImg: slides[0],
    currentIndex: 0,
    isActive: false,
    autoPlayEnabled: true,
  },

  // Conterrà una serie di funzioni
  methods: {
    // funzioni che useremo nell'app
    prevSlide() {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.imgSlides.length - 1;
      }
      this.currentImg = this.imgSlides[this.currentIndex];
    },

    nextSlide() {
      this.currentIndex++;

      if (this.currentIndex >= this.imgSlides.length) {
        this.currentIndex = 0;
      }
      this.currentImg = this.imgSlides[this.currentIndex];
      if ((this.currentImg = this.imgSlides[this.currentIndex])) {
        this.isActive = true;
      }
    },
    autoPlay(autoPlayEnabled) {
      if (autoPlayEnabled) {
        setInterval(() => {
          this.nextSlide();
        }, 300);
      } else {
        this.autoPlayEnabled = false;
      }
    },
  },
});
