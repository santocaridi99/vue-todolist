new Vue({
    el:"#app",
    data:{
        tasks:[
            {
                text:'Fare i compiti',
                done:true
            },
            {
                text:'Fare la spesa',
                done:false
            },
            {
                text:'Fare il bucato',
                done:true
            }
        ],
        // creo un oggetto temporaneo con testo vuoto
        temporaryTask:{
            text:'',
            done:false
        },
    },
    methods:{
        // removeTask fa lo splice nella posizione selezionata *index e una volta sola *1
        removeTask:function(index){
            this.tasks.splice(index,1);
        },
        //add task effettua il push dell'oggetto temporaneo nell'array
        //che viene modificato dal v-model nell'html
        //dopo averlo pushato , si svuota
        addTask:function(){
            this.tasks.push(this.temporaryTask);
            this.temporaryTask={
                text:'',
                done:false
            }
        },
        // check dice che se nella posizione dell'indice, done è esempio true
        // diventeà false e vicevera 
        // servirà per aggiungere o togliere il done ad una classe
        check:function(index){
           this.tasks[index].done=!this.tasks[index].done
        }

    }

})