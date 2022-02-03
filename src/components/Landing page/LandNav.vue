<template>
    <div class="nav">
        <h1 class="nav--title">
            <slot name=title></slot>
        </h1>
        <div class="nav__links">
            <router-link to="/Sign" class="btn btn-primary nav--btn">
            <slot name="btn"></slot>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "LandNav"
})
</script>

<style scoped lang="scss">
html {
    font-size: 10px;
}
.nav {
    position: fixed;
    height: 5rem;
    width: 100%;
    background-color: rgba(48, 48, 48, .9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    &--title {
        color: white;
        font-size: 2.3rem;
    }

    &--btn {
        font-size: 1.5rem;
    }
}
</style>