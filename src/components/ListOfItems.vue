<template>
  <ul class="list-of-items">
    <li
      v-for="item in items"
      :key="item.id"
      class="list-of-items__item"
      :name="item.name"
    >
      <button
        class="list-of-items__item--button"
        @click="$emit('print-element-info', item.id)"
      >
        {{ item.name }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListOfItems",
  props: {
    items: {
      type: Array,
      required: true,
    },
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
  overflow-y: scroll;

  &__item {
    list-style: none;
    margin-bottom: 10px;

    &--button {
      all: unset;
      cursor: pointer;
      width: 289px;
      height: 36px;
      border: 1px solid grey;
      box-sizing: border-box;
      text-align: center;
    }
  }
}
</style>
