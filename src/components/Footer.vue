<script setup>
import { reactive } from 'vue';

const socialMedias = reactive([
    {
        icon: 'mdi-facebook',
        link: 'https://www.facebook.com/moofon0222'
    },
    {
        icon: 'mdi-instagram',
        link: 'https://www.instagram.com/moofon0222/'
    },
    {
        icon: 'mdi-github',
        link: 'https://github.com/LeeMoofon0222'
    },
])


</script>


<template>
    <v-footer rounded class="bg-grey-lighten-1">
        <v-row justify="center" no-gutters>

            <v-col class="text-center mt-4" cols="12">
                <v-btn v-for="media in socialMedias" :key="media" class="mx-4" :icon="media.icon" :href="media.link"
                    variant="text" target="_blank"></v-btn>
            </v-col>


            <v-col class="text-center mt-4" cols="12">
                <strong>©Copyright All rights reserved.</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>