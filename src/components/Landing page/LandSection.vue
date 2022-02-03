<template>
    <section class="info">
        <h1 class="info--title"><i><slot name="title"></slot></i></h1>

        <div class="info__container">
            <div class="info__panel-left info__panel">
                <h1 class="info--text"><slot name="info-text"></slot></h1>
            </div>
            <div class="info__panel-right info__panel"></div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "LandSection",

})
</script>

<style lang="scss">
// html {
//     font-size: 10px;
// }
.info {
    margin-top: 6rem;

    &--title {
        text-align: center;
        font-size: 3rem;
    }

    &__container {
        margin-top: 2rem;
        display: flex;
    }

    &__panel-left {
        // background-color: blueviolet;
        position: relative;
    }
    &__panel-right {
        // background-color: orange;
        position: relative;
    }

    &__panel {
        width: 50%;
        height: 80vh;
    }

    &--text {
        font-size: 2.5rem;
        font-weight: 350;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%);
    }
}
</style>