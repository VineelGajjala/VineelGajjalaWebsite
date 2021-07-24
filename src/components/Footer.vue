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
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
        }
      ],
    }),
  }
</script>