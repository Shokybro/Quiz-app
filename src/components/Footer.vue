<template>
    <footer class="footer">
        <h1 class="text-center footer--text">Briddle</h1>
    </footer>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Footer",
})
</script>

<style scoped lang="scss">
.footer {
    width: 100%;
    height: 40vh;
    background-color: #333;
    padding-top: 5rem;
    &--text {
        color: white;
    }
}
</style>