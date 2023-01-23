<template>
  <v-container style="min-height: 100vh">
    <v-row justify="center" class="mb-10">
      <v-col cols="12">
        <!-- TABLE HERE -->

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //data is the equivalent of the "states" of React, they can be assigned using "this."
  data() {
    return {
      breweries: [],
    };
  },

  //"mounted" is the equivalent of "useEffect" in React: a Nuxt hook that starts when HTML is ready to render
  async mounted() {
    this.breweries = await this.fetchBreweries();
  },

  methods: {
    async fetchBreweries() {
      //fetch data using $fetch (Nuxt3 built-in method) and populate a vuetify table => docs here https://next.vuetifyjs.com/en/components/tables/
      //after data has been fetched, sort the breweries alphabetically by "city", but omit whichever has no "state" or shows "Idaho" as state
      //API: https://api.openbrewerydb.org/breweries

      //happy coding! 😁
    },
  },
};
</script>
