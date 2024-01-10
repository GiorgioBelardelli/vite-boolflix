<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'

import { store } from './store';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <AppHeader message="BOOLFLIX" />
  <main>
    <h1>FILMLIST GOES HERE</h1>
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
