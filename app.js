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
      search: "",
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
      toastr.success("مخاطب جدید اضافه شد");
    },

    deleteContact(number) {
      this.contacts = this.contacts.filter(
        (person) => person.phoneNumber != number
      );
      toastr.error("مخاطب با موفقیت حذف شد");
    },
  },

  computed: {
    getContactByFilter() {
      if (this.search == "") {
        return [];
      }
      return this.contacts.filter((person) =>
        person.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
});

app.mount("#app");
