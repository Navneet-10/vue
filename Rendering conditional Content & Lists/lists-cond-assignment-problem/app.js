const app = Vue.createApp({
  data() {
    return {
        taskInput: '',
        taskList: [],
        listView: true,
        listViewToggleButton: 'Hide'
    };
  },
  methods: {
    addTask() {
        this.taskList.push(this.taskInput);
        console.log(this.taskList);
    },
    toggleListView() {
        this.listView = !this.listView;
        if(this.listView) {
            this.listViewToggleButton = 'Hide List';
        }
        else {
            this.listViewToggleButton = 'Show List';
        }
    }
  }
});

app.mount('#assignment');