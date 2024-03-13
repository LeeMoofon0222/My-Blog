<template>
  <v-app-bar class="px-1" color="grey">
    <v-btn icon="mdi-home" to="/index"></v-btn>
    <v-app-bar-title>Moofon's Blog</v-app-bar-title>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/index">Home page</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/shop">Projects</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/about">About Me</v-btn>
    <v-btn color="white" variant="text" class="mx-2" rounded="xl" to="/contact">Contact Me</v-btn>
    <v-spacer></v-spacer>

    <v-btn class="mx-3" icon="mdi-cart-outline"></v-btn>
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn class="mr-3"  icon v-bind="props">
          <v-avatar  color="brown" size="large">
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
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
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
    <v-menu min-width="200px" rounded>
  <template v-slot:activator="{ props }">
    <v-btn icon v-bind="props">
      <v-avatar color="brown" size="large">
        <v-icon>mdi-login</v-icon>
      </v-avatar>
    </v-btn>
  </template>
  <v-card>
    <v-card-text>
      <div class="mx-auto text-center">
        <v-btn rounded variant="text" to="/login">
          Login
        </v-btn>
        <v-btn rounded variant="text" to="/login/register">
        Register
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
      initials: 'JD',
      fullName: 'John Doe',
      email: 'john.doe@doe.com',
    },
  }),
}
</script>