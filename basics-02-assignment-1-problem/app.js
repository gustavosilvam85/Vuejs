const App = Vue.createApp({
    data(){
        return{
            nome: 'Gustavo da Silva',
            idade: 22,
            imagem: './MainAfter.webp'
        };
    },
    methods:{
        idadeFuturo(){
            return this.idade + 5;
        },
        numeroFavorito(){
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

App.mount('#assignment');