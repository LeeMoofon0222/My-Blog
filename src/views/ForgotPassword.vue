<template>
    <v-container class="fill-height bg-deep-purple pa-12" fluid>
        <v-card class="ma-auto px-6 py-8 w-100" max-width="512">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field v-model="email" :readonly="loading" :rules="required" class="mb-2" clearable
                    label="Email"></v-text-field>
                <br>

                <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                    variant="elevated">
                    Sent OTP
                </v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import router from '@/router'

export default {
    data: () => ({
        form: false,
        email: null,
        loading: false,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return

            this.loading = true

            setTimeout(() => {
                this.loading = false
                router.push({ name: 'OTP', params: { email: this.email } })
            }, 2000)
        },
    },
    computed: {
        required() {
            return [
                (v) => !!v || "Email必須填寫",
                (v) => /.+@.+\..+/.test(v) || "請輸入有效地址",
            ];
        },
    }
}
</script>./ForgotPassword.vue