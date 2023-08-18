<script setup lang="ts">
import pants from "@/assets/Pants.json";
</script>

<template>
  <div class="product-section-2">
    <div class="product-width">
      <div class="product-wrap">
        <div class="product-item" v-for="item in pants" :key="item.product">
          <div class="coming-soon-tag" v-if="item.comingsoon">COMING SOON</div>
          <img :src="item.image" />
          <div class="text-wrap">
            <h4>{{ item.product }}</h4>
            <p>{{ item.price }}</p>
          </div>
        </div>
      </div>
      <!-- <div class="product-button"><a>VIEW COLLECTION</a></div> -->
    </div>
  </div>
</template>

<style scoped>
.product-width {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
}
.product-wrap {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem 4rem;
}

.product-item {
  box-sizing: border-box;
}
.coming-soon-tag {
  position: absolute;
  padding: 5px 10px;
  background-color: #ebe7ea;
}
.product-item img {
  width: 100%;
}
.text-wrap {
  text-align: center;
}
.product-button {
  margin: 40px 0;
  text-align: center;
}
.product-button a {
  padding: 10px 20px;
  background-color: #111;
  color: #fff;
}
</style>
