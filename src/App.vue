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
    getFilms() {
      let myURL = store.apiURL;

      if (store.filterFilm !== "") {
        myURL += `&query=${store.filterFilm}`;

        axios
          .get(myURL)
          .then((res => {
            store.filmList = res.data.results;
          }))
          .catch((err) => {
            console.log("Errore chiamata axios", err);
          })

      }
    }
  },
  created() {
    this.getFilms();
  },
}
</script>

<template>
  <AppHeader message="BOOLFLIX" @search="getFilms" />
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
