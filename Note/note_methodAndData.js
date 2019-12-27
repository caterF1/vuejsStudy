new Vue({
	el: '#app',
  data: {
      title: 'hello world',
      link: 'http://google.com'
  },
  methods: {
  	changeTitle: function (event) {
    	this.title = event.target.value;
    },
    sayHello: function() {
        this.title = 'say hello';
        return titile;
    }
  }
});