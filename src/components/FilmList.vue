<script>
import { store } from '../store';


export default {
    name: 'FilmList',
    components: {
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container">
        <h1>FILM LIST GOES HERE</h1>
        <div class="row">
            <ul>
                <li v-for="film in store.filmList">
                    <a href="">
                        {{ film.title }}{{ film.original_title }}{{ film.original_language }}{{ film.vote_average }}
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