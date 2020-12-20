<template>
  <div class="home">
    <field-add-task></field-add-task>
    <list-tasks v-if="$store.state.tasks.length"> </list-tasks>
    <no-tasks v-else></no-tasks>
    <button-done-sorting v-if="this.$store.state.sort"></button-done-sorting>

  </div>
</template>
<script>
import FieldAddTask from "../components/Todo/FieldAddTask";
import ListTasks from "../components/Todo/ListTasks";
import NoTasks from "../components/Todo/NoTasks"
import ButtonDoneSorting from "../components/Todo/ButtonDoneSorting"
export default {
  components: {
    FieldAddTask,
    ListTasks,
    NoTasks,
    ButtonDoneSorting
  },

  methods: {
  },
  head:{
    title:'Home',
     meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
};
</script>
<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>