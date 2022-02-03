<template>
  <div class="main" ref="main">
    <section class="cont">
      <LandNav>
        <template v-slot:title> Welcome to <i>Briddle</i> </template>
        <template v-slot:btn> Sign Up or Sign In </template>
      </LandNav>
      <div class="nav-space"></div>
      <LandHeader>
        <template v-slot:title>Start testing your skils</template>
        <template v-slot:btn>Sign Up now</template>
      </LandHeader>

      <main>
        <LandSection>
          <template v-slot:title>Test your skills today</template>
          <template v-slot:info-text
            >We have quizez in tons of subjects for you so you can get ready for
            your upcoming test! Sign Up now to try all the quiz.</template
          >
        </LandSection>
      </main>
    </section>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import LandNav from "@/components/Landing page/LandNav.vue";
import LandHeader from "@/components/Landing page/LandHeader.vue";
import LandSection from "@/components/Landing page/LandSection.vue";
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  name: "Landing",
  components: { LandNav, LandHeader, LandSection, Footer },
  data() {
    return {
      changeBackgroundScroll: 350,
    };
  },
  methods: {
    changeBackground() {
      if (window.scrollY >= this.changeBackgroundScroll) {
        const main = document.querySelector(".cont") as HTMLInputElement;
        main.style.backgroundImage =
          'url("https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-21.jpg")';
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.changeBackground);
  },
});
</script>

<style scoped>
html {
  font-size: 10px;
}
.cont {
  background-image: url("../img/background1.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: all 1s;
}
.nav-space {
  height: 7rem;
  width: 100%;
}
</style>