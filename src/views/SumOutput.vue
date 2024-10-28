<template>
  <div>
    <p v-if="numArray.length > 0">Введені числа: {{ numArray.join(" / ") }}</p>
    <h3>Сума ваших чисел:</h3>
    <p>Сума: {{ sum }}</p>
  </div>
</template>

<script>
export default {
  name: "SumOutputView",
  data() {
    return {
      sum: null,
      numArray: [],
    };
  },
  computed: {
    numbers() {
      return this.$store.getters.getNumbers;
    },
  },
  created() {
    this.processNumbers();
  },
  methods: {
    processNumbers() {
      if (this.numbers) {
        this.numArray = this.numbers.split("/").map(Number);
        this.sum = this.numArray.reduce((acc, val) => acc + val, 0);
      }
    },
  },
};
</script>
