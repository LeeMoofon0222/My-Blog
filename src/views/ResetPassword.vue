<template>
    <v-container class="fill-height bg-deep-purple pa-12" fluid>
        <v-card class="ma-auto px-6 py-8 w-100" max-width="512">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field type="password" v-model="password" :readonly="loading" :rules="passwordRules" class="mb-2"
                    clearable label="New Password" placeholder="Enter your password"></v-text-field>

                <v-text-field type="password" v-model="confirmPassword" :readonly="loading" :rules="confirmPasswordRules"
                    clearable label="Confirm Password" placeholder="Confirm password"></v-text-field>

                <br>

                <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                    variant="elevated">
                    Reset Password
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
        password: null,
        confirmPassword: null,
        loading: false,
    }),

    methods: {
        async onSubmit() {
            if (!this.form) return

            this.loading = true

            setTimeout(() => {
                this.loading = false
            }, 2000)

            await new Promise(resolve => setTimeout(resolve, 3000))
            router.push({ name: 'Dashboard', params: { username: this.username, password: this.password } })
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },

    computed: {
        passwordRules() {
            return [
                (v) => !!v || '密碼必須填寫',
                (v) => (v && v.length >= 8) || '密碼必須至少包含8個字符',
                (v) => /[A-Z]/.test(v) || '密碼必須包含至少一個大寫字母',
                (v) => /[a-z]/.test(v) || '密碼必須包含至少一個小寫字母',
                (v) => /\d/.test(v) || '密碼必須包含至少一個數字',
                (v) => /[@#$%^&+=]/.test(v) || '密碼必須包含至少一個特殊字符 (@#$%^&+=)',
            ];
        },
        confirmPasswordRules() {
            return [
                (v) => !!v || "確認密碼必須填寫",
                (v) => v === this.password || "確認密碼與密碼不匹配",
            ];
        },
    },

}
</script>