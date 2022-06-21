<template>
  <ul class="list-of-elements">
    <li
      v-for="element in elements"
      :key="element.id"
      :class="elementClasses(element)"
      :name="element.name"
    >
      <button
        class="list-of-elements__button"
        @click="$emit('log-element-coords', element.id)"
      >
        {{ element.name }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListOfElements",
  props: {
    elements: {
      type: Array,
      required: true,
    },
    activeElement: {
      type: Number,
      required: false,
    },
  },
  methods: {
    elementClasses(element) {
      return [
        "list-of-elements__element",
        {
          "list-of-elements__element--active": element.id == this.activeElement,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.list-of-elements {
  list-style: none;
  height: 50vh;
  overflow-y: scroll;

  &__element {
    list-style: none;
    margin-bottom: 10px;

    &--active {
      background: rgb(89, 177, 89);
    }
  }

  &__button {
    all: unset;
    cursor: pointer;
    width: 289px;
    height: 36px;
    border: 1px solid grey;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
