<template>
  <div id="app">
    <ul>
      <card v-for="(c, i) in cardList" :key="i + 1" :props="c.number" @click="select" />
    </ul>
  </div>
</template>

<script>
import data from "./data";
// import data2 from "./data";
import card from "./components/card";

export default {
  name: "app",
  components: {
    card
  },
  data: function() {
    return {
      cardList: null,
      data1: data,
      data2: null
    };
  },
  created: function() {
    this.data2 = this.data1.map(item => {
      return {
        ...item,
        id: item.id + 10
      };
    });
    this.shuffle(this.data1, this.data2);
    setTimeout(this.gameStart, 3000);
  },
  methods: {
    shuffle: function(data1, data2) {
      let arr = data1.concat(data2);
      var j, x, i;
      for (i = arr.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
      }
      this.cardList = arr;
    },
    gameStart: function() {
      for (let i = 1; i < this.data1.length + 1; i++) {
        let name = ".card" + i;
        let nameAll = document.querySelectorAll(name);
        nameAll[0].parentNode.classList.add("rotate");
        nameAll[1].parentNode.classList.add("rotate");
      }
    },
    select: function(c) {
      if (c !== undefined) {
        console.log("부모", c);
      }
    }
  }
};
</script>
