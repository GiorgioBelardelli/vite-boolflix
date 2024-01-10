<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'

import { store } from './store';

export default {
  components: {

  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <h1>START</h1>
</template>


<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
</style>
