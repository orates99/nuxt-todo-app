<template>
  <v-btn
  color="primary"
  class="button-done-sorting"
  @click="$store.commit('toggleSorting')"
  >
      Done Sorting
  </v-btn>
</template>

<script>
export default {
    
}
</script>

<style lang="sass">
.button-done-sorting
    position: fixed
    left: 50%
    transform: translateX(-50%)
    bottom: 20px
</style>