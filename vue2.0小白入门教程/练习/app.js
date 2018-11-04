new Vue({
    el: ".app",
    data: {
        name: 'haha',
        website: '<a href="http://">baidu</a>',
        age: 30,
        x: 0,
        y: 0,
    },
    methods: {
        greet: function(string){
            return `nihao ${string} ${this.name} !`
        },
        greet1: function(inc){
            this.age += inc
        },
        update: function(event){
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})