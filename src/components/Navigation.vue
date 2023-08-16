<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import navBarItems from "@/assets/NavBarItems.json";
</script>

<template>
  <div class="navigation-header">
    <header>
      <div class="logo-wrap">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="50"
          height="50"
        />
      </div>
      <div class="nav-wrap">
        <nav>
          <ul>
            <li v-for="item in navBarItems" :key="item.name">
              <RouterLink :to="item.link">{{ item.name }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
.navigation-header {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 999;
  height: 100px;
}
header {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  height: inherit;
  padding: 0 60px;
}
.nav-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.nav-wrap ul {
  display: flex;
}
.nav-wrap ul li {
  list-style: none;
}
.nav-wrap ul li a {
  text-decoration: none;
  color: #fff;
  padding: 0 10px;
}
.nav-wrap ul li a:hover {
  color: #111;
}
</style>
