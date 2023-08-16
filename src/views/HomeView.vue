<script setup lang="ts">
import homeFeaturedItems from "@/assets/HomeFeaturedItems.json";
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
    <div class="home-featured-category">
      <div class="featured-category-wrap">
        <ul>
          <li v-for="item in homeFeaturedItems" :key="item.name">
            <a :href="item.linkUrl">
              <div
                class="featured-category-item"
                :style="{ 'background-image': 'url(' + item.imageUrl + ')' }"
              >
                <h4>{{ item.name }}</h4>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
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
.featured-category-item {
}
.featured-category-wrap ul {
  display: flex;
}
.featured-category-wrap ul li {
  list-style: none;
}
.featured-category-wrap ul li a {
  text-decoration: none;
  color: #fff;
}
</style>
