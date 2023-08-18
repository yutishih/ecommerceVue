<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navigation from "./components/Navigation.vue";
import NavigationFooter from "./components/NavigationFooter.vue";
</script>

<template>
  <Navigation />
  <RouterView />
  <NavigationFooter />
</template>

<style scoped></style>
