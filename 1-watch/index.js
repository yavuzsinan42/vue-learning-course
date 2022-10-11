new Vue({
    el: "#app",
    data: {
    name: "Yavuz",
    counter: 0,
    
    
    },
    methods: {
    result :function() {
        return this.counter > 10 ? "10'dan büyüktür" : "10'dan küçüktür."
    },
    
    },
    computed: {
    
    },
    watch: {
    counter: function(value){
    vm=this;
    setTimeout(function(){
    vm.counter = 0;
    }, 1500);
    }
    }
    })