<script>
export default{
props:{
    name: String
},
methods:{
    close(){
        this.$emit('closeModal');
    }
}
}
</script>
<template>
<div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span @click="close" class="close">&times;</span>
      <p>{{ name }} has moved one place UP!</p>
    </div>

  </div>
</template>