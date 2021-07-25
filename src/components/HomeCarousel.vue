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
            src: 'https://previews.123rf.com/images/pratyaksa/pratyaksa1702/pratyaksa170200044/72923803-programming-or-coding-banner-flat-design-concept.jpg',
            title: "Computer Scientist"
          },
          {
            src: 'https://cdn.nohat.cc/thumb/f/720/a895646aafa64725969a.jpg',
            title: "Gamer"
          },
          {
            src: 'https://static.vecteezy.com/system/resources/previews/000/199/306/original/slam-dunk-basketball-player-vector-flat-illustration.jpg',
            title: "Sports Enthusiast"
          },
        ],
      }
    },
  }
</script>
