<template>
  <li :class="{ card }">
    <span>{{ value }}</span>
  </li>
</template>

<script>
export default {
  name: "card",
  props: ["props"],
  data: function() {
    return {
      value: this.props,
      card: 1231
    };
  }
};
</script>
