export default{
    template:
    `
    <form @submit.prevent="addPlayer">
        <div class="border border-gray-600 text black">
            <input v-model="name" placeholder="New player in the game" class="p-2">
            <input v-model="score" placeholder="Players score" class="p-2">
            <button type="submit" class="bg-white border-l">Add</button>
        </div>
    </form>
    `,
    data(){
        return {
            name:'',
            score:0
        }
    },
    methods:{
        addPlayer(){
            let score = parseInt(this.score);

            if(isNaN(score)){
                score = 0;
            }
            
            this.$emit('createPlayer', this.name, score );
            this.name = '';
            this.score = 0;
        }
    }
};