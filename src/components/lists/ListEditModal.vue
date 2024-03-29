<script setup>
import NumericRange from '@/components/filters/NumericRange.vue'
import ItemSelect from '@/components/filters/ItemSelect.vue'
import FlexRadio from '@/components/filters/FlexRadio.vue'

import AnimeTableEdit from '@/components/tables/AnimeTableEdit.vue'
import AnimeCardAdder from '@/components/cards/AnimeCardAdder.vue'

import axios from 'axios'

import ConfirmationModal from './ConfirmationModal.vue'
import SearchFilter from '../filters/SearchFilter.vue'
defineProps({
    listName: String,
    listNameStatic: String,
    listItems: Array
})
</script>

<script>
export default {
    data() {
        return {
            yearRangeData: {
            rangeId: "yearRange",
            labelText: "Year",
            minValue: 1960, 
            maxValue: 2021,
            rangeStep: 1
            },

            genreSelectData: {
                selectId: "genreSelect" ,
                labelText: "Genres",
                selections: ["Action", "Comedy", "Drama"]
            },

            studioSelectData: {
                selectId: "studioSelect" ,
                labelText: "Studios",
                selections: ["Ghibli", "Ufotable", "MAPPA"]
            },

            scoreRangeData: {
                rangeId: "scoreRange",
                labelText: "Score",
                minValue: 0, 
                maxValue: 10,
                rangeStep: 0.5
            },

            statusRadioData: {
                flexRadioId: "statusRadio",
                flexRadioLabelText: "Status",
                selections: [
                    {selectionId: "airing", selectionLabel: "Airing"},
                    {selectionId: "finished", selectionLabel: "Finished"}
                ]
            },

            animeTableColumns: ["Title", "Score", "Type"],
            myjson: []
        }
    },
    methods: {
        emitAddEntry(title, score, image_url, type) {
            this.$emit('addEntry', title, score, image_url, type)
        },

        emitRemoveEntry(position) {
            this.$emit('removeEntry', position)
        },
        mySearch(title) {
            let url = this.backendUrl + 'anime/search'
            if (title)
                url += '?title=' + title
            axios
                .get(url)
                .then(response => this.myjson = response.data.lst)
        }
    },
    mounted() {
        axios
            .get(this.backendUrl + 'top/anime')
            .then(response => this.myjson = response.data.lst)
    }
}
</script>


