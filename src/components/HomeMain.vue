<template>
    <v-main class="pt-0"  style="background-color: darkslategray;">
      <div class="carousel-container"></div>
    <!-- 固定內容的容器 -->
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
            <v-card height="450">
              <v-img :src="Development.imageUrl" contain height="300"></v-img>
              <v-card-title>{{ Development.name }}</v-card-title>
              <v-card-text>{{ Development.description }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary">learn more</v-btn>
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
              <v-img :src="other.imageUrl" contain height="300"></v-img>
              <v-card-title>{{ other.name }}</v-card-title>
              <v-card-text>{{ other.description }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary">learn more</v-btn>
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
              description: 'Use Vuetify + Asp .Net Core + SQL Server to build a website.',
              imageUrl:
                'https://assets.materialup.com/uploads/77fccd42-2e01-423b-a759-590c5aaa426e/preview.png',
            },
            {
              name: 'App Development',
              description: 'Record the App development process and provide simple teaching',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/5069.png?raw=true',
            },
            {
              name: 'Game Development',
              description: '3D Game Development, VR Game Development and Reinforcement learning',
              imageUrl:
                'data:image/png;base64,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',
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
          others: [
            {
              name: 'AI',
              description: 'Intro My AI projects',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/826118.png?raw=true',
            },
            {
              name: 'Algorithm and Data Structure',
              description: 'Use C++ solved problems from Leetcode, Uva or Zerojudge',
              imageUrl:
                'data:image/png;base64,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',
            },
            {
              name: 'Daily-Life',
              description: 'Record my daily life and my thoughts.',
              imageUrl:
                'https://github.com/LeeMoofon0222/Picture-Repository/blob/main/Pictures/1933926.png?raw=true',
            },
          ],
        }
      },
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
  
  