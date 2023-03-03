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
        <li class="p-2 h-28 grid grid-cols-4 content-start justify-items-center">
            <div class="pt-8"> {{ player.player.name }} </div>     <div class="pt-8">{{ player.player.score }}</div>     <div class="pt-8"> {{ player.player.difference }} </div>
            <div class="justify-right px-3 py-3"> <button class="border border-gray-300 rounded px-2 py-2" @click="score">Smash UP !</button> </div>
        </li>
    </section>
</template>