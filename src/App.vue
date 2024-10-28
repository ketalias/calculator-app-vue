<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/sumOutput">Sum Output</router-link> |
      <router-link to="/secretPage">Secret Page</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
