<script>
export default {
    props:{
        message: String
    }
}
</script>
<template>
    <div class="border rounded-lg mx-2 my-2 flex justify-center">
        {{ message }}
    </div>
</template>