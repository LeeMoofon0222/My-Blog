<template>
  <v-app-bar class="px-1" color="#2F4F4F">
    <v-btn icon="mdi-home" to="/index"></v-btn>
    <v-app-bar-title>Moofon's Blog</v-app-bar-title>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/index">Home page</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/shop">Projects</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/posts">Your Posts</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/about">About Me</v-btn>
    <v-spacer></v-spacer>

    <v-menu min-width="200px" rounded v-if="user.initials===''" >
      <template v-slot:activator="{ on }">
        <router-link class="mr-3" :to="'/login'" v-on="on">
          <v-btn icon>
            <v-avatar color="white" size="large">
              <v-icon>mdi-login</v-icon>
            </v-avatar>
          </v-btn>
        </router-link>
      </template>
    </v-menu>

    <v-menu min-width="200px" rounded v-else>
      <template v-slot:activator="{ props }">
        <v-btn class="mr-3"  icon v-bind="props">
          <v-avatar  color="white" size="large">
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card color="white">
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text">
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text">
              Disconnect
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn rounded variant="text" to="/login">
              Logout
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: '',
      fullName: '',
      email: '',
    },
  }),
}
</script>