new Vue({
    el: "#vue-app",
    data: {
        age: 40,
        name:'',
    },
    methods: {
        logName(){
            alert('你正在输入你名字')
        },
        logAge(){
            alert('你正在输入年龄')
        }
    }
})