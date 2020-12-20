<template>
  <v-list flat class="pt-0">
    <draggable v-model="tasks"  handle=".handle">
    <task 
    v-for="task in tasks" 
    :key="task.id"
    :task="task"
    ></task>
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable"

import task from "@/components/Todo/Task"

export default {
  components: {
    task,
    draggable
  },
  computed: {
    tasks: {
        get() {
            return this.$store.getters.tasksFiltered
        },
        set(value) {
            this.$store.commit('setTasks', value)
        }
    }
}
  
  
 
};
</script>

<style>
</style>