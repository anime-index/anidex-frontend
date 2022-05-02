
<script setup>
import AnimeTableItemVue from './AnimeTableItem.vue';
</script>

<script>
import watching from './mockLists/watching.json'
import completed from './mockLists/completed.json'
import to_watch from './mockLists/to_watch.json'
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
      }
  },
  mounted() {
      document.getElementById(this.list_tabs[0].id + this.tab_key).click()
  }
}
</script>

<template>
    <div class="container shadow min-vh-100 py-2">

        <!-- Tabs -->
        <ul class="nav nav-tabs" id="listTab" role="tablist">
            <li v-for="list_tab in list_tabs" class="nav-item" role="presentation" :key="list_tab.key">
                <button class="nav-link" :id="list_tab.id + tab_key" data-bs-toggle="tab" :data-bs-target="target_key + list_tab.id" 
                type="button" role="tab" :aria-controls="list_tab.id" aria-selected="false">{{list_tab.text}}</button>
            </li>
            <li class="nav-item navAddList">
                <button type="button" class="btn btn-primary btnAddList" data-bs-toggle="modal" data-bs-target="#listCreate">+</button>
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
                            <th scope="col">Type</th>
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
        padding-left: 10px;
    }
</style>