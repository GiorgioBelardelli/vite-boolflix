<script>
import { store } from '../store';
import Card from './Card.vue';

export default {
    name: 'FilmList',
    components: {
        Card,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <h1>FILM E SERIE DISPONIBILI:</h1>
        <div class="row">
            <ul>
                <li v-for="film in store.filmsList" :key="film.id">
                    <Card :info="film" />
                </li>
                <li v-for="serie in store.seriesList" :key="serie.id">
                    <Card :info="serie" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

h1 {
    padding: 2rem;
}

.row {

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

    }
}
</style>