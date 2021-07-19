<template>
  <div class="main-background">
    <div class="container px-0">
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="light"
      >
        <b-navbar-brand
          href="#"
          class="container"
        >
          <img
            class="logo"
            src="../img/logo.png"
          />
        </b-navbar-brand>
      </b-navbar>
    </div>
    <div class="container py-5">
      <slide-y-up-transition
        mode="out-in"
        origin="center top"
      >
        <router-view></router-view>
      </slide-y-up-transition>
    </div>
  </div>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "auth-layout",
  components: {
    SlideYUpTransition,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
    };
  },
};
</script>
<style scoped>
.logo {
  max-width: 100px;
}
.bg-light {
  background-color: #fff !important;
}
</style>