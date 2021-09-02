<template>
    <div class="heroBlock">
      <h1> Hi! I'm Vineel Gajjala and welcome to my website!</h1>
      <v-carousel hide-delimiters cycle :show-arrows="false">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        >
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
            src: require("../assets/Vineel.jpg"),
            title: "Computer Scientist"
          },
          {
            src: require("../assets/UsainFUll.jpg"),
            title: "Gamer"
          },
          {
            src: require("../assets/30821.jpeg"), //low quality image of me and akka
            title: "Sports Enthusiast"
          },
           {
            src: require("../assets/30902.jpeg"),
            title: "Sports Enthusiast"
          },
         
          {
            src: require("../assets/IMG_2690.jpg"),
            title: "Sports Enthusiast"
          },
          {
            src: require("../assets/20200522_092126.jpg"),
            title: "Sports Enthusiast"
          },
         
        ],
      }
    },
  }
</script>

<style scoped>
h1 {
  font-family: arial;
  font-weight: bold;
  text-align: center;
  font-size: 50px;
}

h5 {
  font-family: arial;
  text-align: center;
}

</style>
