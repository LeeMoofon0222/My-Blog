<template>
  <v-app>
    <default-bar />
    
    <default-view />
    <default-footer />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultFooter from '@/components/Footer.vue'
  import DefaultView from './View.vue'

</script>
