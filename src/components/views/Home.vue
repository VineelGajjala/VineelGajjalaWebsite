<template>
    <v-content>
      <HomeCarousel/>
      <AboutMe/>
    </v-content>
</template>

<script>
import HomeCarousel from '../HomeCarousel';
import AboutMe from '../AboutMe';
  export default {
    name: 'Home',

    components: {
      HomeCarousel,
      AboutMe,
    }
  }
</script>
