<template>
  <div class="main-wrapper">
    <ListOfItems class="list-of-items" />
    <!-- <ListOfItems class="list-of-items" /> -->
  </div>
</template>

<script lang="ts">
import ListOfItems from "@/components/ListOfItems.vue";

export default {
  name: "App",
  components: { ListOfItems },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

.main-wrapper {
  display: flex;
  // justify-content: center;
}
</style>
