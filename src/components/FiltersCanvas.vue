<script setup>
import SelectGroup from './filters/SelectGroup.vue'
import SelectGroupInLine from './filters/SelectGroupInLine.vue'
defineProps ({
    canvasHead: String
})
</script>

<script>
export default {
    data() {
        return {
            sortData: {
                sortId: 'sort-select',
                sortSelections: [
                    {id: 'score', label: 'Score'},
                    {id: 'popularity', label: 'Popularity'},
                    {id: 'airdate', label: 'Air Date'},
                ]
            },

            genreData: {
                sortId: 'genre-select',
                sortName: 'Genres',
                sortSelections: [
                    {id: 'action', label: 'Action'},
                    {id: 'comedy', label: 'Comedy'},
                    {id: 'drama', label: 'Drama'},
                ]
            },

            typeData: {
                sortId: 'type-select',
                sortName: 'Type',
                sortSelections: [
                    {id: 'tv', label: 'TV'},
                    {id: 'movie', label: 'Movie'},
                    {id: 'special', label: 'Special'},
                ]
            },

            searchText: ""
        }
    }
}
</script>


<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="filters-canvas" aria-labelledby="offcanvas-filters">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvas-filters">{{canvasHead}}</h5>
            <button type="button" class="btn-close text-reset shadow-none btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="container">
              <input class="form-control me-2 search-text-box shadow-none" type="search" placeholder="Search" aria-label="Search"
              v-model="searchText" @input="$emit('querySearch', searchText)">
                <h5 style="margin-top: 16px;">Sort By</h5>
                <SelectGroup :group-id="this.sortData.sortId" :selections="sortData.sortSelections" :has-title="false"></SelectGroup>
                <h5 style="margin-top: 24px;">Filters</h5>
                <SelectGroup :group-id="this.genreData.sortId" :group-name="genreData.sortName" :selections="genreData.sortSelections" style="margin-top: 16px;"></SelectGroup>
                <SelectGroupInLine :group-id="this.typeData.sortId" :group-name="typeData.sortName" 
                :selections="typeData.sortSelections" style="margin-top: 16px;"></SelectGroupInLine>
            </div>  
        </div>
    </div>
</template>

<style scoped>
    .offcanvas-header {
        background-color: #130230;
    }

    .offcanvas-body {
        background-color: #000021;
    }

    h5::selection {
        background: #3a2c5a;
    }
</style>