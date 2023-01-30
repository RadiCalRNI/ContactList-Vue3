const app = Vue.createApp({
  data() {
    return {
      activeStatus: "all",
      contacts: [],
      contact: {
        name: "",
        phoneNumber: "",
        email: "",
      },
    };
  },

  methods: {
    changeActive(activeStatus) {
      this.activeStatus = activeStatus;
    },

    addContact() {
      this.contacts.push(this.contact);
      this.activeStatus = "all";
      this.contact = {};
    },
  },
});

app.mount("#app");
