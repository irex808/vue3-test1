export default{
    template:
    `
    <button v-model="id" @click="score">Smash the score UP !</button>
    `,

    props:{
        id: Number
    },
    methods:{
        score(){
            this.$emit('scoreUp', this.id)
        }
    }

}