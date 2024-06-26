  const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName:'',
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('Submitted');
    },
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
