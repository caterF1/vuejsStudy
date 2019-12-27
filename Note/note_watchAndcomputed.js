new Vue({
	el: '#app', 
  data: {
  	counter: 0,
    counterSecond: 0
  },
  computed: {
  	output: function(){
    	console.log('computed');
    	return (this.counter > 5) ? 'Greater than 5' : 'Smaller than 5';
    }  
  },
  watch: {
  	counter: function(value){
    	console.log('inside watch');
    	let vm = this;
      setTimeout(function(){
    		console.log('watch');
      	vm.counter = 0;
      },2000);
    }
  },
  methods: {
  	result: function(){
    	console.log('result');
    	return (this.counter > 5) ? 'Greater than 5' : 'Smaller than 5';
    }
  }
})