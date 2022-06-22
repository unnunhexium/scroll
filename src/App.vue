<template>
  <div class="main-wrapper" id="main-wrapper">
    <ListOfItems
      ref="product-breakdown"
      class="list-of-elements__items"
      :elements="items"
      @log-element-coords="logElementCoords"
      :activeElement="activeIndex"
    />
    <ListOfItems
      ref="location-breakdown"
      class="list-of-elements__relations"
      :elements="items2"
      @log-element-coords="logElementCoords"
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
        { name: "ITEM 2", id: 6, relations: [{ id: 200 }] },
        { name: "ITEM 14", id: 3, relations: [{ id: 100 }] },

      ],
      items2: [
        { name: "ITEM A", id: 100, relations: [{ id: 6 }] },
        { name: "ITEM B", id: 200, relations: [{ id: 3 }] },
      ],
    };
  },
  methods: {
    logElementCoords({id}) {
      this.activeIndex = id;

      let scrollValueItems = document.querySelector(
        ".list-of-elements__items"
      ).scrollTop;

      let scrollValueRelations = document.querySelector(
        ".list-of-elements__relations"
      ).scrollTop;
      // console.log(scrollValueRelations);

      this.$nextTick(() => {
        let itemsListElement = document.querySelector(
          ".list-of-elements__items .list-of-elements__element--active"
        );
        let rect = itemsListElement.getBoundingClientRect();
        const { top, right } = rect;
        this.itemsY = top + 0.5 * 36 + scrollValueItems;
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
        this.relationsY = top + 0.5 * 36 + scrollValueRelations;
        this.relationsX = right - 289;

        console.log(
          "Active element of relations list coords: " +
            "top: " +
            this.relationsY +
            ", " +
            "left: " +
            this.relationsX
        );
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
