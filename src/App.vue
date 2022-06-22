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
      :elements="items2"
      @log-element-coords="logElementCoords"
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
        { name: "ITEM 1", id: 1, relations: [{ id: 20 }] },
        { name: "ITEM 2", id: 2, relations: [{ id: 1 }] },
        { name: "ITEM 3", id: 3, relations: [{ id: 12 }] },
        { name: "ITEM 4", id: 4, relations: [{ id: 11 }] },
        { name: "ITEM 5", id: 5, relations: [{ id: 4 }] },
        { name: "ITEM 6", id: 6, relations: [{ id: 5 }] },
        { name: "ITEM 7", id: 7, relations: [{ id: 15 }] },
        { name: "ITEM 8", id: 8, relations: [{ id: 16 }] },
        { name: "ITEM 9", id: 9, relations: [{ id: 7 }] },
        { name: "ITEM 10", id: 10, relations: [{ id: 14 }] },
        { name: "ITEM 11", id: 11, relations: [{ id: 8 }] },
        { name: "ITEM 12", id: 12, relations: [{ id: 9 }] },
        { name: "ITEM 13", id: 13, relations: [{ id: 13 }] },
        { name: "ITEM 14", id: 14, relations: [{ id: 2 }] },
        { name: "ITEM 15", id: 15, relations: [{ id: 3 }] },
        { name: "ITEM 16", id: 16, relations: [{ id: 18 }] },
        { name: "ITEM 17", id: 17, relations: [{ id: 19 }] },
        { name: "ITEM 18", id: 18, relations: [{ id: 6 }] },
        { name: "ITEM 19", id: 19, relations: [{ id: 17 }] },
        { name: "ITEM 20", id: 20, relations: [{ id: 10 }] },
      ],
      items2: [
        { name: "ITEM A", id: 1, relations: [{ id: 6 }] },
        { name: "ITEM B", id: 2, relations: [{ id: 3 }] },
        { name: "ITEM C", id: 3, relations: [{ id: 12 }] },
        { name: "ITEM D", id: 4, relations: [{ id: 7 }] },
        { name: "ITEM E", id: 5, relations: [{ id: 1 }] },
        { name: "ITEM F", id: 6, relations: [{ id: 19 }] },
        { name: "ITEM G", id: 7, relations: [{ id: 20 }] },
        { name: "ITEM H", id: 8, relations: [{ id: 8 }] },
        { name: "ITEM I", id: 9, relations: [{ id: 9 }] },
        { name: "ITEM J", id: 10, relations: [{ id: 11 }] },
        { name: "ITEM K", id: 11, relations: [{ id: 2 }] },
        { name: "ITEM L", id: 12, relations: [{ id: 10 }] },
        { name: "ITEM M", id: 13, relations: [{ id: 15 }] },
        { name: "ITEM N", id: 14, relations: [{ id: 13 }] },
        { name: "ITEM O", id: 15, relations: [{ id: 5 }] },
        { name: "ITEM P", id: 16, relations: [{ id: 4 }] },
        { name: "ITEM R", id: 17, relations: [{ id: 16 }] },
        { name: "ITEM S", id: 18, relations: [{ id: 18 }] },
        { name: "ITEM T", id: 19, relations: [{ id: 17 }] },
        { name: "ITEM U", id: 20, relations: [{ id: 14 }] },
      ],
    };
  },
  methods: {
    logElementCoords(id) {
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
        // document
        //   .querySelector(".list-of-elements__relations")
        //   .scrollTo(0, this.relationsY);
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
