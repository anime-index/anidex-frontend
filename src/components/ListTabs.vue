
<script setup>
import AnimeTableItemVue from './AnimeTableItem.vue';
import AnimeCardVue from './AnimeCard.vue';
import AnimeCard from './AnimeCard.vue';
</script>

<script>
import watching from './mockLists/watching.json'
import completed from './mockLists/completed.json'
import to_watch from './mockLists/to_watch.json'
import search from './mockLists/search.json'
export default {
  data() {
    return {
        tab_key: "-tab",
        target_key: "#",
        list_tabs: [{id: "watching", text: "Watching", list: watching, key: 0}, 
        {id: "completed", text: "Completed", list: completed, key: 1}, 
        {id: "to_watch", text: "To Watch", list: to_watch, key: 2}],
        newListName: "",
        list_key: 2,
        searchList: search,
        auxList: watching
    }
  },
  methods: {
      createList() {
        if (this.newListName !== "") {
            this.list_tabs.push({id: "custom" + (++this.list_key - 2).toString(), text: this.newListName, list: [], key: this.list_key})
            console.log(this.list_tabs)
            document.getElementById("dismiss").click()
        }
        this.newListName = ""
      },

      addToAuxList(_title, _score, imageurl, _type){
        watching.push({position: watching.length++, main_pic: imageurl, title: _title, type: _type, score: _score})
      }
  },
  mounted() {
      document.getElementById(this.list_tabs[0].id + this.tab_key).click()
  }
}
</script>

<template>
    <div class="container shadow min-vh-100 py-2">
        <div class="row">
            <div class="col-10">
                <!-- Tabs -->
                <ul class="nav nav-tabs" id="listTab" role="tablist">
                    <li v-for="list_tab in list_tabs" class="nav-item" role="presentation" :key="list_tab.key">
                        <button class="nav-link" :id="list_tab.id + tab_key" data-bs-toggle="tab" :data-bs-target="target_key + list_tab.id" 
                        type="button" role="tab" :aria-controls="list_tab.id" aria-selected="false">{{list_tab.text}}</button>
                    </li>
                    <li class="nav-item navAddList">
                        <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#listCreate">
                            <i class="bi bi-file-earmark-plus"></i>
                        </button>
                        <!-- Modal -->
                        <div ref="listCreateModal" class="modal fade" id="listCreate" tabindex="-1" aria-labelledby="listCreateLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="listCreateLabel">Create New List</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="input-group mb-3">
                                            <input v-model="newListName" type="text" class="form-control" aria-label="listNameInput" aria-describedby="inputGroup-sizing-default"
                                            @keyup.enter="createList" placeholder="List Name">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="dismiss">Cancel</button>
                                        <button type="button" class="btn btn-primary" @click="createList">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            <div class="col">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editMode">
                    <i class="bi bi-pencil-square"> Edit List</i>
                </button>
                <!-- Modal -->
                <div ref="editModeModal" class="modal" id="editMode" tabindex="-1" aria-labelledby="editModeLabel" aria-hidden="true">
                    <div class="modal-dialog modal-fullscreen">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editModeLabel">Edit List</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="container">
                                    <div class="row">
                                        <div class="input-group mb-3">
                                            <input v-model="newListName" type="text" class="form-control" aria-label="listNameInput" aria-describedby="inputGroup-sizing-default"
                                            @keyup.enter="createList" placeholder="Watching" disabled>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <h5>Filters</h5>
                                            <label for="yearRange" class="form-label">Year</label>
                                            <input type="range" class="form-range" min="1970" max="2022" step="1" id="yearRange">
                                            <label for="genreSelect" class="form-label">Genre</label>
                                            <select class="form-select" aria-label="genreSelect">
                                                <option selected>-</option>
                                                <option value="1">Action</option>
                                                <option value="2">Comedy</option>
                                                <option value="3">Drama</option>
                                            </select>
                                            <label for="studioSelect" class="form-label">Studio</label>
                                            <select class="form-select" aria-label="studioSelect">
                                                <option selected>-</option>
                                                <option value="1">Ghibli</option>
                                                <option value="2">Ufotable</option>
                                                <option value="3">MAPPA</option>
                                            </select>
                                            <label for="scoreRange" class="form-label">Score</label>
                                            <input type="range" class="form-range" min="0" max="10" step="0.5" id="scoreRange">
                                            <label class="form-check-label" for="flexRadioStatus">Status</label>
                                            <div class="form-check" id="flexRadioStatus">
                                                <input class="form-check-input" type="radio" name="flexRadioStatus" id="flexRadioStatus1">
                                                <label class="form-check-label" for="flexRadioStatus1">
                                                    Airing
                                                </label>
                                                </div>
                                                <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioStatus" id="flexRadioStatus2" checked>
                                                <label class="form-check-label" for="flexRadioStatus2">
                                                    Finished
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h5>Anime Search</h5>
                                            <div class="input-group mb-3">
                                                <input type="text" class="form-control" aria-label="animeQuery" aria-describedby="inputGroup-sizing-default" placeholder="Search...">
                                            </div>
                                            <div v-for="item in searchList" :key="item.id" class="content">
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
                                        <div class="col">
                                            <h5>Your List</h5>
                                            <div class="table-responsive">
                                                <table class="table align-middle table-hover">
                                                    <thead class="table-dark">
                                                        <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Score</th>
                                                        <th scope="col">Type </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <AnimeTableItemVue v-for="item in auxList" :key="item.id" :position="item.position" :title="item.title" 
                                                        :imageurl="item.main_pic" :score="item.score" :type="item.type"/>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="dismiss">Cancel</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Tab Contents -->
        <div class="tab-content animeList" id="listTabContent">
            <div v-for="list_tab in list_tabs" class="tab-pane fade" :id="list_tab.id" role="tabpanel" 
            :aria-labelledby="list_tab + tab_key" :key="list_tab.key">
                <div class="table-responsive">
                    <table class="table align-middle table-hover">
                        <thead class="table-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Score</th>
                            <th scope="col">Type </th>
                            </tr>
                        </thead>
                        <tbody>
                            <AnimeTableItemVue v-for="item in list_tab.list" :key="item.id" :position="item.position" :title="item.title" 
                            :imageurl="item.main_pic" :score="item.score" :type="item.type"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .navAddList {
        padding-left: 1px;
    }
</style>