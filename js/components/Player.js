export default{
    template:
    `
    <section>
        <li class="p-2 flex justify-between items-center">
            {{ player.name }}     <span>{{ player.score }}</span>       {{ player.difference }} 
            <div class="justify-right px-3 py-3"> <button class="border border-gray-300 rounded px-2 py-2" @click="score">Smash the score UP !</button> </div>
        </li>
        
    </section>
    `,
    data(){
        return{
            id:0
        }
    },
    props:{
        player:Object
    },
    methods:{
        score(){
            this.id = this.player.id
            console.log(this.id);
            console.log("SMASH");
            this.$emit('score', this.id )
        }
    }
};