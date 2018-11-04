
var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "app one 里面的内容"
    },
    methods: {

    },
    computed: {
        greet(){
            return 'hello app one'
        }
    }
})

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "app two 里面的内容"
    },
    methods: {
        changeTitle(){
            one.title = "已经改名了"
        }
    },
    computed: {
        greet(){
            return 'hello app one'
        }
    }
})