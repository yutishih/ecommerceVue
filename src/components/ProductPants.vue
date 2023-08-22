<script setup lang="ts">
import { effect, ref } from "vue";
import pants from "@/assets/Pants.json";

import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
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
    itemsToShow: 4,
    snapAlign: "start",
  },
});
</script>

<template>
  <div class="product-section-2">
    <div class="product-wrap-pants">
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :wrap-around="true"
        :mouseDrag="false"
      >
        <Slide v-for="item in pants" :key="item.product">
          <div class="carousel__item">
            <div class="item-wrap">
              <div class="coming-soon-tag" v-if="item.comingsoon">
                COMING SOON
              </div>
              <a href="#"
                ><img :src="item.image" />
                <div class="text-wrap">
                  <h4>{{ item.product }}</h4>
                  <p>{{ item.price }}</p>
                </div>
              </a>
            </div>
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
.product-wrap-pants {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
}
.coming-soon-tag {
  position: absolute;
  padding: 5px 10px;
  background-color: #ebe7ea;
}
.product-wrap-pants img {
  width: 100%;
}
.text-wrap {
  text-align: center;
}
.item-wrap a {
  text-decoration: none;
  color: #636363;
}
</style>
