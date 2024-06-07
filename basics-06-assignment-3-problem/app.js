const app = Vue.createApp({
  data(){
    return {
      counter: 0,
      frase: 'Not there yet',
      value: '',
    }
  },
  methods: {
    adicionar(num) {
      this.counter = this.counter + num;
      this.verificarCounter();
    },
    reduzir(num) {
      this.counter = this.counter - num
      this.verificarCounter();
    },
    verificarCounter(){
      const value = this.counter;
      if(value != 37){
        this.frase = 'Not there yet'
      }else{
        this.frase= 'Too much!'
      }
    },
    resetCounter(){
      this.counter = 0
    },
  } 
});
  app.mount('#assignment');