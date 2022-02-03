<template>
  <div>
    <div class="box">
        <h1 class="text-center text-white mb-3">{{ currentTitle }}</h1>
      <div class="signUp">
          <div class="input-group mb-3">
        <input
        v-model="username"
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <input
        v-model="password"
        @input="checkChar"
          type="password"
          class="form-control password"
          placeholder="Password"
          aria-label="password"
          aria-describedby="basic-addon1"
        />
      </div>
      <p class="text-danger char-check">Password must be 6 characters</p>
      <div class="input-group mb-2">
        <input
        @input="checkSecondPass"
          type="password"
          class="form-control rePassword"
          placeholder="re-type password"
          aria-label="password"
          aria-describedby="basic-addon1"
        />
      </div>
      <p class="text-danger pass-alert">Password doesn't match</p>
      <button @click="goToSignIn" type="submit" class="btn btn-outline-dark singUp-btn">Sign Up</button>
        <p class="text-white text-center mt-2">Already have an account <span @click="signIn" class="text-primary link">click here</span></p>
      </div>


      <div class="signIn">
          <div class="input-group mb-3">
        <input
        v-model="username"
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <input
        v-model="password"
        @input="checkChar"
          type="password"
          class="form-control password"
          placeholder="Password"
          aria-label="password"
          aria-describedby="basic-addon1"
        />
      </div>
      <button @click="goToSignIn" type="submit" class="btn btn-outline-dark">Log in</button>
      <p class="text-white text-center mt-2">Don't have an account <span @click="signUp" class="text-primary link">click here</span></p>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name: "Sign",
    data (): any {
        return {
            username: "",
            password: "",
            currentTitle: "Sign Up",
            leave1: false,
            leave2: false
        }
    },
    methods: {
        checkSecondPass(): void {
            const rePassword = document.querySelector('.rePassword') as HTMLInputElement;
            const passAlert = document.querySelector('.pass-alert') as HTMLInputElement;
            const passwordInput = document.querySelector('.password') as HTMLInputElement;

            const password: String = passwordInput.value;
            const rePasswordValue: String = rePassword.value;

            if (password === rePasswordValue) {
                passAlert.style.display = 'none'
                this.leave1 = true
            }
            else {
                passAlert.style.display = 'block'
                this.leave1 = false
            }
        },
        checkChar(): void {
            const passwordInput = document.querySelector('.password') as HTMLInputElement;
            let passLength = 0

            const charCkeck = document.querySelector('.char-check') as HTMLInputElement

            for (let i = 0; i < passwordInput.value.length; i++) {
                passLength++
            }
            if (passLength < 6) {
                charCkeck.style.display = 'block'
                this.leave2 = false
            }
            else {
                charCkeck.style.display = 'none'
                this.leave2 = true
            }
        },
        goToSignIn(): void {
            if (this.leave1 === true && this.leave2 === true) {
                this.signIn();
            }
        },
        signIn(): void {
            const signIn = document.querySelector('.signIn') as HTMLInputElement;
            const signUp = document.querySelector('.signUp') as HTMLInputElement;
            signIn.style.display = 'block';
            signUp.style.display = 'none'
            this.currentTitle = 'Log In'
        },
        signUp(): void {
            const signIn = document.querySelector('.signIn') as HTMLInputElement;
            const signUp = document.querySelector('.signUp') as HTMLInputElement;
            signIn.style.display = 'none';
            signUp.style.display = 'block'
            this.currentTitle = 'Sign Up'
        }
    },
});
</script>

<style scoped lang="scss">
html {
  font-size: 16px;
}
.box {
  background-color: rgb(82, 82, 82);
  padding: 1rem;
  width: 20rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pass-alert {
    display: none;
}
.char-check {
    display: none;
}
button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    // display: none;
}
.signIn {
    display: none;
}

.link {
    cursor: pointer;
}
</style>