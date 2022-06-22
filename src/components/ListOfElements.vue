<template>
  <ul :class="{
      'list-of-elements': true,
    }"
    >
    <li
      v-for="element in elements"
      :key="element.id"
      :class="elementClasses(element)"
        
      :name="element.name"
    >
      <button
        class="list-of-elements__button"
        @click="emitClick(element)"
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
  computed: {
    hasActiveElement(){
      return !!this.elements.find(({id}) => id === this.activeElement)
    }
  },

  methods: {
    elementClasses(element) {
      return [
        "list-of-elements__element",
        {
          "list-of-elements__element--active":
            element.relations[0].id === this.activeElement || element.id === this.activeElement,
        },
      ];
    },
    emitClick(element){
      this.$emit('log-element-coords', {
        id: element.relations[0].id,
      })
    }
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
