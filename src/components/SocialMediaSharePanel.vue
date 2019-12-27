<template >
  <v-container class=" lighten-5" absolute permanent right app>
    <v-row no-gutters right>
      <v-col>
        
         <strong>Follow Us:</strong>
        <a :href="link.url" :title="link.title" target="_blank"   v-for="link in socialmedia_links"
            :key="link.title"
            text
            rounded
            class="my-2"
            >
        
         <v-icon>{{ link.icon }}</v-icon>
        </a>

          <strong> Share :</strong>
         
          <facebook :url="url" scale="1.2"></facebook>
          <twitter :url="url" title="Check me on Github" scale="1.2"></twitter>
          <linkedin :url="url" scale="1.2"></linkedin>
          <telegram :url="url" scale="1.2"></telegram>
          <whats-app :url="url" title="Hello" scale="1.2"></whats-app>
          <pinterest :url="url" scale="1.2"></pinterest>
          <reddit :url="url" scale="1.2" title="My Github"></reddit>
          <email :url="url" subject="Hello" scale="1.2"></email>
      
      </v-col>
      
    </v-row>
  </v-container>
</template>
<script>

import {
  Facebook,
  Twitter,
  Linkedin,
  Pinterest,
  Reddit,
  Telegram,
  WhatsApp,
  Email,
  
  
} from "vue-socialmedia-share";

export default {
    name: "app",
  components: {
    Facebook,
    Twitter,
    Linkedin,
    Telegram,
    WhatsApp,
    Pinterest,
    Reddit,
    Email,

},
    data: () => ({
    socialmedia_links: [
      { title: "LinkedIn", icon: "mdi-linkedin-box", url: "https://www.linkedin.com/company" },
      { title: "Facebook", icon: "mdi-facebook-box", url: "https://www.facebook.com/shoban.cheekuru" },
      { title: "Youtube", icon: "mdi-youtube", url: "https://www.youtube.com/user/123shoban/videos" },
      { title: "Instagram", icon: "mdi-instagram", url: "https://www.instagram.com/shobancs/" },
      { title: "Twitter", icon: "mdi-twitter-box", url: "https://twitter.com/shobancs" }
    ],
    })
}
</script>