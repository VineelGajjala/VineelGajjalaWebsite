<template>
  <v-card
    class="mx-auto"
    max-width="1500"
    outlined
  >
    <v-list-item three-line>
      <v-col>
        <v-img src="../assets/vineelAkka.jpeg"> </v-img>
      </v-col>
      <v-col>
        Gajjala
      </v-col>

      


    </v-list-item>

  </v-card>
</template>

<script>
  export default {
    name: 'Cards',

    data () {
      return {
        items: [
          {
            src: require("../assets/Vineel.jpg"),
          },
          {
            src: require("../assets/UsainFUll.jpg"),
          },
          {
            src: require("../assets/vineelAkka.jpeg"), //low quality image of me and akka
          },
           {
            src: require("../assets/vineelpaddles.png"),
          },
         
          {
            src: require("../assets/IMG_2690.jpg"),
          },
          {
            src: require("../assets/20200522_092126.jpg"),
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
