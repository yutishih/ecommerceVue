<script setup lang="ts">
import HomeCarousel from "../components/HomeCarousel.vue";
import ProductVest from "../components/ProductVest.vue";
</script>

<template>
  <div class="home">
    <div class="main-banner-wrap">
      <div class="main-banner-img">
        <div class="main-title">
          <h1>Weight Vest</h1>
          <p>
            Improve your running speed, endurance, and muscular strength with a
            Heria weight vest.
          </p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>
    </div>
    <HomeCarousel />
    <ProductVest />
  </div>
</template>

<style scoped>
.main-banner-img {
  position: relative;
  background-image: url(../assets/test1.jpg);
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
.main-title {
  position: absolute;
  color: #fff;
  bottom: 0;
  text-align: center;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-title h1 {
  font-size: 48px;
}
.main-title p {
  font-size: 20px;
  margin: 0 0 20px 0;
}
.main-title a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  background-color: #111;
  padding: 15px 40px;
  border: 0px;
}
.main-title a:hover {
  color: #111;
  background-color: #fff;
  transition: 0.25s ease-in;
}
</style>
