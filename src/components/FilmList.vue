<script>
import { store } from '../store';


export default {
    name: 'FilmList',
    components: {
    },
    data() {
        return {
            store,

        }
    },
    methods: {
        getFlagPath(language) {
            return `../assets/${language}.png`;
        },

    },
}
</script>

<template>
    <div class="container">
        <h1>FILM LIST GOES HERE</h1>
        <div class="row">
            <ul>
                <li v-for="film in  store.filmList " :key="film.id">
                    <a href="#">
                        {{ film.title }}\\{{ film.original_title }}\\{{ film.vote_average }}//{{ film.original_language }}
                        <img :src="getFlagPath(film.original_language)">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ul {
        list-style: none;
        display: inline;

        a {
            color: $black;
            text-decoration: none;
        }
    }
}
</style>