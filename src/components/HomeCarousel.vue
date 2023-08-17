<script setup lang="ts">
import { effect, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import homeFeaturedItems from "@/assets/HomeFeaturedItems.json";
import "vue3-carousel/dist/carousel.css";

const name = "Breakpoints";
const components = {
  Carousel,
  Slide,
  Navigation,
};

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = ref({
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 6,
    snapAlign: "start",
  },
});
</script>

<template>
  <div class="home-featured-category">
    <div class="featured-category-wrap">
      <Carousel
        v-bind="settings"
        :wrap-around="true"
        :breakpoints="breakpoints"
        @click.prevent
      >
        <Slide
          v-for="slide in homeFeaturedItems"
          :key="slide.name"
          @click.prevent
        >
          <div class="carousel__item">
            <a :href="slide.linkUrl" @click.prevent>
              <div
                class="featured-category-item"
                :style="{
                  'background-image': 'url(' + slide.imageUrl + ')',
                }"
              >
                <h4>{{ slide.name }}</h4>
              </div>
            </a>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
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
</style>
