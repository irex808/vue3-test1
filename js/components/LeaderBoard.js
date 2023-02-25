import PlayerList from "./PlayerList.js";
import PlayerCreate from "./PlayerCreate.js";

export default{
    components: { PlayerList, PlayerCreate },
    template:
    `
        <player-list></player-list>
        <player-create></player-create>
        
    `,
    data(){
        return{
            players: [
                { name: 'John', score: 10, difference: 0, id: 1 },
                { name: 'Jack', score: 11, difference: 0, id: 2 },
                { name: 'Tripple J', score: 12, difference: 0, id: 3 },
                { name: 'Bowen', score: 13, difference: 0, id: 4 }
            ]
        }
    }
};