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
        temporaryTask:{
            text:'',
            done:false
        }
    },
    methods:{
        removeTask:function(index){
            this.tasks.splice(index,1);
        },
        addTask:function(){
            this.tasks.push(this.temporaryTask);
            this.temporaryTask={
                text:'',
                done:false
            }
        },
        check:function(index){
           this.tasks[index].done=!this.tasks[index].done
        }

    }

})