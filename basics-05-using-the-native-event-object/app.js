const app = Vue.createApp( {
  data(){
    return {
      counter: 0,
      name: '',
      lastname: '',
      // fullname:'',
    }
  },
  watch: {
    counter(value){
      if(value > 50){
        setTimeout(function (){
          this.counter = 0;
        },2000);
      }
      console.log("foi resetado");
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + ' ' + this.lastname
    //   }
    // },
    // lastname(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + ' ' + value
    //   }
    // }
  },
  computed:{
    fullname(){
      if(this.name === '' || this.lastname === ''){
        return '';
      }
      return this.name + ' ' + this.lastname
    }
  },
  methods: {
    resetInput(){
      this.name = '',
      this.lastName = '';
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});
app.mount('#events');
