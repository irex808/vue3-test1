<script>
import PlayerList from "./PlayerList.vue";
import PlayerCreate from "./PlayerCreate.vue";
import FlashMessage from "./FlashMessage.vue";

export default {
  components: { PlayerList, PlayerCreate, FlashMessage },
  data() {
    return {
      players: [
        {
          id: 1,
          player: { name: "John", score: 13, difference: 0, position: 0 },
        },
        {
          id: 2,
          player: { name: "Jack", score: 12, difference: 0, position: 0 },
        },
        {
          id: 3,
          player: { name: "Tripple J", score: 11, difference: 0, position: 0 },
        },
        {
          id: 4,
          player: { name: "Bowen", score: 10, difference: 0, position: 0 },
        },
      ],
      positions: [
        { id: 1, indexPosition: 0 },
        { id: 2, indexPosition: 1 },
        { id: 3, indexPosition: 2 },
        { id: 4, indexPosition: 3 },
      ],
      newPlayer: "",
      open: false,
      message: "",
    };
  },
  computed: {
    sortPlayersAsc() {
      let numberOfPlayers = this.players.length;
      this.sortPlayers();
      for (let i = 0; i < numberOfPlayers; i++) {
        this.players[i].player.position = i + 1;
      }
      let index = 0;
      for (let i = 0; i < numberOfPlayers; i++) {
        if (index === 0) {
          this.players[i].player.difference = 0;
          index++;
          i--;
          continue;
        }
        if (index < numberOfPlayers) {
          this.players[index].player.difference =
            this.players[i].player.score - this.players[index].player.score;
        }
        if (index === numberOfPlayers - 1) {
          break;
        }
        index++;
      }
      return this.players;
    },
  },
  methods: {
    sortPlayers() {
      this.players.sort((a, b) => b.player.score - a.player.score);
    },
    addPlayer(name, score) {
      let idNew = this.players.length + 1;
      this.players.push({
        id: idNew,
        player: {
          name: name,
          score: score,
          difference: 0,
        },
      });
      this.sortPlayers();
      let positionNew = this.findCurrentPosition(idNew, this.players)
      this.positions.push({
        id: idNew,
        indexPosition: positionNew,
      });

      let words = " is a new Player!";
      this.showFlashMessage(name, words);
    },
    incrementResult(id) {
      for (let i = 0; i < this.players.length; i++) {
        if (this.players[i].id === id) {
          this.players[i].player.score++;
          this.sortPlayers();

          let currentPlayerPosition = this.findCurrentPosition(id, this.players);

          let oldPlayerPositionObj = this.positions.find((el) => el.id === id);
          let oldPlayerPosition = oldPlayerPositionObj.indexPosition;

          if (currentPlayerPosition !== oldPlayerPosition) {
            for (let j = 0; j < this.players.length; j++) {
              let playerId = this.players[j].id;

              let oldPlayerIdPositionObj = this.positions.find((el) => el.id === playerId);
              let playerIdOldPosition = oldPlayerIdPositionObj.indexPosition;

              if (j !== playerIdOldPosition) {
                const idPosition = (el) => {
                  if (el.id === playerId) {
                    el.indexPosition = j;
                  }
                  return el;
                };
                let stare = this.positions.filter(idPosition);
              }
            }
            let words = " has moved up on a board!";
            this.showFlashMessage(this.players[currentPlayerPosition].player.name, words);
          }
        }
      }
    },
    findCurrentPosition(id, list) {
      const indexOfId = (el) => el.id === id;
      let positionNew = list.findIndex(indexOfId);
      return positionNew;
    },
    showFlashMessage(name, words) {
      this.open = true;
      this.message = name + words;
      setTimeout(() => (this.open = false), 1200);
    },
  },
};
</script>
<template>
  <div class="container inline-block-center">
    <PlayerList
      :players="sortPlayersAsc"
      @onScoreList="incrementResult"
    ></PlayerList>
    <div class="mx-2 flex justify-center">
      <PlayerCreate @createPlayer="addPlayer"></PlayerCreate>
    </div>
    <FlashMessage v-if="this.open" :message="message"></FlashMessage>
  </div>
</template>
