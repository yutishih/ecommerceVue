<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import productTestSlides from "@/assets/ProductTestSlides.json";
import fullCollection from "@/assets/FullCollection.json";

const currentSlide = ref(0);
const slideTo = (val: number) => {
  currentSlide.value = val;
};
</script>

<template>
  <div class="products">
    <div class="products-flex">
      <div class="products-wrap">
        <div class="item-wrap-grid">
          <div class="items-carousel">
            <Carousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="false"
              v-model="currentSlide"
            >
              <Slide v-for="slide in productTestSlides" :key="slide.product">
                <div class="carousel__item">
                  <img :src="slide.image" />
                </div>
              </Slide>
              <template #addons>
                <Navigation />
              </template>
            </Carousel>

            <Carousel
              id="thumbnails"
              :items-to-show="5"
              :wrap-around="true"
              v-model="currentSlide"
              ref="carousel"
            >
              <Slide
                v-for="(slide, index) in productTestSlides"
                :key="slide.product"
              >
                <div class="carousel__item" @click="slideTo(index)">
                  <img :src="slide.image" />
                </div>
              </Slide>
            </Carousel>
          </div>
          <div class="items-information">
            <form>
              <h5>FULL COLLECTION</h5>
              <h2>Heria Training Mesh T-Shirt - Black</h2>
              <p>$35.00</p>
              <div class="color-selection">
                <h5>Color</h5>
                <div
                  class="color_wrap"
                  v-for="product in fullCollection"
                  :key="product.id"
                >
                  <a>
                    <span>
                      <div
                        class="color-selection-bg-image"
                        :style="{
                          'background-image':
                            'url(' + product.color?.black + ')',
                        }"
                      ></div>
                    </span>
                  </a>
                </div>
              </div>
              <div class="size-selection">
                <h5>Size</h5>
                <div class="size-wrap">
                  <a>S</a>
                  <a>M</a>
                  <a>L</a>
                  <a>XL</a>
                </div>
              </div>
              <div class="quantity-selection">
                <input type="number" min="1" placeholder="QUANTITY" />
              </div>
              <div class="add-to-cart-button">
                <button>ADD TO CART</button>
              </div>
            </form>
            <div class="items-desc">
              <h5>Description</h5>
              <p>
                Designed for running, training, and discreet enough for causal
                wear. This Ts durable mesh fabric was constructed with athletes
                in mind to train hard while feeling and looking good.
              </p>
              <h5>Care</h5>
              <p>100% Cotton</p>
              <p>Machine Wash Cold</p>
              <p>Wash With Like Colors</p>
              <p>Tumble Dry Low</p>
              <p>Medium Iron</p>
              <p>Do Not Dry Clean</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="items-recommended">
      <div class="items-recommended-wrap">
        <div class="title">
          <h3>You May Also Like</h3>
          <hr />
        </div>
        <div class="item-display">
          <div class="item-display-wrap">
            <div v-for="item in fullCollection.slice(0, 4)" :key="item.id">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.products-flex {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}
.products-wrap {
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
}
.item-wrap-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 60px;
  padding: 40px 0;
}
.items-information h5 {
  font-size: 18px;
  padding-bottom: 10px;
}
.items-information h2 {
  font-size: 28px;
  padding-bottom: 10px;
}
.items-information p {
  font-size: 16px;
  padding-bottom: 10px;
}
.items-information input[type="number"] {
  font-size: 16px;
  padding: 15px;
  background: none;
  border: 1px solid #d3d3d3;
  outline: none;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.items-information input[type="number"]::-webkit-inner-spin-button,
.items-information input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.color-selection {
  padding: 10px 0;
}
.color_wrap {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.color_wrap a {
  padding-right: 10px;
}
.size-wrap {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.size-wrap a {
  padding-right: 10px;
}
.quantity-selection {
  padding-bottom: 15px;
}
.add-to-cart-button button {
  width: 75%;
  color: #fff;
  background-color: #111;
  border: none;
  font-size: 16px;
  padding: 20px;
}
.items-desc {
  padding: 20px 0;
}
.items-desc h5 {
  font-weight: 500;
}
.carousel__item {
  width: 100%;
  height: auto;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__item img {
  max-width: 100%;
  width: auto;
  height: 100%;
  cursor: pointer;
}
.carousel__slide {
  padding: 10px;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.item-display {
  margin: 0 10px;
}
.item-display-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  min-width: min-content;
}
.item-wrap {
  text-align: center;
}
.item-wrap a {
  text-decoration: none;
  color: #111;
}
.item-wrap img {
  min-width: 250px;
  width: 100%;
}
.items-recommended-wrap {
  padding: 60px 0;
}
.items-recommended-wrap .title h3 {
  text-align: center;
}
.items-recommended-wrap .title hr {
  background-color: #ebe7df;
  border: none;
  height: 2px;
  max-width: 100px;
  width: 100%;
  margin: 20px auto;
  text-align: center;
}
.text-wrap {
  text-align: center;
}

.coming-soon-tag {
  position: absolute;
  padding: 5px 10px;
  background-color: #ebe7ea;
}
.color-selection-bg-image {
  width: 56px;
  height: 56px;
  background-size: cover;
}

@media (max-width: 1480px) {
  .item-display {
    overflow-x: auto;
    white-space: nowrap;
  }
  .item-display::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers */
  }
  .item-display {
    -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
    scrollbar-width: none; /* Hide scrollbar for Firefox */
  }
}

@media (max-width: 768px) {
  .item-wrap-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 60px;
  }
  .add-to-cart-button button {
    width: 100%;
  }

  .item-display .item-wrap {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>
