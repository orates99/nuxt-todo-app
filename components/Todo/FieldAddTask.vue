<template>
  <v-text-field
    class="ma-6"
    v-model="newTaskTitle"
    @keyup.enter="addTask"
    outlined
    label="Add Task"
    append-icon="mdi-plus"
    hide-details=""
    clearable
  >
    <template v-slot:append>
      <v-icon @click="addTask"
      color="primary"
      :disabled="newTaskTitleInvalid"> mdi-plus </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
    };
  },

  methods: {
    addTask() {
      if (this.newTaskTitle) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }
    },
  },
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
};
</script>

<style>
</style>