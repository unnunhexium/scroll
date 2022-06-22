<template>
  <div class="main-wrapper">
    <div id="svg-container">
      <svg width="100%"></svg>
    </div>
    <ListOfItems
      @scroll="recalculate"
      class="list-of-items__item"
      :items="items1"
    />
    <ListOfItems
      @scroll="recalculate"
      class="list-of-items__relation"
      :items="items2"
    />
  </div>
</template>

<script lang="ts">
import ListOfItems from '@/components/ListOfItems.vue';
import { setConnection, calculations } from '@/utils/connections';
export default {
  name: 'App',
  components: { ListOfItems },
  data() {
    return {
      items1: [
        { name: 'ITEM 1', id: 1 },
        { name: 'ITEM 2', id: 2 },
        { name: 'ITEM 3', id: 3 },
        { name: 'ITEM 4', id: 4 },
        { name: 'ITEM 5', id: 5 },
        { name: 'ITEM 6', id: 6 },
        { name: 'ITEM 7', id: 7 },
        { name: 'ITEM 8', id: 8 },
        { name: 'ITEM 9', id: 9 },
        { name: 'ITEM 10', id: 10 },
        { name: 'ITEM 11', id: 11 },
        { name: 'ITEM 12', id: 12 },
        { name: 'ITEM 13', id: 13 },
        { name: 'ITEM 14', id: 14 },
        { name: 'ITEM 15', id: 15 },
        { name: 'ITEM 16', id: 16 },
        { name: 'ITEM 17', id: 17 },
        { name: 'ITEM 18', id: 18 },
        { name: 'ITEM 19', id: 19 },
        { name: 'ITEM 20', id: 20 },
      ],
      items2: [
        { name: 'ITEM 21', id: 21 },
        { name: 'ITEM 22', id: 22 },
        { name: 'ITEM 23', id: 23 },
        { name: 'ITEM 24', id: 24 },
        { name: 'ITEM 25', id: 25 },
        { name: 'ITEM 26', id: 26 },
        { name: 'ITEM 27', id: 27 },
        { name: 'ITEM 28', id: 28 },
        { name: 'ITEM 29', id: 29 },
        { name: 'ITEM 30', id: 30 },
        { name: 'ITEM 31', id: 31 },
        { name: 'ITEM 32', id: 32 },
        { name: 'ITEM 33', id: 33 },
        { name: 'ITEM 34', id: 34 },
        { name: 'ITEM 35', id: 35 },
        { name: 'ITEM 36', id: 36 },
        { name: 'ITEM 37', id: 37 },
        { name: 'ITEM 38', id: 38 },
        { name: 'ITEM 39', id: 39 },
        { name: 'ITEM 40', id: 40 },
      ],
      relations: [
        { startPointId: 1, endPointId: 22 },
        { startPointId: 4, endPointId: 32 },
        { startPointId: 10, endPointId: 21 },
        { startPointId: 18, endPointId: 35 },
      ],
    };
  },
  methods: {
    recalculate() {
      calculations.map((calculation) => calculation());
    },
    createConnections() {
      this.relations.map((relation) => {
        setConnection(relation);
      });
    },
  },
  mounted() {
    this.createConnections();
    window.addEventListener('resize', this.recalculate);
  },
  destroyed() {
    window.removeEventListener('resize', this.recalculate);
  },
};
</script>

<style lang="scss">
#svg-container {
  position: absolute;
  z-index: -100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  font-family: Arial;
}

.main-wrapper {
  display: flex;
  justify-content: center;
}

.list-of-items__relation {
  padding-left: 100px;
}
</style>
d
