<script>
import PlayerList from "./PlayerList.vue";
import PlayerCreate from "./PlayerCreate.vue";

export default{
    components: { PlayerList, PlayerCreate },
    data(){
        return{
            players: [
                { name: 'John', score: 10, difference: 0, id: 1, position: 0 },
                { name: 'Jack', score: 11, difference: 0, id: 2, position: 0 },
                { name: 'Tripple J', score: 12, difference: 0, id: 3, position: 0 },
                { name: 'Bowen', score: 13, difference: 0, id: 4, position: 0 }
            ],
            newPlayer:''
        }
    },
    computed: {
        sortPlayersDesc() {
            let numberOfPlayers = this.players.length;
              this.players.sort((a, b) => b.score - a.score);
              for(let i = 0; i < numberOfPlayers; i++)
              {
                this.players[i].position = i+1;
              }
              let index = 0;
              for(let i = 0; i < numberOfPlayers; i++){
                if (index === 0) {
                    this.players[i].difference = 0;
                    index++;
                    i--;
                    continue;
                }
                if (index < numberOfPlayers ) {
                    this.players[index].difference = this.players[i].score - this.players[index].score;
                }
                if(index === numberOfPlayers - 1){
                    break;
                }
                index++;
              }
              return this.players;
        }
    },
    methods:{
        addPlayer(name, score){
            this.players.push({
                name: name, score: score, difference:0, id: this.players.length+1
            });
        },
        incrementResult(id){
            for(let i = 0; i < this.players.length; i++){
                if(this.players[i].id === id){
                    this.players[i].score++;
                }
            }
            // sortPlayersDesc;
        }
    }

};
</script>
<template>
    <PlayerList :players="sortPlayersDesc" @scoreList="incrementResult"></PlayerList>
    <PlayerCreate @createPlayer="addPlayer"></PlayerCreate>
</template>