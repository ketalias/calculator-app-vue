<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <div v-if="error" style="color: red">{{ error }}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      if (this.username === "addmin" && this.password === "0000") {
        localStorage.setItem("authenticated", "true");
        this.$router.push({ name: "SecretPage" });
      } else {
        this.error = "Invalid username or password";
      }
    },
  },
};
</script>
