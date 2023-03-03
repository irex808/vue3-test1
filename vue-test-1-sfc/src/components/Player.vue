<script>
export default{
    data(){
        return{
            id:0,
            name:''
        }
    },
    props:{
        player:Object
    },
    methods:{
        score(){
            this.id = this.player.id;
            this.name = this.player.name;
            this.$emit('scoreChanged', this.id, this.name )
        }
    }
}
</script>
<template>
        <section>
        <li class="p-2 flex justify-between items-center">
            {{ player.player.name }}     <span>{{ player.player.score }}</span>       {{ player.player.difference }} 
            <div class="justify-right px-3 py-3"> <button class="border border-gray-300 rounded px-2 py-2" @click="score">Smash the score UP !</button> </div>
        </li>
    </section>
</template>