<template>
    <v-main>
        <!-- 公司簡介部分 -->
        <section>
            <v-container class="text-center">
                <h1 class="mb-4 text-h1">小明寵物店</h1>
                <v-divider></v-divider>

                <!-- 公司介紹 -->
                <section class="my-4">
                    <h4 class="text-h4">公司介紹</h4>
                    <p>
                        小明寵物店成立於2000年，致力於提供最優質的寵物服務和產品。我們以熱情的態度、高品質的服務和公道的價格而自豪。
                    </p>
                </section>

                <!-- 企業文化 -->
                <section class="my-4">
                    <h4 class="text-h4">企業文化</h4>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-body-1">關懷與尊重：我們對待寵物和寵物主人都充滿關懷和尊重。</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title
                                    class="text-body-1">卓越的服務：我們追求卓越，不僅提供高品質的寵物產品，還為寵物主人提供專業的咨詢和支持。</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-body-1">社區參與：我們驕傲地融入社區，並積極參與寵物相關的公益活動。</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </section>

                <!-- 公司願景 -->
                <section class="my-4">
                    <h4 class="text-h4">公司願景</h4>
                    <p>
                        小明寵物店的願景是成為寵物服務領域的全球領袖。我們希望通過我們的努力，改善寵物和寵物主人的生活，並為社會創造更多的善意和關懷。
                    </p>
                </section>

                <!-- 公司賣點 -->
                <section class="my-4">
                    <h4 class="text-h4">我們的賣點</h4>
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-body-1">專業團隊：我們擁有一支經過專業培訓的團隊，了解不同種類的寵物需求。</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-body-1">品質保證：我們只提供最高品質的寵物產品，包括食品、用具、藥品等。</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-body-1">定制服務：我們提供定制的服務和建議，以滿足不同寵物的需求。</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-body-1">社區參與：我們積極參與社區，定期舉辦寵物相關的活動和義工工作。</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </section>
            </v-container>
        </section>

        <!-- 服務部分 -->
        <section>
            <v-container>
                <h2>我們的服務</h2>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="" alt="寵物美容服務"></v-img>
                            <v-card-title>寵物美容</v-card-title>
                            <v-card-text>
                                我們提供專業的寵物美容服務，讓您的寵物看起來煥然一新。
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="" alt="寵物寄養服務"></v-img>
                            <v-card-title>寵物寄養</v-card-title>
                            <v-card-text>
                                無論您需要短期或長期的寵物寄養，我們都為您提供安全舒適的環境。
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="" alt="寵物訓練服務"></v-img>
                            <v-card-title>寵物訓練</v-card-title>
                            <v-card-text>
                                我們的專業訓練師將幫助您的寵物培養好行為和技能。
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- 產品部分 -->
        <section>
            <v-container>
                <h2>我們的產品</h2>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="" alt="寵物食品"></v-img>
                            <v-card-title>寵物食品</v-card-title>
                            <v-card-text>
                                從高質量的寵物食品到零食，我們有各種各樣的選擇。
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="" alt="寵物玩具"></v-img>
                            <v-card-title>寵物玩具</v-card-title>
                            <v-card-text>
                                我們提供各種各樣的寵物玩具，讓您的寵物保持活躍和快樂。
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-img src="" alt="寵物用品"></v-img>
                            <v-card-title>寵物用品</v-card-title>
                            <v-card-text>
                                從項圈到穿戴配件，我們提供一系列寵物用品以滿足您的需求。
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <!-- 聯系信息部分 -->
        <section>
            <v-container>
                <h2>聯系我們</h2>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-card>
                            <v-card-title>營業時間</v-card-title>
                            <v-card-text>
                                周一至周五: 9:00 AM - 6:00 PM<br>
                                周六至周日: 10:00 AM - 4:00 PM
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-card>
                            <v-card-title>聯系信息</v-card-title>
                            <v-card-text>
                                地址：123 寵物大道，城市，郵編<br>
                                電話：(123) 456-7890<br>
                                電子郵件：info@xiaomingpets.com
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </v-main>
</template>
