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
      }
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
        this.activeimg = i
      }
    }
  }); 
  
  app.mount('#app');