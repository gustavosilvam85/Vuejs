const app = Vue.createApp({
    data() {
        return {
            frase: '',
            nome: '',
        };
    },
    methods: {
        showAlert(){
            alert('Alerta Mostrado');
        },
        confirmarFrase(event){
            this.frase = event.target.value;
        },
        confirmaNome(event){
            this.nome = event.target.value;
        }
    }
});

app.mount('#assignment');