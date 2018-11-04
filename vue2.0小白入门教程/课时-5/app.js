new Vue({
    el: "#vue-app",
    data: {
        name: '米斯特吴',
        job: 'web开发',
        website: 'http://www.baidu.com',
        websiteTag: '<a href="http://www.baidu.com">Baidu</a>'
    },
    methods: {
        greet: function(time){
            return `Good ${time} ${this.name} !`
            // return 'Good' + time
        }
    }
})