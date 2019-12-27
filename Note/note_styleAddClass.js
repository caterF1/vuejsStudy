new Vue({
    el: '#app',
    data: {
        color: 'gray',
        width: 10,
    },
    computed: {
        myBox: function () {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
})