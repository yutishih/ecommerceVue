import { createStore } from "vuex";

interface State {
  cart: { id: number; name: string; price: number; quantity: number }[];
}

export const store = createStore<State>({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, product) {
      const item = state.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, productId) {
      const item = state.cart.find((item) => item.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((item) => item.id !== productId);
        }
      }
    },
  },
});
