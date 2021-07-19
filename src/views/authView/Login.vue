<template>
  <div>
    <div
      v-if="failLogin"
      class="container mb-5"
    >
      <b-alert
        show
        variant="danger"
        style="text-transform: capitalize;"
      >{{ this.errMsg }}</b-alert>
    </div>
    <div
      v-if="notification"
      class="container mb-5"
    >
      <b-alert
        show
        variant="danger"
        style="text-transform: capitalize;"
      >{{ messageNotif }}</b-alert>
    </div>
    <div class="container py-3 px-0">
      <div class="row">
        <div class="col-md-6 py-5 d-none d-sm-none d-md-none d-lg-block">
          <div class="mt-auto">
            <img
              class="login-icon"
              src="../../img/undraw_online_payments_luau.svg"
            />
          </div>
        </div>
        <div class="card col-md-6 px-3 pb-3 mx-sm-auto mx-md-0 ml-md-auto">
          <div class="login-profile-container text-center">
            <img
              class="profile"
              src="../../img/undraw_profile_pic_ic5t.svg"
            />
          </div>

          <b-form @submit="submit">
            <b-form-group
              id="input-group-1"
              label="Username:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                placeholder="Enter username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.passowrd"
                type="password"
                placeholder="Enter Password"
                required
              ></b-form-input>
            </b-form-group>

            <b-button
              type="submit"
              block
              variant="primary"
            >Submit</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "../../util/api.js";
//import jwt from 'jsonwebtoken'
export default {
  props: ["notif", "msg"],
  data() {
    return {
      notification: this.notif,
      messageNotif: this.msg,
      form: {
        username: "",
        password: "",
      },
      failLogin: false,
      errMsg: null,
    };
  },

  methods: {
    submit() {
      sessionStorage.setItem("user", this.form.username);
      this.$router.push("/home");
    },
    /*
    submit() {
      event.preventDefault();
      this.notification = false;
      this.failLogin = false;
      axios
        .post("/api/auth/authenticate", this.form)
        .then((resp) => {
          if (resp.data.isRandPass) {
            console.log(resp.data);
            //return;
            const token = resp.data.resetPassToken;
            this.$router.push({
              name: "ResetPassword",
              params: { token },
            });
          } else if (!resp.data.isRandPass) {
            if (resp.data.jwt) {
              localStorage.setItem("token", resp.data.jwt);
              this.$router.push("/home");
            } else {
              this.failLogin = true;
            }
          }
        })
        .catch((err) => {
          console.log(err);
          this.failLogin = true;
          err?.response.status === 401
            ? (this.errMsg = "Wrong username or password")
            : err?.response.status === 423
            ? (this.errMsg = "User is locked please contant administrator")
            : (this.errMsg = err);
        });
    },*/
  },
};
</script>
<style scoped>
.card {
  box-sizing: border-box;
  max-width: 500px;
}

form {
  margin-top: -80px;
}

.form-control:focus {
  box-shadow: none;
}
.profile {
  width: 200px;
}
.login-profile-container {
  transform: translateY(-40%);
}
.login-icon {
  max-width: 500px;
}
.text-danger {
  font-weight: bold;
  cursor: pointer;
}
</style>
