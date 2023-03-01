<script>
import Player from "./Player.vue";
import Animation from "./Animation.vue";
export default {
  components: { Player, Animation },
  data() {
    return {
      id: 0,
      name: "",
      open: false,
    };
  },
  props: {
    players: Array,
  },
  methods: {
    score(id) {
      this.id = id;
      this.$emit("scoreList", this.id);
    },
    showModal(name){
        this.name = name;
        console.log(this.name);
        this.open = !this.open;
    }
  },
};
</script>
<template>
<Animation v-if="this.open" :name="this.name" @closeModal="showModal"></Animation>
  <section v-show="players.length">
    <ul class="border border-gray-600 divide-y divide-gray-600">
      <Player
        v-for="player in players"
        :key="player.id"
        :player="player"
        @score="score"
        @positionUp="showModal"
      >
      </Player>
    </ul>
  </section>
</template>
<!--  -->
