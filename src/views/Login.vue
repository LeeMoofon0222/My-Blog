<template>
    <v-form v-model="form">
        <v-img class="mx-auto my-6" max-width="228"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>

        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

            <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password

                <a @click.prevent="OTPPage" class="text-caption text-decoration-none text-blue" href="#"
                    rel="noopener noreferrer" target="_blank">
                    Forgot login password?</a>
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>

            <v-card class="mb-12" color="surface-variant" variant="tonal">
                <v-card-text class="text-medium-emphasis text-caption">
                    Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three
                    hours. If you must login now, you can also click "Forgot login password?" below to reset the login
                    password.
                </v-card-text>
            </v-card>

            <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="onSubmit">
                Log In
            </v-btn>

            <v-card-text class="text-center" link>
                <a class="text-blue text-decoration-none" rel="noopener noreferrer" @click.prevent="navigateToRegister">
                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </v-form>
</template>
<script>
import router from '@/router';
import axios from 'axios';

axios({
    method: 'get',
    url: 'https://localhost:44330/api/Blog/1'
})
.then((response) => console.log(response))
.catch((error) => console.log(error))

export default {
    data: () => ({
        form: false,
        visible: false,
    }),
    methods: {
        OTPPage() {
            router.push({ name: 'OTP' })
        },
        async onSubmit() {
            if (!this.form) return
            await new Promise(resolve => setTimeout(resolve, 3000))
            router.push({ name: 'Dashboard', params: { username: this.username, password: this.password } })
        },
        navigateToRegister() {
            router.push('/register')
        }
    }
}
</script>