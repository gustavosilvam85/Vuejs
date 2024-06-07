const app = Vue.createApp({
    data(){
        return{
            boxaSelect: false,
            boxbSelect: false,
            boxcSelect: false, 
        };
    },
    methods: {
        boxSelected(box){
            if(box === 'A'){
                this.boxaSelect = !this.boxaSelect;
            }else if (box === 'B'){
                this.boxbSelect = !this.boxbSelect;
            }else if (box === 'C'){
                this.boxcSelect = !this.boxcSelect;
            }
        }
    },
})

app.mount('#styling');

// vbind:class="propriedade do data ? 'classes utilizadas'"
//v-bind:class="boxaSelect ? 'demo active' : 'demo'" EXAMPLE