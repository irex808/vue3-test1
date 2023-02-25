import PlayerList from "./PlayerList.js";
import PlayerCreate from "./PlayerCreate.js";

export default{
    components: { PlayerList, PlayerCreate },
    template:
    `
        <player-list></player-list>
        <player-create></player-create>
        
    `
};