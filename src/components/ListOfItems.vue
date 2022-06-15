<template>
  <ul class="list-of-items">
    <li v-for="item in items" :key="item.id" class="list-of-items__item">
      <ListItem :name="item.name" />
    </li>
  </ul>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  name: "ListOfItems",
  components: {
    ListItem,
  },
  data() {
    return {
      items: [
        { name: "Test 1", id: 1 },
        { name: "Test 2", id: 2 },
        { name: "Test 3", id: 3 },
        { name: "Test 4", id: 4 },
        { name: "Test 5", id: 5 },
        { name: "Test 6", id: 6 },
        { name: "Test 7", id: 7 },
        { name: "Test 8", id: 8 },
        { name: "Test 9", id: 9 },
        { name: "Test 10", id: 10 },
        { name: "Test 11", id: 11 },
        { name: "Test 12", id: 12 },
        { name: "Test 13", id: 13 },
        { name: "Test 14", id: 14 },
        { name: "Test 15", id: 15 },
        { name: "Test 16", id: 16 },
        { name: "Test 17", id: 17 },
        { name: "Test 18", id: 18 },
        { name: "Test 19", id: 19 },
        { name: "Test 20", id: 20 },
      ],
    };
  },
  methods: {
    update() {
      //LIST ITEM LOCATION RELATIVE TO TOP AND LEFT OF WINDOW WHEN SCROLLING
      let elements = document.querySelectorAll("li");
      elements.forEach((element, index) => {
        let rect = element.getBoundingClientRect();
        const { top, left } = rect;
        let Y = top + 0.5 * 36;
        let X = left + 289;
        console.log(
          "SCROLLING POSITION " +
            index +
            ": " +
            "top: " +
            Y +
            ", " +
            "left: " +
            X
        );
      });
      //TO DO requestAnimationFrame
    },
  },
  mounted() {
    let elements = document.querySelectorAll("li");
    elements.forEach((element, index) => {
      let rect = element.getBoundingClientRect();
      const { top, left } = rect;
      let Y = top + 0.5 * 36;
      let X = left + 289;
      console.log(
        "BASIC POSITION " + index + ": " + "top: " + Y + ", " + "left: " + X
      );
    });

    const listOfItems = document.querySelector(".list-of-items");
    listOfItems.addEventListener("scroll", this.update);
  },
};
</script>

<style lang="scss" scoped>
.list-of-items {
  list-style: none;
  height: 50vh;
  overflow: scroll;
  // margin-top: 34px;

  &__item {
    background: lightgray;
    // margin-bottom: 16px;
  }
}
</style>
