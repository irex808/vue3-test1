<script>
import Player from "./Player.vue";
export default{
    components : { Player },
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
}
</script>
<template>
    <section v-show="players.length">
        <ul class="border border-gray-600 divide-y divide-gray-600">
            <Player 
            v-for="player in players" 
            :key="player.id" 
            :player="player"
            @score="score"
            >
            </Player>
        </ul>
    </section>
</template>