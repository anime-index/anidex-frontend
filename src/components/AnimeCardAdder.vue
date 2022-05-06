<script setup>
defineProps({
    anime_id: Number,
    title: String,
    score: Number,
    image_url: String,
    type: String
})
</script>

<template>
    <div class="col">
        <div class="card mycard">
            <div class="row">
                <div class="col myfixed">
                    <img :src="image_url" class="myimg">
                </div>
                <div class="col mysmall">
                    <div class="card-body mybody">
                        <h5 class="card-title">{{title}}</h5>
                        <p class="card_text">{{score.toPrecision(3)}} | {{type}}</p>
                        <button type="button" class="btn btn-primary addbtn" @click="$emit('addEntry', this.title, 0, this.image_url, this.type)">
                            <i class="bi bi-box-arrow-right"> Add</i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
.mycard {
    min-width: 360px;
}
.myfixed {
    flex: 0 0 185px;
}
.myimg {
    width: 185px;
    height: 265px;
}
.mybody {
    padding: 8px 8px;
}
.overfl {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.addbtn {
    position: absolute;
    bottom: 16px;
    right: 16px;
}
</style>