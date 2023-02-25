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
            :player="player">
            </player>
        </ul>
    </section>
    `,
    props:{
        players: Array
    }
};