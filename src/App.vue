<template>
  <v-app>
   <sideBarMake/>
   <HelloWorld/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import sideBarMake from './components/sidebar';

export default {
  name: 'App',

  components: {
    HelloWorld,
    sideBarMake
  },

  data: () => ({
    //
  }),
};
</script>
