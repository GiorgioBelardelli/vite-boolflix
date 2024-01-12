<script>
import { store } from '../store';

export default {
    name: 'Card',
    props: {
        info: Object
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
        <div class="card">
            <div class="card-front">
                <div class="img-container">
                    <img :src="getPoster(info.poster_path)" :alt="info.title || info.name + ' poster'">
                </div>
                <div class="title-container">
                    <h5>{{ info.title || info.name }}</h5>
                </div>
            </div>
            <div class="card-retro">
                <h3>Titolo: {{ info.title || info.name }} </h3>
                <h3>Titolo originale: {{ info.original_title || info.original_name }} </h3>
                <p>{{ info.overview }}</p>
                <div class="lang-container">
                    <h3>Lingua originale:</h3>
                    <img :src="getFlag(info.original_language)">
                </div>
                <div class="vote-container">
                    <h3>Media dei voti: </h3>
                    <i v-for="starClass in getStars(info.vote_average)" :key="starClass" :class="starClass"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.card {
    position: relative;
    width: 20rem;
    height: 35rem;
    margin-bottom: 3rem;

    .card-front,
    .card-retro {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: opacity 0.3s;
    }

    &:hover .card-front {
        opacity: 0;
    }

    &:hover .card-retro {
        opacity: 1;
    }

    .card-front {
        background-color: $black;
        border-radius: 10px;
        opacity: 1;
        text-align: center;

        .title-container {
            margin-top: 2rem;

            h5 {
                color: $white;
            }
        }

        img {
            border-radius: 10px;
        }
    }

    .card-retro {
        background-color: $black;
        color: $white;
        border-radius: 10px;
        opacity: 0;
        text-align: center;
        padding: 2rem;
        line-height: 2rem;

        p {
            line-height: 1rem;
        }

        .lang-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .vote-container {
            display: flex;
            justify-content: center;
            align-items: center;


            i {
                color: rgb(236, 214, 14);
            }
        }
    }

}
</style>