<script>
export default {
    props:{
        modalActive: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        closeModal(){
            this.$emit('onCloseModal');
        }
    }
};
</script>
<template>
  <div v-show="modalActive"
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
  >
    <div v-if="modalActive"
     class="p-4 bg-white self-start mt-32 max-w-screen-md">
        <slot />
        <button @click="closeModal" class="text-white mt-8 bg-blue-500 py-2 px-6"
        
        >Close</button>
    </div>
  </div>
</template>
