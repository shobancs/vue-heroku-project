
<template>
  <v-app>
    <v-system-bar app color="grey">
      <router-link to="/" class="header_logo">
        <!--img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/12/ai_02.jpg" /-->
      </router-link>
      <router-link to="/" class="u-hover">AI Software Coporation</router-link>

      <v-spacer></v-spacer>

      <v-row justify="right">
        <v-col md="auto">
          <Callus />
        </v-col>
        <v-col>
          <Emailus />
        </v-col>
      </v-row>
      <v-row justify="left">
        <v-col md="auto">
          <RegisterUser />
        </v-col>
        <v-col>
          <Login />
        </v-col>
      </v-row>
    </v-system-bar>

    <v-app-bar app color="primary">
      <v-spacer absolute permanent right app>
        <div>
          <ul>
            <li>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Solutions</v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in solutions_items"
                    :key="index"
                    :to="item.page"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Services</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in service_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Platforms</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in platform_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Resources</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in resource_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Trainings</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in training_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Partners</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in partner_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">About</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in about_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
          </ul>
        </div>
      </v-spacer>

      <v-btn
        href="https://github.com/AI-Software-Solutions/vuejs-samples/tree/master/ai-layout"
        target="_blank"
        text
      >
        <span class="mr-2">Code base</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content
      id="scroll-target"
      style="max-height:900px"
      class="overflow-y-auto"
      align="center"
      justify="center"
    >
      <router-view
        class="app_view_default"
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
      />
      <router-view
        class="app_view_modal"
        name="modal"
        v-scroll:#scroll-target="onScroll"
        align="center"
        justify="center"
      />
    </v-content>
    <v-navigation-drawer absolute permanent right app  v-model="drawer"
         expand-on-hover
       >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://e3zine.com/wp-content/uploads/2019/10/shutterstock_1111223003web.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Shoban Cheekuru</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>  
        <v-list-item v-for="item in items" :key="item.title" :to="item.page">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-footer absolute class="font-weight-medium grey">
      <Footer />
    </v-footer>
  </v-app>
</template>
        
     

