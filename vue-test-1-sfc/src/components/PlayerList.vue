<script>
import Player from "./Player.vue";
export default {
  components: { Player },
  data() {
    return {
      id: 0,
      name: "",
    };
  },
  computed:{
    something() {
    console.log('LEVEL LIST OF PLAYERS: ' + this.players);
    }
  },
  props: {
    players: Array,
  },
  methods: {
    onScore(id) {
      this.id = id;
      this.$emit("onScoreList", this.id);
    }
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
        @scoreChanged="onScore"
      >
      </Player>
    </ul>
  </section>
</template>
<!--  -->
