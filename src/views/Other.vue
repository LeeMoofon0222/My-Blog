<template>
    
  <v-text-field v-model="search" clearable hide-details label="Search Projects..." prepend-inner-icon="mdi-magnify"
      single-line></v-text-field>
  <v-main class="pt-0"  style="background-color: darkslategray;">
  <v-container>
      <v-row>
          <v-col v-for="project in displayedProjects" :key="project.id" cols="12" sm="6" md="4">
              <v-card height="460" width="530" link style="background-color: #CFCFCF;">
                  <v-img :src="project.imageUrl" contain height="295"></v-img>
                  <v-card-title>{{ project.title }}</v-card-title>
                  <v-card-text class="d-flex justify-space-between align-center">
                  <span>{{ project.about }}</span>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn color="primary">Details</v-btn>
                  </v-card-actions>
              </v-card>
          </v-col>
      </v-row>
      <v-pagination v-model="page" :length="Math.ceil(totalProject / perPage)"></v-pagination>
  </v-container>
</v-main>
</template>

<script>
export default {
  data() {
      return {
          search: '',
          page: 1,
          perPage: 6,
          projects: [
          {
                  "id": 1,
                  "title": "Englist",
                  "about": "This is a Flutter app that Users can use it to collect words they want to remember into their notes anytime, anywhere.",
                  "imageUrl": "https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/Englist.png?raw=true",
                  "tag": "App Flutter Dart "
              },
              {
                  "id": 2,
                  "title": "VR-Baseball",
                  "about": "This is a VR Game created with Unity. Users can use it to play baseball in a virtual world.",
                  "imageUrl": "https://github.com/LeeMoofon0222/VR-Baseball/raw/main/%E5%9C%96%E7%89%871.png",
                  "tag": "Game Unity VR"
              },
              {
                  "id": 3,
                  "title": "Logic.AI",
                  "about": "This is a NO CODE tool that allows users to easily apply logical reasoning to identify patterns in data.",
                  "imageUrl": "https://github.com/LeeMoofon0222/Logic.AI/raw/main/ReadMe_Picture/Pic1.png?raw=true",
                  "tag": "AI YOLO python"
              },
              {
                  "id": 4,
                  "title": "Auto-login-NTUT-i-study",
                  "about": "The purpose of this project is to expedite access to the NTUT iStudy platform and save more time.",
                  "imageUrl": "https://github.com/LeeMoofon0222/Auto-login-NTUT-i-study/blob/main/ReadMe_Picture/Pic10.png?raw=true",
                  "tag": "AI selenium python open-cv"
              },
              {
                  "id": 5,
                  "title": "DIS",
                  "about": "The game is built with the Unity3D engine, using the Universal Render Pipeline for rendering. It adopts a Low Poly visual style",
                  "imageUrl": "https://github.com/LeeMoofon0222/Dreaming_in_the_sky/raw/main/ReadMe_Picture/Pic2.png?raw=true",
                  "tag": "Game Unity"
              },
              {
                  "id": 6,
                  "title": "Escaped from space",
                  "about": "This project is a game developed using pygame. In this game, player can control a spaceship that can move and also shoot missiles.",
                  "imageUrl": "https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/Escaped%20from%20space.png?raw=true",
                  "tag": "Game Python Pygame"
              },
              {
                  "id": 7,
                  "title": "Auto parking",
                  "about": "Utilizing the built-in package ML-Agents in Unity, we employ reinforcement learning techniques to enable a virtual car to achieve automated parking functionality.",
                  "imageUrl": "https://github.com/LeeMoofon0222/Unity-ML-Agents/blob/main/ReadMe_Picture/Pic19.png?raw=true",
                  "tag": "Game Unity AI"
              },
              {
                  "id": 8,
                  "title": "My-Blog",
                  "about": "This is a Blog which is the website you're waching. It record my projects and other thing. Created with Vuetify+Asp.net Core",
                  "imageUrl": "https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/Blog.png?raw=true",
                  "tag": "Website Vuetify Asp.net Core"
              },
          ],
      }
  },
  created() {
      if (this.$route.query.search) {
          this.search = this.$route.query.search;
      }
  },
  computed: {
      totalProject() {
          return this.searching.length;
      },
      displayedProjects() {
          const start = (this.page - 1) * this.perPage;
          const end = start + this.perPage;
          return this.searching.slice(start, end);
      },
      searching() {
          if (!this.search) return this.projects;

          const search = this.search.toLowerCase();

          return this.projects.filter(project => {
              const text = project.title.toLowerCase() + project.content.toLowerCase() + project.tag.toLowerCase();

              return text.indexOf(search) > -1;
          })
      },
  }
}
</script>