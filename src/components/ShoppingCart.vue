<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const products = ref([]);
onMounted(async () => {
  try {
    const response = await fetch("/FullCollection.json");
    if (!response.ok) throw new Error("Failed to load products");
    products.value = await response.json();
  } catch (error) {
    console.error(error);
  }
});

const cart = computed(() => store.state.cart);

const addToCart = (product: { id: number; name: string; price: number }) => {
  store.commit("addToCart", product);
};
const removeFromCart = (productId: number) => {
  store.commit("removeFromCart", productId);
};
</script>

<template>
  <div class="ttt">
    <!-- purchase -->
    <div v-for="product in products" :key="product.id" class="product">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>

    <div>
      <div v-if="cart.length <= 0" class="empty-cart-message">
        <p>Your cart is currently empty.</p>
      </div>
      <div v-else class="product-wrap">
        <div class="product-list">
          <div v-for="item in cart" :key="item.id" class="product-item">
            <div class="product-image">
              <img :src="item.image" />
              <div class="remove-item">Remove</div>
            </div>
            <div class="product-info">
              <div class="product-name p-item">
                {{ item.name }}
              </div>
              <div class="product-type p-item">{{ item.type }}</div>
              <div class="product-price p-item">{{ item.price }}</div>
              <div class="product-quantity p-item">
                <a @click="removeFromCart(item.id)"
                  ><i class="fa-solid fa-minus"></i
                ></a>
                <input type="number" min="0" v-model="item.quantity" />
                <a><i class="fa-solid fa-plus"></i></a>
              </div>
            </div>
          </div>
          <div class="subtotal">
            <p>Subtotal</p>
            <p>$summary</p>
          </div>
          <div class="shipping-message">
            Shipping & taxes calculated at checkout
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.payment-option {
  text-align: center;
}
.payment-option a {
  display: block;
  color: #fff;
  margin: 10px 20px;
  padding: 10px 40px;
  background-color: #363636;
}
.product-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  min-width: 90px;
}
.product-quantity a {
  font-size: 18px;
  cursor: pointer;
}
.product-quantity input[type="number"] {
  width: 100%;
  font-size: 16px;
  text-align: center;
  background: none;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.product-quantity input[type="number"]::-webkit-inner-spin-button,
.product-quantity input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.product-type {
  color: #969696;
}
.product-list {
  padding-top: 20px;
}
.product-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}
.product-info {
  padding: 0 10px;
}
.p-item {
  padding-bottom: 2px;
}
.subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 10px 20px;
}
.shipping-message {
  padding: 0 20px 10px 20px;
  font-size: 12px;
}
.remove-item {
  font-size: 12px;
  cursor: pointer;
}
.product-image img {
  width: 60px;
}
</style>
