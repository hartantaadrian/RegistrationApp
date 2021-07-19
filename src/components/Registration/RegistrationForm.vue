<template >
  <b-form @submit="onSubmit">
    <b-form-group
      id="input-group-1"
      label="Uername :"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="form.username"
        placeholder="Enter username"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-2"
      label="Password :"
      label-for="input-2"
    >
      <b-form-input
        id="input-2"
        v-model="form.password"
        placeholder="Enter password"
        type="password"
        required
      ></b-form-input>
    </b-form-group>

    <div v-if="!isLoading">
      <b-button
        type="submit"
        variant="primary"
      >Submit</b-button>
    </div>
    <div v-else-if="isLoading">
      <b-spinner
        variant="primary"
        label="Spinning"
      ></b-spinner>
    </div>

  </b-form>
</template>

<script>
import axios from "../../util/api";
export default {
  name: "RegistrationForm",
  props: {},
  data() {
    return {
      data: null,
      isSuccess: false,
      form: {},
      isLoading: false,
    };
  },
  mounted() {},
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.isLoading = true;
      const { username, password } = this.form;
      axios.post("/registration", { username, password }).then((result) => {
        this.$emit("submited", result);
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped>
</style>