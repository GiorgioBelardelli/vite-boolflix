import { reactive } from 'vue'

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=dbba6171ff3833237db098d4f4c863ee",
    filmList: [],
    filterFilm: "",
});