<script>
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import Callus from "./components/Callus";
import Emailus from "./components/Emailus";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Login,
    RegisterUser,
    Callus,
    Emailus,
    Footer
  },
  data: () => ({
    solutions_items: [
      { title: "Business Intelligence", page: "/businessIntelligence" },
      { title: "Application Management", page: "" },
      { title: "Infrastruture Management", page: "" },
      { title: "Digital Experience", page: "" }
    ],
    service_items: [
      { title: "Application Services", page: "/applicationService" },
      { title: "Managed Cloud", page: "" },
      { title: "Managed Hosting", page: "" },
      { title: "Professional Service", page: "" }
    ],
    platform_items: [
      { title: "Amazon Webervices", page: "/Aws" },
      { title: "Google Cloud Computing", page: "" },
      { title: "Infrastruture Management", page: "" },
      { title: "Kubernetes platforms", page: "" }
    ],
    resource_items: [
      { title: "Resource Center", page: "/ResourceCenter" },
      { title: "Customer Stories", page: "" },
      { title: "Events", page: "" },
      { title: "Technical Blog", page: "" }
    ],
    training_items: [
      { title: "DevOps", page: "/DevOps" },
      { title: "Programming Languages", page: "" },
      { title: "AWS Cloud practice", page: "" },
      { title: "MS Azure Cloud practice", page: "" },
      { title: "GCP cloud practice", page: "" },
      { title: "Data Science", page: "" },
      { title: "Machine Learning", page: "" },
      { title: "Internet Of Things", page: "" }
    ],
    partner_items: [
      { title: "Resource Center", page: "/Cloud" },
      { title: "Customer Stories", page: "" },
      { title: "Events", page: "" },
      { title: "Technical Blog", page: "" }
    ],
    about_items: [
      { title: "Resource Center", page: "/WhyAI" },
      { title: "Customer Stories", page: "" },
      { title: "Events", page: "" },
      { title: "Technical Blog", page: "" }
    ],
    items: [
      { title: "Home", icon: "mdi-home-city", page: "/"},
      { title: "My Account", icon: "mdi-account",page: "GilbertCook/profile" },
      { title: "Users", icon: "mdi-account-group-outline" ,page: "/Users"}
    ],
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    
    dialog: false,
     mini: true,
     
  }),
  methods: {
    navigateAndIncrement() {
      const increment = () => this.n++;
      if (this.$route.path === "/") {
        this.$router.push("/foo", increment);
      } else {
        this.$router.push("/", increment);
      }
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    }
  }
};
</script>
<style lang="scss">
.v-application--wrap {
  display: block; /* fix for IE11 */
  font-family: inherit;
  background-color: #fff;
}
.head1 {
  margin-bottom: 20px;
  padding: 0px;
  font-size: 30pt;
}
.item {
  border-left: 3px solid #ffba75;
  margin: 5px 5px 8px 0px;
  padding: 3px 3px 5px 10px;
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bk {
  vertical-align: top;
  margin-top: 20px;
}
.list {
  width: 100%;
}
@media screen and (min-width: 1000px) {
  .bk {
    display: inline-block;
    margin: 10px 90px 60px 0px;
  }
  .list {
    width: 400px;
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
* {
  -webkit-tap-highlight-color: rgba(#42b983, 0.1);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.5vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ebf4ec;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  @media (min-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 780px) {
    font-size: 2vw;
  }
  @media (max-width: 580px) {
    font-size: 3vw;
  }
}
#app {
  padding-bottom: 10vmin;
}

.u-hover {
  &:hover {
    color: #42b983 !important;
    transition: color 200ms ease !important;
  }
}

.title {
  line-height: 1;
  font-size: 6vmin;
  padding: 6vmin 0;
  position: relative;
  left: -0.1em;
}

.subtitle {
  white-space: pre;
  word-spacing: normal;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  line-height: 1.5;
  font-size: 110%;
  padding: 0.25em 0.5em;
  background-color: rgba(#42b983, 0.2);
  color: darken(#42b983, 15%);
  border-radius: 5px;
  display: inline-block;
}

.title--cover {
  line-height: 1;
  padding: 6vmin 0;
  text-align: center;
  background-color: #42b983;
  color: #ffffff;
  left: 0;
}

.nestedRoutes {
  background-color: rgba(#42b983, 0.2);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(#000000, 0.035);
  margin-bottom: 6vmin;
  padding: 4vmin;
}

.nestedRoutes_title {
  margin-bottom: 4vmin;
  line-height: 1;
  font-size: 200%;
}

.nestedRoutes_view {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.nestedRoutes_links {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4vmin;
}
.nestedRoutes_links a {
  display: block;
  text-transform: uppercase;
  padding: 1em 2em;
  margin-right: 1em;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(#000000, 0.035);
  font-weight: bold;
  &.router-link-exact-active {
    background-color: #42b983;
    color: #ffffff;
    pointer-events: none;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(mix(#2c3e50, #000000, 30%), 0.85);
  z-index: 99999;
  padding: 3vmax;
  cursor: zoom-out;
}
.modal_conatiner {
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 15px;
  cursor: auto;
  overflow: hidden;
}

.grid {
  @media (min-width: 1000px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    > div {
      min-width: 48.5%;
      margin-right: 3%;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 1000px) {
    > div {
      margin-bottom: 10%;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.tweets {
  position: relative;
}
.tweet {
  padding: 6vmin 4vmin;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(#000000, 0.035);
  margin-top: 3vmin;
  &:first-child {
    margin-top: 0;
  }
  > a {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &--user > a {
    align-items: center;
  }
}
.tweet_avatar {
  position: relative;
  min-width: 5vw;
  min-height: 5vw;
  border-radius: 5%;
  margin-right: 2em;
  &--circle {
    border-radius: 50%;
  }
}
.tweet_content {
  position: relative;
}
.tweet_name {
  font-weight: 900;
  margin-bottom: 1rem;
  font-size: 125%;
  display: block;
  line-height: 1;
}
.tweet_media {
  width: 100%;
  height: 20vmin;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150%;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  border-radius: 5px;
  margin-bottom: 1rem;
  &[data-color="blue"] {
    background-color: blue;
  }
  &[data-color="red"] {
    background-color: red;
  }
  &[data-color="pink"] {
    background-color: pink;
  }
  &[data-color="yellow"] {
    background-color: yellow;
  }
}
.tweet_text {
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.5;
}
</style>

<style scoped lang="scss">
.header {
  position: relative;
  z-index: 99;
  padding: 3vmax;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header_logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2em;
  img {
    position: relative;
    top: (3em * 0.05);
    width: 3em;
    height: 3em;
    transform: translateZ(0);
  }
  &:hover {
    opacity: 0.3;
    transition: opacity 200ms ease !important;
  }
}
.header_links,
.header_nav {
  a {
    margin-right: 0.7em;
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:after {
      content: "|";
      padding-left: 0.7em;
      color: rgba(#2c3e50, 0.2) !important;
    }
    &:last-child:after {
      display: none;
    }
  }
}
.header_links {
  margin-left: auto;
}
.app_view_default {
  padding: 0 3vmax;
}
body,
html {
  height: 100%;
}
</style>

