<template>
  <div >
      <v-list-item
        @click="doneTask(task.id)"
        :class="{ 'blue lighten-5': task.done }"
        class="white"
        :ripple="false"
      >
        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              :class="{ 'text-decoration-line-through': task.done }"
              >{{ task.title }}</v-list-item-title
            >
          </v-list-item-content>

          <v-list-item-action v-if="task.dueDate">
            <v-list-item-action-text
              ><v-icon small>mdi-calendar</v-icon
              >{{ task.dueDate | niceDate }}</v-list-item-action-text
            >
          </v-list-item-action>

          <v-list-item-action>
            <task-menu :task="task"></task-menu>
          </v-list-item-action>
           <v-list-item-action v-if="$store.state.sort">
            
            <v-btn
            color="primary"
            icon
            class="handle"
            
            >
             <v-icon
            
            
            >
              mdi-drag-horizontal-variant

            </v-icon> 
            </v-btn>
            
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </div>
</template>

<script>
import TaskMenu from "@/components/Todo/TaskMenu"
import { format } from 'date-fns'
export default {
  components:{
    TaskMenu
  },
 methods: {
    doneTask(id) {
      this.$store.commit("doneTask", id);
    }
  },
  filters:{
    niceDate(value){
      return format(new Date(value), 'd MMM yy')
    }
  },
  props:[
    'task'
  ]
}
</script>

<style lang="sass">
.sortable-ghost
  opacity: 0
.sortable-drag
  box-shadow: 0 0 10px rgba(0,0,0,0.3)
</style>