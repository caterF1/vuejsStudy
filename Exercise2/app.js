new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function(){
                alert();
            },
            storeInput: function(event){
                this.value = event.target.value; 
            }
        }
    });