<script>
import { store } from './store.js'
export default{
    watch: {
    'player.position': {
      handler(newChanged) {
        store.count++;
        if(store.count % 2 === 0){
            this.changePosition();
        }
      },
      deep: true,
    },
  },
    data(){
        return{
            id:0,
            name:'',
            store
        }
    },
    props:{
        player:Object
    },
    methods:{
        score(){
            this.id = this.player.id
            this.name = this.player.name
            this.$emit('score', this.id, this.name )
        },
        changePosition(){
            this.name = this.player.name;
            this.$emit('positionUp', this.name);
        }
    }
}
</script>
<template>
        <section>
        <li class="p-2 flex justify-between items-center">
            {{ player.name }}     <span>{{ player.score }}</span>       {{ player.difference }} 
            <div class="justify-right px-3 py-3"> <button class="border border-gray-300 rounded px-2 py-2" @click="score">Smash the score UP !</button> </div>
        </li>
    </section>
</template>