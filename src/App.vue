<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import Navigation from "./components/Navigation.vue";
import NavigationFooter from "./components/NavigationFooter.vue";

// detect whether it is the signup page
const router = useRouter();
const isSignupRoute = ref(router.currentRoute.value.name === "signup");

watch(router.currentRoute, (route) => {
  console.log(route.name);
  isSignupRoute.value = route.name === "signup"; //read here
  console.log(route.name);
});
</script>

<template>
  <Navigation :specialStyle="isSignupRoute" />
  <RouterView />
  <NavigationFooter />
</template>

<style scoped></style>
