Vue.component(
    "greeting",
    {
        template:`
        <div>
            <p>{{ name }}: 大家好，给大家介绍一下我的女朋友@关晓彤</p>
            <button v-on:click="changeName">改名字</button>
        </div> `,
        data(){
            return {
                name: '鹿晗'
            }
        },
        methods:{
            changeName(){
                this.name = 'Henry'
            }
        }
    }
)





new Vue({
    el: "#vue-app-one",
})

new Vue({
    el: "#vue-app-two",
})