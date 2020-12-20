<template>
  <v-dialog
    ref="dialog"
    :value="true"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    
    <v-date-picker v-model="date" scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="$emit('close')"> Cancel </v-btn>
      <v-btn text color="primary" @click="saveDate" > OK </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
     data: () => ({
      date:''
    }),
    methods:{
        saveDate(){
            let payload={
                id:this.task.id,
                dueDate:this.date
            }
            this.$store.dispatch("updateDueDate",payload)
            this.$emit('close')
        }
    },
    props:[
        'task'
    ],
    mounted(){
        if(this.task.dueDate){
            this.date=this.task.dueDate
        } else {
            this.date=new Date().toISOString().substr(0, 10)
        }
        
    }
};
</script>

<style></style>
