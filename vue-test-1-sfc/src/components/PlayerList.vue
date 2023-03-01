<script>
import Player from "./Player.vue";
import Animation from "./Animation.vue";
export default {
  components: { Player, Animation },
  watch: {

    players: {
      handler(newChanged, oldChanged) {
        console.log("It had changed!");
      },
      deep: true,
    },
  },
  data() {
    return {
      id: 0,
      namen: "",
      open: false,
      changed: this.players,
    };
  },
  props: {
    players: Array,
    name: "",
  },
  methods: {
    score(id, name) {
      this.id = id;
      this.namen = name;
      this.$emit("scoreList", this.id);
    },
  },
};
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
<!-- <Animation v-if="this.open"></Animation> -->
