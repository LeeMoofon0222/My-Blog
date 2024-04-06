<template>
    <v-app>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
            <template v-slot:title>
              This is a title
            </template>
            <v-card-text>
              This is content
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
</template>