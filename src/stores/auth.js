import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: {
        id: null,
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        created_at: null,
        updated_at: null,
      },
      token: "",
    };
  },
  getters: {},
  actions: {
      async loginUser() {
      await axios.post('login', this.user).then((response) => {
          alert(response)
          this.user = response.data.user;
          this.token = response.data.token
        }); 
      },
    

    async registerUser() {
      await axios.post('register', this.user).then((res) => {
        alert(res.data)
        console.log(res.data);
        this.name = res.data.user;
      });
     
      
    },

    async logoutUser() {
      await axios.post('/logout');
    }
  },
});