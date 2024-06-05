  const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num ) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, Sobrenome){
      this.name = event.target.value + ' ' + Sobrenome;
    }
  }
});

app.mount('#events');
