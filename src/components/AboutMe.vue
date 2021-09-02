<template lang="pug">
   div.container.mt-5.mb-2
      h2.titleText ABOUT ME
    
      div.container
        div.flex
          div.divider
        b-card 
          b-row(align-h="center")
            b-col.mb-2(cols="11" md="10")
              p Hi! I'm Vineel Gajjala, an aspiring Software engineer at the Univeristy of Texas at Austin! I had an internship at FileStride, a file sharing application startup, in the Summer of 2021 and learned a lot about web dev and working at a company! Outside of Computer Science, I love playing basketball and hope to be able to dunk one day (getting closer everyday!), playing video games such as Super Smash Bros., playing chess, and I want to learn more about finance as well! Welcome to my website and I hope you have a good time here!
    


</template>

<script>
  export default {
    name: 'AboutMe',

    data () {
      return {
      }
    },
  }
</script>

<style>
  /* list classes and or ids here */
  .head {
    background-color:  rgba(245, 245, 245, 0.527);;
  }
  .title {
    padding: 10px 10px 10px 10px;
    position: absolute;
    background:rgba(1,1,1,0.6);;
    z-index: 5;
    margin-top: 32vh;
    opacity: 1;
    border:solid;
    border-color: grey;
    text-align: center;
    width: 55vw;
  }
  .titleBackground {
    /* background-color: black; */
    opacity: 1;
  }
  .titleText {
    font-size: 40px;
    color: black;
  }
  .titleHead {
    font-size: 70px;
  }
  .titleSubhead {
    font-size: 30px;
  }
  .titleHeadv2 {
    font-size: 40px;
  }
  .titleSubheadv2 {
    font-size: 15px;
  }
  .jumbo-header {
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    background-color: black;
  }
  .container {
    border-radius:50px;
    background-color: #EAEAEA;
    justify-self: center;
    text-align: center;
  }
  .anchor{
    display: block;
    height: 115px; /*same height as header*/
    margin-top: -115px; /*same height as header*/
    visibility: hidden;
  }
  .divider {
    display: block;
    align-self: center;
    margin-bottom: 10px;
    width: 100px;
    height: 5px;
    color: black;
    background-color: black;
  }
  .mini-divider {
    display: block;
    align-self: center;
    margin-top: -10px;
    width: 50px;
    height: 3px;
    color: black;
    background-color: black;
  }
  .flex {
    display: flex;
    justify-content: center;
  }
  .sponsorImage {
    max-height: 500px;
    max-width: 300px;
    min-height: 115px;
    
  }
  /*general screen break points*/
  /* @media screen and (max-width: xxx){
   
  } */
</style>