new Vue({
    el: "#vue-app",
    data: {
        changeColor: false,
        changeLength: false,
    },
    methods: {

    },
    computed: {
        compClasses(){
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
    }
})