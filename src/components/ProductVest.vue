<script setup lang="ts">
import vest from "@/assets/Vest.json";
</script>

<template>
  <div class="product-section-1">
    <div class="product-width">
      <div class="product-wrap">
        <div class="product-item" v-for="item in vest" :key="item.product">
          <div class="coming-soon-tag" v-if="item.comingsoon">COMING SOON</div>
          <img :src="item.image" />
          <div class="text-wrap">
            <h4>{{ item.product }}</h4>
            <p>{{ item.price }}</p>
          </div>
        </div>
      </div>
      <div class="product-button"><a>VIEW COLLECTION</a></div>
    </div>
  </div>
</template>

<style scoped>
.featured-category-wrap {
  background-color: #111;
  padding: 40px;
}
.featured-category-wrap ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}
.featured-category-wrap ul li {
  list-style: none;
  margin: 0 10px;
}
.featured-category-wrap ul li a {
  text-decoration: none;
  color: #fff;
}
.featured-category-item {
  width: 250px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
}
.featured-category-item h4 {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  text-decoration: none;
  color: #fff;
  font-size: 24px;
}
svg.carousel__icon {
  color: #fff;
  z-index: 10;
}
.product-width {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
}
.product-wrap {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem 1rem;
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
