<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/Navbar";
export default {
  components: {
    NavBar,
  },
};
</script>
