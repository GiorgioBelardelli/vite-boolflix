<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import FilmList from './components/FilmList.vue';

import { store } from './store';

export default {
  components: {
    AppHeader,
    FilmList,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getYourSearch() {
      let filmURL = store.filmsURL;
      let serieURL = store.seriesList;

      if (store.filter !== "") {
        filmURL += `&query=${store.filter}`;
        serieURL += `&query=${store.filter}`;

        axios
          .get(filmURL)
          .then((res => {
            store.filmList = res.data.results;
          }))
          .catch((err) => {
            console.log("Errore chiamata axios", err);
          });

        axios
          .get(serieURL)
          .then((res => {
            store.seriesList = res.data.results;
          }))
          .catch((err) => {
            console.log("Errore chiamata axios", err);
          });
      }
    },
  },
}
</script>

<template>
  <AppHeader message="BOOLFLIX" @search="getYourSearch" />
  <main>
    <FilmList />
  </main>
</template>


<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;

main {
  background-color: $grey;
  padding: 2rem;
}
</style>
