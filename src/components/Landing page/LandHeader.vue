<template>
    <header class="header">
        <h1 class="header--title text-white text-center mt-5">
            <slot name="title"></slot>
        </h1>
        <div class="header__cont">
            <router-link to="/sign" class="btn btn-dark header--btn"><slot name="btn"></slot></router-link>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "LandNav",
})
</script>

<style lang="scss" scoped>
html {
    font-size: 10px;
}
.header {
    width: 100%;
    height: 90vh;
    padding-top: 9rem;
    
    &__cont {
        display: inline-block;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 2rem;
    }
    &--btn {
        font-size: 1.7rem;
    }
}
</style>
