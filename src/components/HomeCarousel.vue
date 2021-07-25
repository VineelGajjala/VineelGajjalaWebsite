<template>
    <div class="heroBlock">
      <v-carousel hide-delimiters cycle :show-arrows="false">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        >
        <v-row class="title fill-height hidden-xs-only" align="center" justify="center">{{ item.title }}</v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
</template>

<script>
  export default {
    name: 'HomeCarousel',

    data () {
      return {
        items: [
          {
            src: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
            title: "Computer Scientist"
          },
          {
            src: 'https://cdn.vox-cdn.com/thumbor/pWwIaPWZmlnXHtCqrHrRb39O_-E=/0x0:2000x1233/1200x800/filters:focal(837x0:1157x320)/cdn.vox-cdn.com/uploads/chorus_image/image/65913277/lebron.0.jpg',
            title: "Gamer"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            title: "Sports Enthusiast"
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            title: "Aspiring Software Engineer"
          },
        ],
      }
    },
  }
</script>
