import Player from "./Player.js";
export default{
    components : { Player },
    template: 
    `   
    <section v-show="players.length">
        <ul class="border border-gray-600 divide-y divide-gray-600">
            <player 
            v-for="player in players" 
            :key="player.id" 
            :player="player"
            @score="score"
            >
            </player>
        </ul>
    </section>
    `,
    updated(){
        alert('Player has moved one slot up!');
    },
    data(){
        return {
            id: 0
        }
    },
    props:{
        players: Array
    },
    methods:{
        score(id){
            this.id = id;
            console.log('PlayerList: ' + this.id);
            this.$emit('scoreList', this.id);
        }
    }
};