<template>
  <div class="main-wrapper" id="main-wrapper">
    <ListOfItems
      class="list-of-elements__items"
      :elements="items"
      @log-element-coords="logElementCoords"
      ref="items"
      :activeElement="activeIndex"
    />
    <ListOfItems
      class="list-of-elements__relations"
      :elements="relations"
      ref="relations"
      :activeElement="activeIndex"
    />
  </div>
</template>

<script lang="ts">
import ListOfItems from "@/components/ListOfElements.vue";

export default {
  name: "App",
  components: {
    ListOfItems,
  },
  data() {
    return {
      itemsX: "",
      itemsY: "",
      relationsX: "",
      relationsY: "",
      activeIndex: 0,
      items: [
        { name: "ITEM 1", id: 1 },
        { name: "ITEM 2", id: 2 },
        { name: "ITEM 3", id: 3 },
        { name: "ITEM 4", id: 4 },
        { name: "ITEM 5", id: 5 },
        { name: "ITEM 6", id: 6 },
        { name: "ITEM 7", id: 7 },
        { name: "ITEM 8", id: 8 },
        { name: "ITEM 9", id: 9 },
        { name: "ITEM 10", id: 10 },
        { name: "ITEM 11", id: 11 },
        { name: "ITEM 12", id: 12 },
        { name: "ITEM 13", id: 13 },
        { name: "ITEM 14", id: 14 },
        { name: "ITEM 15", id: 15 },
        { name: "ITEM 16", id: 16 },
        { name: "ITEM 17", id: 17 },
        { name: "ITEM 18", id: 18 },
        { name: "ITEM 19", id: 19 },
        { name: "ITEM 20", id: 20 },
      ],
      relations: [
        { name: "RELATION A", id: 2 },
        { name: "RELATION B", id: 3 },
        { name: "RELATION C", id: 4 },
        { name: "RELATION D", id: 1 },
        { name: "RELATION E", id: 6 },
        { name: "RELATION F", id: 5 },
        { name: "RELATION G", id: 10 },
        { name: "RELATION H", id: 7 },
        { name: "RELATION I", id: 11 },
        { name: "RELATION J", id: 19 },
        { name: "RELATION K", id: 8 },
        { name: "RELATION L", id: 12 },
        { name: "RELATION M", id: 13 },
        { name: "RELATION N", id: 9 },
        { name: "RELATION O", id: 14 },
        { name: "RELATION P", id: 16 },
        { name: "RELATION R", id: 15 },
        { name: "RELATION S", id: 17 },
        { name: "RELATION T", id: 18 },
        { name: "RELATION U", id: 20 },
      ],
    };
  },
  methods: {
    logElementCoords(id) {
      this.activeIndex = id;

      let listElementHeight = document
        .querySelector(".list-of-elements__button")
        .getBoundingClientRect().height;

      let listElementWidth = document
        .querySelector(".list-of-elements__button")
        .getBoundingClientRect().width;

      let scrollValueItems = document.querySelector(
        ".list-of-elements__items"
      ).scrollTop;

      let scrollValueRelations = document.querySelector(
        ".list-of-elements__relations"
      ).scrollTop;

      this.$nextTick(() => {
        let itemsListElement = document.querySelector(
          ".list-of-elements__items .list-of-elements__element--active"
        );
        let rect = itemsListElement.getBoundingClientRect();
        const { top, right } = rect;
        this.itemsY = top + 0.5 * listElementHeight + scrollValueItems;
        this.itemsX = right;

        console.log(
          "Active element of items list coords: " +
            "top: " +
            this.itemsY +
            ", " +
            "left: " +
            this.itemsX
        );
      });

      this.$nextTick(() => {
        let relationsListElement = document.querySelector(
          ".list-of-elements__relations .list-of-elements__element--active"
        );

        let rect = relationsListElement.getBoundingClientRect();
        const { top, right } = rect;
        this.relationsY = top + 0.5 * listElementHeight + scrollValueRelations;
        this.relationsX = right - listElementWidth;

        console.log(
          "Active element of relations list coords: " +
            "top: " +
            this.relationsY +
            ", " +
            "left: " +
            this.relationsX
        );

        document
          .querySelector(".list-of-elements__relations")
          .scrollTo(0, this.relationsY - 0.5 * listElementHeight);
      });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Arial;
}

.main-wrapper {
  display: flex;
  justify-content: center;
}

.list-of-elements__relations {
  padding-left: 100px;
}
</style>
