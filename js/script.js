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
        temporaryVariable:'',
    },
    methods:{
        removeTask:function(index){
            this.tasks.splice(index,1);
        },

    }

})