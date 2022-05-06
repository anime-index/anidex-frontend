<script setup>
import AnimeTable from './AnimeTable.vue'
import AnimeTableItemVue from './AnimeTableItem.vue';
import AnimeCardVue from './AnimeCard.vue';
import AnimeCard from './AnimeCard.vue';
import RenameModal from './RenameModal.vue';
import ListEditModal from './ListEditModal.vue'
</script>

<script>
import watching from './mockLists/watching.json'
import completed from './mockLists/completed.json'
import to_watch from './mockLists/to_watch.json'
import search from './mockLists/search.json'
export default {
  data() {
    return {
        list_tabs: [{id: "watching", text: "Watching", list: [], key: 0}, 
        {id: "completed", text: "Completed", list: [], key: 1}, 
        {id: "to_watch", text: "To Watch", list: [], key: 2}],
        list_key: 2,
        list_custom_key:0,

        currentTab: 0,
        currentTabName: "",
        currentTabAnimeList: [],

        renameModalTitle: "Create List",
        renameModalPlaceholder: "List Name",
        renameModalId: "listCreate",

        animeTableColumns: ["Title", "Score", "Type"]
    }
  },
  methods: {
      createList(newListName) {
        if (newListName !== "") {
            this.list_tabs.push({id: "custom" + (++this.list_custom_key).toString(), text: newListName, list: [], key: ++this.list_key})
            document.getElementById("dismiss").click()
            newListName = ""
        }
      },

      addToList(_title, _score, _image_url, _type){
        this.currentTabAnimeList.push({position: this.currentTabAnimeList.length+1, main_pic: _image_url, title: _title, type: _type, score: _score})
      },

      removeFromList(position) {
        this.currentTabAnimeList.splice(position-1, 1)
      },

      tabChange(tab) {
          this.currentTab = tab
      },

      editListAuxiliars() {
          console.log(this.currentTabAnimeList)
          this.currentTabName = this.list_tabs[this.currentTab].text
          this.currentTabAnimeList = this.list_tabs[this.currentTab].list.slice()
          console.log(this.currentTabAnimeList)
      },

      saveListEdition(newName, newList) {
          this.list_tabs[this.currentTab].text = newName
          this.list_tabs[this.currentTab].list = newList
          console.log(newList)
      },

      deleteList() {
          this.list_tabs.splice(this.currentTab, 1)
          this.list_key--
          for (var i = this.currentTab; i <= this.list_key; i++) {
            this.list_tabs[i].key -= 1
          }
      }
  },
  mounted() {
      document.getElementById(this.list_tabs[0].id + '-tab').click()
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
                        <button class="nav-link" :id="list_tab.id + '-tab'" data-bs-toggle="tab" :data-bs-target="'#' + list_tab.id" 
                        type="button" role="tab" :aria-controls="list_tab.id" aria-selected="false" @click="tabChange(list_tab.key)">{{list_tab.text}}</button>
                    </li>
                    <li class="nav-item navAddList">
                        <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#listCreate">
                            <i class="bi bi-file-earmark-plus"></i>
                        </button>
                        <RenameModal :title="renameModalTitle" :placeholder="renameModalPlaceholder" :modalId="renameModalId" @rename-action="createList"></RenameModal>
                    </li>
                </ul>
                </div>
            <div class="col">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editMode" @click="editListAuxiliars">
                    <i class="bi bi-pencil-square"> Edit List</i>
                </button>
                <ListEditModal :list-name="currentTabName" :list-name-static="currentTabName" :list-items="currentTabAnimeList" 
                @cancel-edit="editListAuxiliars" @delete-list="deleteList" @save-changes="saveListEdition" @add-entry="addToList" @remove-entry="removeFromList"></ListEditModal>
            </div>
        </div>
        
        <!-- Tab Contents -->
        <div class="tab-content animeList" id="listTabContent">
            <div v-for="list_tab in list_tabs" class="tab-pane fade" :id="list_tab.id" role="tabpanel" 
            :aria-labelledby="list_tab + '-tab'" :key="list_tab.key">
                <AnimeTable :columns="animeTableColumns" :items="list_tab.list"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .navAddList {
        padding-left: 1px;
    }
</style>