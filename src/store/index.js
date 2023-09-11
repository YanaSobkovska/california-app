import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: "MacBook Pro 13",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        price: "1,200.00",
        currency: "USD",
        img: "MacBook_Pro_13.svg",
      },
      {
        id: 2,
        name: "Smart Galaxy Watch 3",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "199.00",
        currency: "USD",
        img: "Smart_Galaxy_Watch_3.svg",
      },
      {
        id: 3,
        name: "MacBook Air M1",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "1,009.00",
        currency: "USD",
        img: "MacBook_Air_M1.svg",
      },
      {
        id: 4,
        name: "iPad",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "610.00",
        currency: "USD",
        img: "iPad.svg",
      },
      {
        id: 5,
        name: "MacBook Pro 13",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        price: "1,200.00",
        currency: "USD",
        img: "MacBook_Pro_13.svg",
      },
      {
        id: 6,
        name: "Smart Galaxy Watch 3",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "199.00",
        currency: "USD",
        img: "Smart_Galaxy_Watch_3.svg",
      },
      {
        id: 7,
        name: "MacBook Air M1",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "1,009.00",
        currency: "USD",
        img: "MacBook_Air_M1.svg",
      },
      {
        id: 8,
        name: "iPad",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        price: "610.00",
        currency: "USD",
        img: "iPad.svg",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
