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
        getFlag(language) {

            if (language === "it" || language === "es" || language === "en" || language === "fr") {
                return `/${language}.png`
            } else {
                return `/settings.png`
            }

        },
        getPoster(poster) {
            return `https://image.tmdb.org/t/p/w342/${poster}`
        },
        getStars(voto) {
            const stars = Math.ceil(voto / 2);
            const starList = [];

            for (let i = 0; i < 5; i++) {
                if (i <= stars) {
                    starList.push('fa-solid fa-star');
                } else {
                    starList.push('fa-regular fa-star');
                }
            }
            return starList;
        },
    },
}
</script>

<template>
    <div class="container">
        <h1>FILM LIST GOES HERE</h1>
        <div class="row">
            <ul>
                <li v-for="film in store.filmsList" :key="film.id">
                    <a href="#">
                        {{ film.title }}\\{{ film.original_title }}\\{{ film.vote_average }}
                        <img :src="getFlag(film.original_language)">
                        <img :src="getPoster(film.poster_path)" :alt="film.title + ' poster'">
                    </a>
                    <i v-for="starClass in getStars(film.vote_average)" :class="starClass"></i>
                </li>
                <li v-for="serie in store.seriesList" :key="serie.id">
                    <a href="#">
                        {{ serie.name }}\\{{ serie.original_name }}\\{{ serie.vote_average }}
                        <img :src="getFlag(serie.original_language)">
                        <img :src="getPoster(serie.poster_path)" :alt="serie.name + ' poster'">
                        <i v-for="starClass in getStars(serie.vote_average)" :class="starClass"></i>
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