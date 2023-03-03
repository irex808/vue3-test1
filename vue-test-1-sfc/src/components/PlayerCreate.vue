<script>
export default {
  data() {
    return {
      name: "",
      score: 0,
      placeHolder: "Add new player"
    };
  },
  methods: {
    addPlayer() {
      let score = parseInt(this.score);

      if (isNaN(score)) {
        score = 0;
      }
      if (this.name.length <= 2) {
        return;
      }

      this.$emit("createPlayer", this.name, score);
      this.name = "";
      this.score = 0;
    },
  },
};
</script>
<template>
  <form @submit.prevent="addPlayer" class="mx-auto">
    <div
      class="grid grid-cols-3 justify-items-stretch border border-gray-600 bg-white text-black mt-3"
    >
      <input
        v-model="name"
        :placeholder="this.placeHolder"
        @focus="this.placeHolder = ''"
        @focusout="this.placeHolder = 'Add new player'"
        class="border-r p-2 max-w-xs "
      />
      <input
        v-model="score"
        @focus="this.score = ''"
        @focusout="this.score = 0"
        class="border-r p-2 "
      />
      <button
        type="submit"
        class="border rounded-lg border-gray-300 text-white bg-red-600 hover:bg-red-700 "
      >
        Add
      </button>
    </div>
  </form>
</template>
