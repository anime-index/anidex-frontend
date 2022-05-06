<script setup>
import NumericRange from './filters/NumericRange.vue'
import ItemSelect from './filters/ItemSelect.vue'
import FlexRadio from './filters/FlexRadio.vue'
import AnimeTable from './AnimeTable.vue';
import AnimeCard from './AnimeCard.vue'
import axios from 'axios'
import ConfirmationModal from './ConfirmationModal.vue';
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
                maxValue: 1,
                rangeStep: 0.5
            },

            statusRadioData: {
                flexRadioId: "statusRadio",
                labelText: "Status",
                selections: [
                    {selectionId: "airing", selectionLabel: "Airing"},
                    {selectionId: "finished", selectionLabel: "Finished"}
                ]
            },

            animeTableColumns: ["Title", "Score", "Type"],
            myjson: []
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/top/anime')
            .then(response => (this.myjson = response.data)) //response => (this.info = response)
    }
}
</script>


<template>
    <!-- Modal -->
    <div>
        <div class="modal" id="editMode" tabindex="-1" aria-labelledby="editListLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editListLabel">{{"Edit " + listNameStatic}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="input-group mb-3">
                                    <input v-model="listName" type="text" class="form-control" aria-label="listNameInput" aria-describedby="input-edit"
                                    placeholder="List Name">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <h5>Filters</h5>
                                    <NumericRange :rangeId="yearRangeData.rangeId" :labelText="yearRangeData.labelText"
                                        :minValue="yearRangeData.minValue" :maxValue="yearRangeData.maxValue" :rangeStep="yearRangeData.rangeStep"></NumericRange>
                                    <ItemSelect :selectId="genreSelectData.selectId" :labelText="genreSelectData.labelText" :selections="genreSelectData.selections"></ItemSelect>
                                    <ItemSelect :selectId="studioSelectData.selectId" :labelText="studioSelectData.labelText" :selections="studioSelectData.selections"></ItemSelect>
                                    <NumericRange :rangeId="scoreRangeData.rangeId" :labelText="scoreRangeData.labelText"
                                        :minValue="scoreRangeData.minValue" :maxValue="scoreRangeData.maxValue" :rangeStep="scoreRangeData.rangeStep"></NumericRange>
                                    <FlexRadio :flexRadioId="statusRadioData.flexRadioId" :flexRadioLabel="statusRadioData.flexRadioLabel" :selections="statusRadioData.selections"></FlexRadio>
                                </div>
                                <div class="col aniSearchBlock">
                                    <h5>Anime Search</h5>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" aria-label="animeQuery" aria-describedby="inputGroup-sizing-default" placeholder="Search...">
                                    </div>
                                    <div v-for="item in myjson" :key="item.id" class="content">
                                        <div class="row">
                                            <div class="column">
                                                <AnimeCard :key="item.id" :title="item.title" :imageurl="item.main_pic" :score="item.score" :type="item.type"/>
                                            </div>
                                            <div class="column">
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addAnime">
                                                    <i class="bi bi-box-arrow-right"> Add</i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div class="col listTable">
                                    <h5>Your List</h5>
                                    <AnimeTable :columns="animeTableColumns" :items="listItems"></AnimeTable>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger" data-bs-target="#confirmationModal"  data-bs-toggle="modal">Delete</button>
                        <button type="button" class="btn btn-primary" @click="$emit('saveChanges', listName, listItems)" data-bs-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <ConfirmationModal modal-id="confirmationModal" modal-label="confirmationModalLabel" prev-modal-id="editMode"
        warning-text="Wait!" :confirmation-text="'Are you sure you want to delete your list ' + listNameStatic + '?'" @confirmed="$emit('deleteList')"/>
    </div>
    
</template>

<style scoped>

    .aniSearchBlock {
        overflow: auto;
    }
    .listTable {
        overflow: auto;
    }

</style>