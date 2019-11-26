<template>
  <div id="app">
    <ul>
      <card v-for="(c, i) in cardList" :key="i" :props="c.number" />
    </ul>
  </div>
</template>

<script>
import data1 from "./data";
import data2 from "./data";
import card from "./components/card";

export default {
  name: "app",
  components: {
    card
  },
  data: function() {
    return {
      cardList: null
    };
  },
  created: function() {
    this.shuffle(data1, data2);
  },
  methods: {
    shuffle(data1, data2) {
      let arr = data1.concat(data2);
      var j, x, i;
      for (i = arr.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
      }
      this.cardList = arr;
    }
  }
};
</script>
