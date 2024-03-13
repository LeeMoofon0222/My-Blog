<template>
    <v-container class="fill-height bg-deep-purple" fluid>
        <v-form v-model="form" class="mx-auto bg-white rounded-lg pa-5" max-width="344" title="User Registration">
            <v-container>
                <v-text-field v-model="first" color="primary" label="First name" variant="underlined"
                    :rules="[required]"></v-text-field>

                <v-text-field v-model="last" color="primary" label="Last name" variant="underlined"
                    :rules="[required]"></v-text-field>

                <v-text-field v-model="email" color="primary" label="Email" variant="underlined"
                    :rules="emailRules"></v-text-field>

                <v-text-field v-model="password" type="password" color="primary" label="Password" :rules="passwordRules"
                    placeholder="Enter your password" variant="underlined"></v-text-field>

                <v-text-field v-model="confirmPassword" type="password" color="primary" label="Confirm Password"
                    :rules="confirmPasswordRules" placeholder="Re-enter your password" variant="underlined"></v-text-field>
                <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions"></v-checkbox>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn block class="bg-success" :disabled="!form" :to="{ name: dashboard }">
                    Complete Registration

                    <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        form: false,
        first: null,
        last: null,
        email: null,
        password: null,
        confirmPassword: null,
        terms: false,
    }),
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
        emailRules() {
            return [
                (v) => !!v || "Email必須填寫",
                (v) => /.+@.+\..+/.test(v) || "請輸入有效地址",
            ];
        },
    },
    methods: {
        required(v) {
            return !!v || 'Field is required'
        },

    }
}
</script>