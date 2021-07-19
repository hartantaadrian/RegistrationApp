<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1>Welcome</h1>
    </div>
    <div class="text-center mt-5">
      <img
        class="login-icon mt-5"
        src="../../img/undraw_Credit_card_payment_re_o911.svg"
      />
    </div>
  </div>
</template>
<script>
//import jwt from "jsonwebtoken";
export default {
  data() {
    return {
      user: "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    getUser() {
      //const token = jwt.decode(localStorage.getItem("token"));
      //this.user = token.sub;
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>
<style scoped>
.login-icon {
  max-width: 500px;
}
</style>
