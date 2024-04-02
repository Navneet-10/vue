const app = Vue.createApp({
  data() {
    return {
      userInput1: "",
      confirmedUserInput1: "",
      userInput2: "",
      confirmedUserInput2: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button pressed!");
    },
    getUserInput1(event) {
      this.userInput1 = event.target.value;
    },
    confirmUserInput1() {
      this.confirmedUserInput1 = this.userInput1;
    },
    getUserInput2(event) {
      this.userInput2 = event.target.value;
    },
    confirmUserInput2() {
      this.confirmedUserInput2 = this.userInput2;
    },
  },
});

app.mount("#assignment");
