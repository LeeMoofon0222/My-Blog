<template>
    <v-main>
        <v-container>
            <!-- 用戶信息卡片 -->
            <v-card class="mb-4">
                <v-card-title class="text-h5">用戶信息</v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>用戶名: John Doe</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>電子郵件: johndoe@example.com</v-list-item-title>
                        </v-list-item>
                        <!-- 添加其他用戶信息字段 -->
                    </v-list>
                </v-card-text>
            </v-card>

            <!-- 功能按鈕 -->
            <v-row class="mb-4">
                <v-col cols="3">
                    <v-btn block color="primary" @click="navigateToPendingPayments">待付款</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn block color="success" @click="navigateToPendingShipments">待出貨</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn block color="info" @click="navigateToPendingReceipts">待收貨</v-btn>
                </v-col>
                <v-col cols="3">
                    <v-btn block color="warning" @click="navigateToReviews">評價</v-btn>
                </v-col>
            </v-row>

            <!-- 其他用戶儀表板功能 -->
            <v-card class="mb-4" link>
                <v-card-title class="text-h5">我的電子錢包</v-card-title>
                <v-card-text>
                    <!-- 添加電子錢包相關內容和操作 -->
                </v-card-text>
            </v-card>

            <v-card class="mb-4" link>
                <v-card-title class="text-h5">優惠券</v-card-title>
                <v-card-text>
                    <!-- 添加優惠券相關內容和操作 -->
                </v-card-text>
            </v-card>

            <v-card class="mb-4" link>
                <v-card-title class="text-h5">我的評價</v-card-title>
                <v-card-text>
                    <!-- 添加我的評價相關內容和操作 -->
                </v-card-text>
            </v-card>

            <v-card class="mb-4" link>
                <v-card-title class="text-h5">瀏覽記錄</v-card-title>
                <v-card-text>
                    <!-- 添加瀏覽記錄相關內容和操作 -->
                </v-card-text>
            </v-card>
        </v-container>
    </v-main>
</template>

<script>
export default {
    methods: {
        navigateToPendingPayments() {
            // 導航至待付款頁面的邏輯
        },
        navigateToPendingShipments() {
            // 導航至待出貨頁面的邏輯
        },
        navigateToPendingReceipts() {
            // 導航至待收貨頁面的邏輯
        },
        navigateToReviews() {
            // 導航至評價頁面的邏輯
        },
    },
};
</script>