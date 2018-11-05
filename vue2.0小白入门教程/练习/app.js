new Vue ({
    el: '.app',
    data: {
        name: 'wanghaiming',
        webSite: '<a href="www.baidu.com">百度</a>'
    },
    methods: {
        greet(index){
            return `good  ${index} ` + this.name
        }
    }
})