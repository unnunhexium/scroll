<template>
  <ul class="list-of-items" @scroll="$emit('scroll')">
    <li
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      class="list-of-items__item"
      :name="item.name"
    >
      <button class="list-of-items__item--button">
        {{ item.name }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListOfItems',
  props: {
    items: {
      type: Array,
      required: true,
    },
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
