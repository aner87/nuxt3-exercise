<template>
  <v-app>
    <v-app-bar color="black" dark>
      <v-app-bar-title class="white--text">
        <v-card elevation="0" color="transparent">
          <div class="d-flex w-100 align-center px-4">
            <img style="width: 30px" src="/images/logo.svg" />
            &nbsp;
            <div class="white--text">NUXT TEST</div>
          </div>
        </v-card>
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-moon-waxing-crescent" @click="switchTheme"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer class="d-flex flex-column transparent">
      <v-card elevation="0" class="d-flex w-100 align-center pa-4">
        <div v-if="!$vuetify.display.xs">Powered by</div>
        &nbsp;
        <img style="width: 30px" src="/images/logo.svg" />
        &nbsp;
        <div class="white--text">Vuetify</div>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
      switchTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "myLightTheme"
          : "myDarkTheme"),
    };
  },
};
</script>
