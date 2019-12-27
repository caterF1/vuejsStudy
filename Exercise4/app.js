new Vue({
  el: '#exercise',
  data: {
    toggle: true,
    userInput1: 'defaultUser',
    addInput: '',
    userClassName: 'defaultUser',
    isTrue: 'true',
    addInput2: { 'defaultUser': true },
    color: 'gray',
    progressWidth: 0
  },
  methods: {
    startEffect: function () {
      this.toggle = !this.toggle;
    },
    addUserClass: function () {
      this.addInput = this.userInput1;
    },
    addUserClass2: function () {
      let newClass = {};
      let temp = false;
      this.isTrue === 'true' ? temp = true : temp = false;
      newClass[this.userClassName] = temp;
      return this.addInput2 = newClass;
    },
    changeColor: function () {
      return ('backgroundColor: ' + this.color);
    },
    startProgress: function () {
      setInterval(() => {
        if (this.progressWidth < 140) {
          this.progressWidth += 5;
          console.log(this.progressWidth);
        }

      }, 1000);
    }

  },
  computed: {
    toggleClass: function () {
      return (this.toggle) ? { 'highlight': this.toggle } : { 'shrink': !this.toggle };
    },
    changeWidth: function () {
      console.log('change width');
      return ('width: ' + this.progressWidth + 'px');
    }
  },
  watch: {

  }

});
