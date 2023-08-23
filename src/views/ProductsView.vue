<script setup lang="ts"></script>

<template>
  <div class="products">
    <div class="products-wrap">
      <div class="item-wrap-grid">
        <div class="items-carousel"></div>
        <div class="items-information">
          <form>
            <h4>FULL COLLECTION</h4>
            <h2>Heria Training Mesh T-Shirt - Black</h2>
            <p>$35.00</p>
            <div class="color-selection">
              <p>Color</p>
              <div class="color_wrap">
                <a>Black</a>
              </div>
            </div>
            <div class="size-selection">
              <p>Size</p>
              <div class="size-wrap">
                <a>S</a>
                <a>M</a>
                <a>L</a>
                <a>XL</a>
              </div>
            </div>
            <div class="quantity-selection">
              <input type="number" min="1" />
            </div>
            <div class="add-to-cart-button">
              <button>ADD TO CART</button>
            </div>
          </form>
          <div class="items-desc">
            <p>
              Designed for running, training, and discreet enough for causal
              wear. This Ts durable mesh fabric was constructed with athletes in
              mind to train hard while feeling and looking good.
            </p>
          </div>
        </div>
      </div>
      <div class="items-recommended"></div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .products {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
