new Vue({
    el: "#vue-app",
    data: {
        age: '',
        name: 'dawang',
    },
    methods: {
        logName(){
            alert(this.name)
        },
        logAge(){
            alert('你正在输入年龄')
        }

    }
})