export default{
    template:
    `
    <form @submit.prevent="addPlayer">
        <div class"border border-gray-600 text black">
            <input v-model="newPlayer" placeholder="New player in the game" class="p-2">
            <button type="submit" class="bg-white border-l">Add</button>
        </div>
    </form>
    `,
    data(){
        return {
            newPlayer:''
        }
    },
    methods:{
        addPlayer(){
            this.$emit('createPlayer', this.newPlayer);
            this.newPlayer = '';
        }
    }
};