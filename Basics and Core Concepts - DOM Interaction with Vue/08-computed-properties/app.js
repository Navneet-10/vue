const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullName() {
      console.log("Running again....");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Anand";
    },
  },
  methods: {
    outputFullname() {
      console.log("Running again....");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Anand";
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
