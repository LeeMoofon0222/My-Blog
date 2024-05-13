<template>
    <v-container class="grey lighten-5">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">

          <v-row class="my-6">
            <v-col cols="12" md="4" class="text-center">
              <v-avatar size="200" class="mb-4">
                <img src="https://avatars.githubusercontent.com/u/119401072?v=4" alt="Moofon Avatar" class="avatar-image">
              </v-avatar>
              <h1 class="headline mb-2">李沐風/Moofon</h1>
              <p class="subtitle-1 grey--text">
                A 19-years-old student studying in Taiwan
              </p>
            </v-col>
  
            <v-col cols="12" md="8">
              <h2 class="mb-3">Intro</h2>
              <br>
              <p class="body-1">
                <v-icon small left>mdi-palette</v-icon>
                🌱 A Full-Stack engineer focus on Website, Mobile App and Game Design
              </p>
              <p class="body-1">
                <v-icon small left>mdi-robot</v-icon>
                📚 Recently learning Algorithms and Data structures
              </p>
              <p class="body-1">
                <v-icon small left>mdi-console-line</v-icon>
                🔭 Currently studing in NTUT <br>(Department of Intelligent Automation Engineering) forth grade
              </p>
              <p class="body-1">
                <v-icon small left>mdi-basketball</v-icon>
                🏀 Basketball lovers
              </p>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col cols="12">
              <h2 class="subtitle-1 font-weight-bold mb-3">Interests & Hobbies</h2>
              <p class="body-1">
                Technology Market Analysis
              </p>
              <p class="body-2">
                It was during the summer following my ninth grade that I first dabbled in the analysis of tech markets. Without the means to invest, I honed my ability to dissect industry news and trends, enriching my understanding of tech businesses and inadvertently sharpening my analytical skills.
              </p>
              <br>
              <p class="body-1">
                Basketball
              </p>
              <p class="body-2">
                The local courts are where I unwind and channel my energy. Every weekend, I devote a couple of hours to basketball. It's not just about keeping fit; it's where I find my rhythm and, for a moment, let the world fade into the background. It's become one of my favorite sports for the sense of achievement and the community it fosters.
              </p>
              <br>
              <p class="body-1">
                European and American TV Series
              </p>
              <p class="body-2">
                My downtime often features a backdrop of Western series. Not only do they serve as an entertainment portal, but they also enhance my English proficiency. Immersing myself in authentic accents and colloquialisms sharpens my listening skills and broadens my vocabulary.
              </p>
            </v-col>
          </v-row>
          
        </v-col>
      </v-row>
    </v-container>
  </template>
 
  
<style scoped>
  .headline {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  
  .mb-3 {
    margin-bottom: 1rem;
    font-size: 32px;
  }
  
  .my-6 {
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .avatar-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.body-1 {
  margin-bottom: 8px;
  color: black;
  font-size: 22px;
}

.mb-4 {
  margin-bottom: 1rem;
}


@media (max-width: 599px) {
  .avatar-image {
    max-width: 80%;
    max-height: 80%;
  }
}
  </style>
  