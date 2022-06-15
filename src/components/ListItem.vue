<template>
  <div class="list-item">
    <p class="list-item__content">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  list-style: none;
  // width: 100%;
  width: 289px;
  height: 36px;
  border: 1px solid green;
  box-sizing: border-box;
  text-align: center;
}
</style>
