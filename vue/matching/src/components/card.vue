<template>
  <li class="card">
    <span :class="[className]" @click="select">{{ value }}</span>
  </li>
</template>

<script>
export default {
  name: "card",
  props: ["props"],
  data: function() {
    return {
      value: this.props,
      className: "card" + this.props
    };
  },
  methods: {
    select(e) {
      this.$emit("click", e.target.className);
    }
  }
};
</script>
