<template>
  <v-app dark style="background-color: #ff8a00 !important">
    <v-container :style="$vuetify.breakpoint.xs ? '' : 'max-width: 600px'">
      <v-card elevation="0" color="transparent" align="center">
        <NuxtLink to="/">
          <v-img width="100px" src="/assets/icon.png" class="mt-6 mb-2"></v-img>
        </NuxtLink>
        <v-card-subtitle class="black--text">
          <b>
            Nothing to see here. Please head back.
            <NuxtLink to="/">back</NuxtLink>
          </b>
        </v-card-subtitle>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Page not found",
      otherError: "Unknown error.",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
