<script>
export default {
    emits: ['genre'],
    data() {
        return {
            genres: ['Action', 'Adventure', 'Cars', 'Comedy', 'Dementia', 'Demons', 'Drama', 'Ecchi', 'Fantasy', 'Game', 'Harem',
                     'Hentai', 'Historical', 'Horror', 'Josei', 'Kids', 'Magic', 'Martial Arts', 'Mecha', 'Military', 'Music',
                     'Mystery', 'Parody', 'Police', 'Psychological', 'Romance', 'Samurai', 'School', 'Sci-Fi', 'Seinen', 'Shoujo',
                     'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of Life', 'Space', 'Sports', 'Super Power', 'Supernatural',
                     'Thriller', 'Vampire', 'Yaoi', 'Yuri']
        }
    }
}
</script>

<template>
    <h6>Genres</h6>
        <div class="purp" style="height: 300px; overflow: auto;">
            <div v-for="item in genres" class="form-check" :key="item.id">
                <input :id="item" class="form-check-input" type="checkbox" :value="item" @input="$emit('genre', item)">
                <label class="form-check-label" :for="item">{{item}}</label>
            </div>
        </div>
</template>

<style scoped>
.purp::-webkit-scrollbar {
    width: 10px;
}
.purp::-webkit-scrollbar-track {
    background: #0f023b;
}
.purp::-webkit-scrollbar-thumb {
    background: #3a2c5a;
}
.purp::-webkit-scrollbar-thumb:hover {
    background: #2c2047;
}
.purp::-webkit-scrollbar-corner {
    background: #21005700;
}
label::selection {
    background: #3a2c5a;
}
h6::selection {
        background: #3a2c5a;
}
</style>