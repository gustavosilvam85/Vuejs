const App = Vue.createApp({
    data(){
        return{
            courseGoal1 : 'Finalizei o curso e aprendi vue!',
            courseGoal2 : '<h2>Mestre em Vue e fazendo aplicativos maravilhosos</h2>',
            vueLink: 'https://vuejs.org'
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoal1;
            }else{
                return this.courseGoal2;
            }
        }
    }
});
console.log("DASUHDAS");
App.mount('#user-goal');