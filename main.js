const app = Vue.createApp({
    data() {  
      return {
        img: [
          "asset/img/01.webp",
          "asset/img/02.webp",
          "asset/img/03.webp",
          "asset/img/04.webp",
          "asset/img/05.webp",
        ],
        activeimg: 0,
        intervallo: null,
      }
    },
    created() {
      this.autoscorrimento();
    },
    methods: {
      next() {
        if (this.activeimg == 4) {
          this.activeimg = 0;
        } else {
          this.activeimg += 1;
        }
      },
      prev() {
        if (this.activeimg == 0) {
          this.activeimg = 4;
        } else {
          this.activeimg -= 1;
        }
      },
      on(i) {
        this.activeimg = i;
      },
      autoscorrimento() {
        this.intervallo = setInterval(() => {
          this.next();
        }, 2000);
      },
      stopscroll() {
        clearInterval(this.intervallo);
        this.intervallo = null;
      }
    }
  }); 
  
  app.mount('#app');