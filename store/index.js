import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      search:null,
      tasks: [{
          id: 1,
          title: "Erken Kalk",
          done: false,
          dueDate:"2020-12-29"
        },
        {
          id: 2,
          title: "Muz Ye",
          done: false,
          dueDate:"2021-02-15"
        },
        {
          id: 3,
          title: "Erken Yat",
          done: false,
          dueDate:"2021-01-10"
        },
      ],
      snackbar: {
        show: false,
        text: null
      },
      sort:false
    },
    mutations: {
      setSearch(state,value){
        state.search=value
      },
      addTask(state, newTask) {
        
        state.tasks.push(newTask);
      },
      doneTask(state, id) {
        let task = state.tasks.filter((task) => task.id === id)[0]
        task.done = !task.done;
      },
      updateTaskTitle(state, payload) {
        let task = state.tasks.filter((task) => task.id === payload.id)[0]
        task.title = payload.title

      },
      updateDueDate(state, payload) {
        let task = state.tasks.filter((task) => task.id === payload.id)[0]
        task.dueDate = payload.dueDate

      },
      removeTask(state, id) {
        state.tasks = state.tasks.filter((task) => task.id !== id)
      },
      showSnackbar(state, msg) {
        let timeout = 0
        if (state.snackbar.show) {
          state.snackbar.show = false
          timeout = 300
        }
        setTimeout(() => {
          state.snackbar.show = true
          state.snackbar.text = msg
        }, timeout);

      },
      hideSnackbar(state) {
        state.snackbar.show = false
      },
      toggleSorting(state) {
        state.sort = !state.sort
      },
      setTasks(state,tasks){
        state.tasks=tasks
      }
    },
    actions: {
      nuxtServerInit(vuexContext,context){
        return context.$axios.get("/")
          .then(response=>{
    
            console.log("Data Geldi:"+response.data.id)
    
          })
         },
    
      addTask(vuexContext, newTaskTitle) {
        let newTask = {
          id: Date.now(),
          title: newTaskTitle,
          done: false,
        }
        let msg = "Task Added!"
        vuexContext.commit('addTask', newTask)
        vuexContext.commit('showSnackbar', msg)
      },
      removeTask(vuexContext, id) {
        let msg = "Task Deleted!"
        vuexContext.commit('removeTask', id)
        vuexContext.commit('showSnackbar', msg)
      },
      updateTaskTitle(vuexContext, payload) {
        let msg="Task Edited!"
        vuexContext.commit('updateTaskTitle',payload)
        vuexContext.commit('showSnackbar', msg)

      },
      updateDueDate(vuexContext, payload) {
        let msg="Task Due Date Updated!"
        vuexContext.commit('updateDueDate',payload)
        vuexContext.commit('showSnackbar', msg)

      }
    },
    getters: {
      tasksFiltered(state){
        if  (!state.search){
          return state.tasks
        } else {
          return state.tasks.filter((task)=>task.title.toLowerCase().includes(state.search.toLowerCase()))
          
        }
      }
    }
  })
}

export default createStore
