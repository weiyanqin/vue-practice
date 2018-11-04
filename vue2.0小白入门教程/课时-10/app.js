new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20,
    },
    // methods: {
    //     addToA(){
    //         console.log('Add to A')
    //         return this.a + this.age
    //     },
    //     addToB(){
    //         console.log('Add to B')
    //         return this.b + this.age
    //     }
    // },
    computed: {
        addToA(){
            console.log('Add to A')
            return this.a + this.age
        },
        addToB(){
            console.log('Add to B')
            return this.b + this.age
        }
    }
})