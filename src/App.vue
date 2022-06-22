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
        { name: "ITEM 2", id: 2, relations: [{ id: 300 }] },
        { name: "ITEM 14", id: 1, relations: [{ id: 500 }] },
        { name: "ITEM 2", id: 9, relations: [{ id: 900 }] },
        { name: "ITEM 14", id: 8, relations: [{ id: 700 }] },
        { name: "ITEM 21", id: 5, relations: [{ id: 600 }] },
        { name: "ITEM 3", id: 7, relations: [{ id: 400 }] },
      ],
      items2: [
        { name: "ITEM AD", id: 100, relations: [{ id: 6 }] },
        { name: "ITEM BE", id: 700, relations: [{ id: 2 }] },
        { name: "ITEM BW", id: 600, relations: [{ id: 5 }] },
        { name: "ITEM BN", id: 300, relations: [{ id: 9 }] },
        { name: "ITEM WW", id: 400, relations: [{ id: 7 }] },
        { name: "ITEM BA", id: 200, relations: [{ id: 3 }] },
        { name: "ITEM AA", id: 500, relations: [{ id: 1 }] },

        { name: "ITEM AE", id: 900, relations: [{ id: 9 }] },
      ],
    };
  },
  methods: {
    logElementCoords({ id }) {
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
