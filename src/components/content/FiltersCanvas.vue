<script setup>
import SelectGroup from '@/components/filters/SelectGroup.vue'
defineProps ({
    canvasHead: String,
    hideSearch: Boolean
})
</script>

<script>
export default {
    data() {
        return {
            sortData: {
                sortId: 'sort-select',
                sortSelections: [
                    {id: 'score', label: 'Score', selected: true},
                    {id: 'popularity', label: 'Popularity', selected: true},
                    {id: 'date', label: 'Air Date', selected: false},
                    {id: 'episodes', label: 'Number of Episodes', selected: false}
                ]
            },

            genreData: {
                sortId: 'genre-select',
                sortName: 'Genres',
                sortSelections: [
                    {id: 'action', label: 'Action', selected: false},
                    {id: 'comedy', label: 'Comedy', selected: false},
                    {id: 'drama', label: 'Drama', selected: false},
                ]
            },

            typeData: {
                sortId: 'type-select',
                sortName: 'Type',
                sortSelections: [
                    {id: 'tv', label: 'TV', selected: false},
                    {id: 'movie', label: 'Movie', selected: false},
                    {id: 'special', label: 'Special', selected: false},
                ]
            }
        }
    },
    methods: {
        mycallback(change) {
            console.log('internal callback')
            this.$emit('callback', change)
        }
    }
}
</script>


<template>
    <div class="offcanvas offcanvas-start mycanva" data-bs-scroll="true" tabindex="-1" id="filters-canvas" aria-labelledby="offcanvas-filters">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvas-filters">{{canvasHead}}</h5>
            <button type="button" class="btn-close text-reset shadow-none btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="container">
              <input v-if="!hideSearch" class="form-control me-2 search-text-box shadow-none" type="search" placeholder="Search" aria-label="Search"
              @input="event => text = $emit('querySearch', event.target.value)">
                <h5 v-if="hideSearch" style="margin-top: 16px;">Sort By</h5>
                <SelectGroup v-if="hideSearch" @callback="mycallback" :group-id="sortData.sortId" :selections="sortData.sortSelections" :has-title="false"></SelectGroup>
                <h5 style="margin-top: 24px;">Filters</h5>
                <SelectGroup @callback="mycallback" :group-id="genreData.sortId" :group-name="genreData.sortName" :selections="genreData.sortSelections" style="margin-top: 16px;"></SelectGroup>
                <SelectGroup v-if="!hideSearch" @callback="mycallback" :group-id="typeData.sortId" :group-name="typeData.sortName" 
                :selections="typeData.sortSelections" :in-line="true" style="margin-top: 16px;"></SelectGroup>
            </div>  
        </div>
    </div>
</template>

<style scoped>
.mycanva {
    max-width: 280px;
}
.offcanvas-header {
    background-color: #130230;
    color: white;
}
.offcanvas-body {
    background-color: #000021;
    color: white;
}
h5::selection {
    background: #3a2c5a;
}

.search-text-box {
  background-color: #000021;
  color: #fff;
}

.search-text-box:focus {
  background-color: #000021;
  color: #fff;
}

.search-text-box::selection {
    background: #3a2c5a;
}
</style>