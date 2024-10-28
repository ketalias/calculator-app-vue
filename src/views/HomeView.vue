<template>
  <div>
    <h3>Введіть числа для обчислення:</h3>
    <input type="text" v-model="numbers" placeholder="3/4/55/21/69" />
    <button @click="storeNumbers">Обчислити</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      numbers: "",
    };
  },
  methods: {
    storeNumbers() {
      this.$store.dispatch("updateNumbers", this.numbers);
      this.$router.push("/sumOutput");
    },
  },
};
</script>
