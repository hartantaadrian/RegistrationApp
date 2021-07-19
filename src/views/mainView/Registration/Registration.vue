<template>
  <div class="container mt-3 ">
    <div
      v-if="err.show"
      class=" m-2"
    >
      <b-alert
        show
        variant="danger"
        style="text-transform: capitalize;"
      >{{ err.msg }}</b-alert>
    </div>
    <div
      v-if="success.show"
      class="m-2"
    >
      <b-alert
        show
        variant="success"
        style="text-transform: capitalize;"
      >{{ success.msg }}</b-alert>
    </div>
    <div class="mx-5">
      <div class="p-3 bg-info text-white">
        <h2>Registration</h2>
      </div>
      <div class=" card p-3">
        <registration-form @submited="onClickChild"></registration-form>
      </div>
    </div>

  </div>
</template>
<script>
import RegistrationForm from "../../../components/Registration/RegistrationForm.vue";

//import https from "https";
export default {
  components: { RegistrationForm },
  data() {
    return {
      form: {},
      msg: {},
      success: { show: false, msg: "" },
      isLoading: false,
      err: { show: false, msg: "" },
    };
  },
  methods: {
    onClickChild(value) {
      console.log(value);
      if (value.status !== 201) {
        this.err.show = true;
        this.err.msg = "Registration Failed";
      } else if (value.status === 201) {
        this.success.show = true;
        this.success.msg = "Registration Success";
      } // someValue
    },
  },
};
</script>