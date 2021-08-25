<template>
  <v-container fluid>
      <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Vineel Gajjala</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        <router-link to = "/">Home</router-link>
      </v-btn>

      <v-btn text>
        <router-link to = "/experience">experience</router-link>
      </v-btn>

      <v-btn text>
        <router-link to = "/contact">Contact</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>
