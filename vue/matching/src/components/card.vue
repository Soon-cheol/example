<template>
  <li @click="select">
    <span :class="[className]">{{ value }}</span>
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
      this.$emit("click", e.target.childNodes[0].className);
    }
  }
};
</script>
