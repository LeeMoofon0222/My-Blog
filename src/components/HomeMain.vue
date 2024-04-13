<template>
    <v-main class="pt-0"  style="background-color: darkslategray;">
      <div class="carousel-container"></div>
    <div class="fixed-content">
      <img src="https://avatars.githubusercontent.com/u/119401072?v=4" alt="Profile Image" class="profile-image">
      <h1>李沐風 / Moofon</h1>
      <p>WEB / APP / GAME / AI / Full stack</p>
    </div>
      <v-carousel height="750">
        <v-carousel-item
          cover
          v-for="(item, index) in carouselItems"
          :src="item.imageUrl"
          :key="index"
        >
        </v-carousel-item>
      </v-carousel>
      <v-container>
        <v-row>
          <v-col
            v-for="(Development, index) in Developments"
            :key="index"
            cols="12"
            md="4"
            class="py-12"
          >
            <v-card height="450" style="background-color: #CFCFCF;">
              <v-img :src="Development.imageUrl" contain height="300" style="background-color: #666666;"></v-img>
              <v-card-title>{{ Development.name }}</v-card-title>
              <v-card-text>{{ Development.description }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="goToProjectsPageWithSearch(Development.class)">learn more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col cols="12">
          </v-col>
          <v-col
            v-for="(other, index) in others"
            :key="index"
            cols="12"
            md="4"
            class="py-12"
          >
            <v-card height="450">
              <v-img :src="other.imageUrl" contain height="300" style="background-color: #666666;"></v-img>
              <v-card-title>{{ other.name }}</v-card-title>
              <v-card-text>{{ other.description }}</v-card-text>
              <v-card-actions v-if="other.name == 'AI'">
                <v-btn color="primary" @click="goToProjectsPageWithSearch(other.class)">learn more</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn color="primary" to="/other">learn more</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </template>
  
  <script>
    export default {
      data() {
        return {
          Developments: [
            {
              name: 'Full Stack Web Development',
              description: 'Use Vuetify + Asp .Net Core + SQL Server to build a full stack website.',
              class: 'Website',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/Full_Stack.png?raw=true',
            },
            {
              name: 'App Development',
              description: 'Record the App development process and provide simple teaching',
              class: 'App',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/App.png?raw=true',
            },
            {
              name: 'Game Development',
              description: 'Game development using Unity and C#',
              class: 'Game',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/Unity.png?raw=true',
            },
          ],
          others: [
            {
              name: 'AI',
              description: 'Intro My AI projects',
              class: 'AI',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/Ai.png?raw=true',
            },
            {
              name: 'Algorithm and Data Structure',
              description: 'Use C++ solved problems from Leetcode, Uva or Zerojudge',
              class: 'Algorithm Data Structure C++ Leetcode',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/Leetcode.png?raw=true',
            },
            {
              name: 'Life',
              description: 'Record the special moment in my life',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/Daily.png?raw=true',
            },
          ],
          carouselItems: [
            {
              imageUrl:
                'https://github.com/LeeMoofon0222/Dreaming_in_the_sky/raw/main/ReadMe_Picture/Pic2.png?raw=true',
            },
            {
              imageUrl:
                'https://github.com/LeeMoofon0222/Logic.AI/raw/main/ReadMe_Picture/Pic1.png?raw=true',
            },
            {
              imageUrl:
                'https://github.com/LeeMoofon0222/VR-Baseball/blob/main/%E5%9C%96%E7%89%871.png?raw=true',
            },
            {
              imageUrl:
                'https://github.com/LeeMoofon0222/Unity-ML-Agents/blob/main/ReadMe_Picture/Pic19.png?raw=true',
            },
            {
              imageUrl:
                'https://github.com/LeeMoofon0222/Auto-login-NTUT-i-study/blob/main/ReadMe_Picture/Pic10.png?raw=true',
            },
            {
              imageUrl:
                'https://github.com/LeeMoofon0222/Dirty-Detect/blob/main/runs/detect/train32/Pic1.jpg?raw=true',
            },
          ],
        }
      },
      methods: {
    goToProjectsPageWithSearch(classToSearch) {
      this.$router.push({ path: '/projects', query: { search: classToSearch } });
    }
  }
    }
  </script>
  
<style scoped>
.carousel-container {
  position: relative; /* 相對定位，作為輪播圖的容器 */
}

.fixed-content {
  position: absolute; /* 絕對定位，使元素浮動在輪播之上 */
  top: 20%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 精確居中定位 */
  z-index: 2; /* 層疊次序要高於輪播項目 */
  text-align: center; /* 文字居中對齊 */
}

.fixed-content img {
  max-width: 200px; /* 限制圖片寬度 */
  height: auto; /* 高度自動 */
  margin-bottom: 16px; /* 圖片與文字間的間隔 */
}

.fixed-content h1 {
  font-weight: bold;
  margin-bottom: 8px;
  color: #fff; /* 文字顏色 */
  font-size: 48px;
}

.fixed-content p {
  color: #fff; /* 文字顏色 */
  font-size: 36px;
}

.profile-image {
  border-radius: 50%; /* 創建圓形效果 */
  width: 200px; /* 設定固定寬度 */
  height: 200px; /* 設定和寬度相同的高度 */
  object-fit: cover; /* 確保圖片覆蓋整個容器不失真 */
  border: 4px solid white; /* 可選，為圓形圖片添加邊框 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 可選，為圓形圖片添加陰影 */
  margin-bottom: 16px; /* 圖片與下方元素的間隔 */
}

  
</style>
  
  