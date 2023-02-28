export default{
    template:
    `
    <form @submit.prevent="addPlayer">
        <div class="border border-gray-600 bg-white text-black mt-3">
            <input v-model="name" :placeholder="this.placeHolder" @mouseover="this.placeHolder = '' " class="border-r p-2">
            <input v-model="score" placeholder="Players score" class="border-r p-2">
            <button type="submit" class="border rounded-lg border-gray-300 bg-red-600 text-white px-2 mx-2">Add</button>
        </div>
    </form>
    `,
    data(){
        return {
            name:'',
            score:0,
            placeHolder:'New player in the game'
        }
    },
    methods:{
        addPlayer(){
            let score = parseInt(this.score);

            if(isNaN(score)){
                score = 0;
            }
            if(this.name.length <= 2){
                console.log('Kratko!')
                return;
            }
            
            this.$emit('createPlayer', this.name, score );
            this.name = '';
            this.score = 0;
        }
    }
};