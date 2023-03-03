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
        <li class="p-2 grid grid-cols-4  align-middle justify-items-center">
            <span class="pt-6"> {{ player.player.name }} </span>     <span class="pt-6">{{ player.player.score }}</span>     <span class="pt-6"> {{ player.player.difference }} </span>
            <div class="justify-right px-3 py-3"> <button class="border border-gray-300 rounded px-2 py-2" @click="score">Smash UP !</button> </div>
        </li>
    </section>
</template>