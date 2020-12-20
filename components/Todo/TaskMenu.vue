<template>
  <div>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-delete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    ></dialog-delete>
    <dialog-duedate 
    v-if="dialogs.duedate"
      @close="dialogs.duedate = false"
      :task="task"></dialog-duedate>
    <dialog-edit
      v-if="dialogs.edit"
      @close="dialogs.edit = false"
      :task="task"
    ></dialog-edit>
  </div>
</template>

<script>
import DialogDelete from "@/components/Todo/Dialogs/DialogDelete";
import DialogEdit from "@/components/Todo/Dialogs/DialogEdit";
import DialogDuedate from "@/components/Todo/Dialogs/DialogDueDate";
export default {
  data: () => ({
    items: [
      {
        title: "Edit",
        icon: "mdi-pencil",
        click() {
          this.dialogs.edit = true;
        },
      },
      { title: "Due Date", icon: "mdi-calendar",
        click() {
          this.dialogs.duedate = true;
        }, },
      {
        title: "Delete",
        icon: "mdi-delete",
        click() {
          this.dialogs.delete = true;
        },
      },
      {
        title: "Sort",
        
        icon: "mdi-drag-horizontal-variant",
        click() {
          this.$store.commit('toggleSorting')
        },
      },
    ],
    dialogs: {
      delete: false,
      edit: false,
      duedate:false
    },
  }),
  components: {
    DialogDelete,
    DialogEdit,
    DialogDuedate
  },
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    },
  },
  props: ["task"],
};
</script>

<style>
</style>
