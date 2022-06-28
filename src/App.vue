<template>
  <div class="main-wrapper" id="main-wrapper">
    <div id="svg-container">
      <svg width="100%"></svg>
    </div>
    <ListOfElements
      ref="product-breakdown"
      class="list-of-elements__items"
      :elements="items1"
      @set-active-element="setActiveElement"
      :activeElement="activeIndex"
      @scroll="recalculate"
    />
    <ListOfElements
      ref="location-breakdown"
      class="list-of-elements__relations"
      :elements="items2"
      @set-active-element="setActiveElement"
      :activeElement="activeIndex"
      @scroll="recalculate"
    />
  </div>
</template>

<script lang="ts">
import ListOfElements from '@/components/ListOfElements.vue';
import { setConnection, calculations } from '@/utils/connections';

export default {
  name: 'App',
  components: {
    ListOfElements,
  },
  data() {
    return {
      activeIndex: 0,
      items1: [
        { name: 'ITEM 2', id: 6, relations: [{ id: 200 }] },
        { name: 'ITEM 14', id: 3, relations: [{ id: 100 }] },
        { name: 'ITEM 2', id: 2, relations: [{ id: 300 }] },
        { name: 'ITEM 14', id: 1, relations: [{ id: 500 }] },
        { name: 'ITEM 2', id: 9, relations: [{ id: 900 }] },
        { name: 'ITEM 14', id: 8, relations: [{ id: 700 }] },
        { name: 'ITEM 21', id: 5, relations: [{ id: 600 }] },
        { name: 'ITEM 3', id: 7, relations: [{ id: 400 }] },
      ],
      items2: [
        { name: 'ITEM AD', id: 100, relations: [{ id: 6 }] },
        { name: 'ITEM BE', id: 700, relations: [{ id: 2 }] },
        { name: 'ITEM BW', id: 600, relations: [{ id: 5 }] },
        { name: 'ITEM BN', id: 300, relations: [{ id: 9 }] },
        { name: 'ITEM WW', id: 400, relations: [{ id: 7 }] },
        { name: 'ITEM BA', id: 200, relations: [{ id: 3 }] },
        { name: 'ITEM AA', id: 500, relations: [{ id: 1 }] },
        { name: 'ITEM AE', id: 900, relations: [{ id: 9 }] },
      ],
    };
  },
  methods: {
    setActiveElement({ id }) {
      this.activeIndex = id;

      this.$nextTick(() => {
        this.createConnections();
      });
    },
    recalculate() {
      calculations.map((calculation) => calculation());
    },
    createConnections() {
      let activeElement1 = document.querySelector(
        '.list-of-elements__items .list-of-elements__element--active'
      );
      let activeElement2 = document.querySelector(
        '.list-of-elements__relations .list-of-elements__element--active'
      );
      setConnection(activeElement1, activeElement2);
    },
  },
  mounted() {
    window.addEventListener('resize', this.recalculate);
  },
  destroyed() {
    window.removeEventListener('resize', this.recalculate);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Arial;
}

#svg-container {
  position: absolute;
  z-index: -100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-wrapper {
  display: flex;
  justify-content: center;
}

.list-of-elements__relations {
  padding-left: 100px;
}
</style>
