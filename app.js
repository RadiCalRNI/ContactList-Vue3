const app = Vue.createApp({
  data() {
    return {
      activeStatus: "all",
    };
  },

  methods: {
    changeActive(activeStatus) {
      this.activeStatus = activeStatus;
    },
  },
});

app.mount("#app");
