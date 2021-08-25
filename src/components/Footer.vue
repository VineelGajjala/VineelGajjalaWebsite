<template>
  <v-container>
    <v-footer
      padless
    >
      <v-card
        flat
        tile
        class="white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="(icon) in icons"
            :key="icon.img"
            :href="icon.link"
            class="mx-4 black--text"
            icon
          >
            <v-icon size="24px">
              {{ icon.img }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="black--text pt-0">
          Images are courtesy of <a href="https://www.freepik.com/"> freepik.com</a>. Vineel Reddy Gajjala is a current College Sophmore at the University of Texas at Austin in the Computer Science department! You can contact him via his email at gajjala.vineel@gmail.com or via any of the social medias listed above!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          {{ new Date().getFullYear() }} — <strong>Vineel Reddy Hari Gajjala</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        {
          img: 'mdi-facebook',
          link: "https://www.facebook.com/vineelreddy.gajjala"
        },
        {
          img: 'mdi-github',
          link: "https://github.com/VineelGajjala"
        },
        {
          img: 'mdi-linkedin',
          link: "https://www.linkedin.com/in/vineel-gajjala/"
        },
        {
          img: 'mdi-instagram',
          link: "https://www.instagram.com/vineelgajjala/?hl=en"
        },
        {
          img: 'mdi-laptop',
          link: "https://leetcode.com/vineelgajjala/"
        },

      ],
    }),
  }
</script>