<template>
    <!-- Modal -->
    <div>
        <div class="modal fade" id="editMode" tabindex="-1" aria-labelledby="editListLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editListLabel">{{"Edit " + listNameStatic}}</h5>
                        <button type="button" class="btn-close btn-close-white shadow-none" @click="$emit('cancelEdit', listName, listItems)" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="input-group mb-3">
                                <input v-model="listName" type="text" class="form-control text-box" aria-label="listNameInput" aria-describedby="input-edit"
                                placeholder="List Name">
                            </div>
                            <div class="row" style="margin-top: 32px;">
                                <div class="col-3" style="margin-right: 32px; ">
                                    <h5>Filters</h5>
                                    <NumericRange :rangeId="yearRangeData.rangeId" :labelText="yearRangeData.labelText"
                                        :minValue="yearRangeData.minValue" :maxValue="yearRangeData.maxValue" :rangeStep="yearRangeData.rangeStep" :inputDisabled="true"></NumericRange>
                                    <ItemSelect style="margin-top:8px;" :selectId="genreSelectData.selectId" :labelText="genreSelectData.labelText" :selections="genreSelectData.selections" :inputDisabled="true"></ItemSelect>
                                    <ItemSelect style="margin-top:16px;" :selectId="studioSelectData.selectId" :labelText="studioSelectData.labelText" :selections="studioSelectData.selections" :inputDisabled="true"></ItemSelect>
                                    <NumericRange style="margin-top:16px;" :rangeId="scoreRangeData.rangeId" :labelText="scoreRangeData.labelText"
                                        :minValue="scoreRangeData.minValue" :maxValue="scoreRangeData.maxValue" :rangeStep="scoreRangeData.rangeStep" :inputDisabled="true"></NumericRange>
                                    <FlexRadio style="margin-top:8px;" :flexRadioId="statusRadioData.flexRadioId" :flexRadioLabelText="statusRadioData.flexRadioLabelText" :selections="statusRadioData.selections" :inputDisabled="true"></FlexRadio>
                                </div>
                                <div class="col anime-search" style="margin-right: 32px;">
                                    <h5>Anime Search</h5>
                                    <div class="input-group mb-3">
                                        <SearchFilter  class="form-control text-box" @query-search="mySearch"  aria-label="animeQuery" aria-describedby="inputGroup-sizing-default"/>
                                    </div>
                                    <div v-for="item in myjson" :key="item.id" class="anime-cards">
                                        <AnimeCardAdder :key="item.mal_id" :anime_id="item.mal_id" :title="item.title" :score="item.mal_score" :image_url="item.image_url" :type="item.type"
                                        @add-entry="emitAddEntry"/>
                                    </div>    
                                </div>
                                <div class="col list-table">
                                    <h5>Your List</h5>
                                    <AnimeTableEdit :columns="animeTableColumns" :items="listItems" @remove-entry="emitRemoveEntry"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-target="#confirmationModal"  data-bs-toggle="modal"><i class="bi bi-trash"></i> Delete</button>
                        <div> 
                            <button type="button" class="btn btn-transparent" @click="$emit('cancelEdit', listName, listItems)" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" @click="$emit('saveChanges', listName, listItems)" data-bs-dismiss="modal"><i class="bi bi-save"></i> Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ConfirmationModal modal-id="confirmationModal" modal-label="confirmationModalLabel" prev-modal-id="editMode"
        warning-text="Wait!" :confirmation-text="'Are you sure you want to delete your list ' + listNameStatic + '?'" @confirmed="$emit('deleteList')"/>
    </div>
    
</template>

<style scoped>

.list-table {
    overflow-y: auto;
    max-height: 1000px;
}

.modal-header {
background-color: #130230;
color: #FFFFFF
}

h5::selection {
    background: #3a2c5a;
}

.modal-body {
    background-color: #000021;
    color:#fff;
}

.text-box {
    background-color: #000021;
    color: #fff;
    margin-top: 24px;
}

.text-box::selection {
    background: #3a2c5a;
}

.anime-search {
    padding-left: 8px;
    padding-right: 8px;
    overflow-y: auto;
    max-height: 1000px;
}

.anime-search::-webkit-scrollbar {
    width: 10px;
}

.anime-search::-webkit-scrollbar-track {
    background: #0f023b;
}

.anime-search::-webkit-scrollbar-thumb {
    background: #3a2c5a;
}

.anime-search::-webkit-scrollbar-thumb:hover {
    background: #2c2047;
}

.anime-search::-webkit-scrollbar-corner {
    background: #21005700;
}
.anime-cards {
    padding-top: 8px;
    padding-bottom: 8px;
}

.list-table::-webkit-scrollbar {
    width: 10px;
}

.list-table::-webkit-scrollbar-track {
    background: #0f023b;
}

.list-table::-webkit-scrollbar-thumb {
    background: #3a2c5a;
}

.list-table::-webkit-scrollbar-thumb:hover {
    background: #2c2047;
}

.list-table::-webkit-scrollbar-corner {
    background: #21005700;
}

.modal-footer {
    background-color: #130230;
    justify-content: space-between;
}

.btn-transparent {
    color: #fff;
    margin-right: 8px;
}

.btn-transparent:hover {
    color: #fff;
    background-color: #3a2c5a;
}

.btn-primary {
    background-color: #69b549;
    border: #69b549;
}

.btn-primary:hover {
    background-color: #368519;
    border: #368519;
}

</style>