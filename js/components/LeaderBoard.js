import PlayerList from "./PlayerList.js";
import PlayerCreate from "./PlayerCreate.js";

export default{
    components: { PlayerList, PlayerCreate },
    template:
    `
        <player-list :players="filters.sortPlayersDesc"></player-list>
        <player-create @createPlayer="addPlayer"></player-create>
        
    `,
    data(){
        return{
            players: [
                { name: 'John', score: 10, difference: 0, id: 1 },
                { name: 'Jack', score: 11, difference: 0, id: 2 },
                { name: 'Tripple J', score: 12, difference: 0, id: 3 },
                { name: 'Bowen', score: 13, difference: 0, id: 4 }
            ],
            newPlayer:''
        }
    },
    computed:{
        filters(){
            return { sortPlayersDesc: this.players.sort((a,b)=>b.score-a.score)}
        }

    },
    methods:{
        addPlayer(name){
            this.players.push({
                name: name, score: 15, difference:0, id: this.players.length + 1
            });
        }
    }

};