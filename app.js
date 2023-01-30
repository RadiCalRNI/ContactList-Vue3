const app = Vue.createApp({
  data() {
    return {
      activeStatus: "all",
      contacts: [],
    };
  },

  methods: {
    changeActive(activeStatus) {
      this.activeStatus = activeStatus;
    },
  },
});

app.mount("#app");
