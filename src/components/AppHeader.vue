<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    props: ['message'],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <h1>{{ message }}</h1>

            <div id="search-container">
                <input class="text-input" type="text" placeholder="Cerca un film..." v-model="store.filter">
                <input class="search-button" type="button" value="Cerca" @click="$emit('search')">
            </div>

        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

header {
    background-color: $black;
    padding: 1rem;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        color: $red;
    }

    input {
        padding: .5rem .7rem;
        font-size: 15px;
        border-radius: 5px;
        border: 0px;
        margin: 0 .5rem;
    }

    .text-input {
        border: 2px solid $grey;
    }

    .search-button {
        background-color: $red;
        cursor: pointer;
    }
}
</style>