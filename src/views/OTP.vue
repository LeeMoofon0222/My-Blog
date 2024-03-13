<template>
    <v-container class="d-flex flex-column fill-height justify-center">
        <span class="text-h4"><strong>請輸入驗證碼</strong></span>
        <v-otp-input v-model="otp" type="password" :loading="loading" @finish="onFinish"></v-otp-input>
        <v-container class="d-flex flex-row justify-center align-center">
            <div>驗證碼將在{{ time }}秒后失效</div>
            <v-btn class="mx-5 bg-success" text="重新發送" @click="resendOTP"></v-btn>
        </v-container>
        <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
            {{ text }}
        </v-snackbar>
    </v-container>
</template>

<script>
import router from '@/router'
export default {
    data: () => ({
        timer: null,
        time: 60,
        loading: false,
        snackbar: false,
        snackbarColor: 'default',
        otp: '',
        text: '',
        expectedOtp: '123456',
        username: 'DogCom',
    }),
    mounted() {
        this.timer = setInterval(this.countdown, 1000);
    },
    methods: {
        async onFinish(rsp) {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
                this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`
                this.snackbar = true
            }, 1000)

            if (rsp === this.expectedOtp) {
                await new Promise(resolve => setTimeout(resolve, 3000));
                router.push({ name: 'ResetPassword', params: { username: this.username } });

            }
        },
        countdown() {
            this.time--;
            if (this.time == 0) {
                clearInterval(this.timer)
            }
        },
        resendOTP() {
            // 像後端發送請求
            // 後端接收后發送email或短信
        }
    },
    beforeUnmount() {
        clearInterval(this.timer);
    }
}
</script>