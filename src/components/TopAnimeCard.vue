<script setup>
defineProps({
    title: String,
    imageurl: String,
    score: Number,
    type: String,
    position: Number
})

</script>

<template>
    <!--div class="col d-flex align-items-center">
        <div class="card mb-3 bg-dark text-white" style="min-width: 380px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img :src="imageurl" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{title}}</h5>
                    <p class="card-text">Type: {{type}}</p>
                    <p class="card-text"><small class="text-muted">Score: {{score}}</small></p>
                </div>
                </div>
            </div>
        </div>
    </div-->

    <div class="col mb-3">
        <div class="card bg-dark h-100" style="min-width: 380px;">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-warning">
                #{{position}}
                <span class="visually-hidden">unread messages</span>
            </span>
            <div class="row">
                <div class="col">
                    <img :src="imageurl" class="img-fluid rounded-start h-100">
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title">{{title}}</h5>
                        <p class="card-text">Type: {{type}}</p>
                        <p class="card_text">Score: {{score}}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<!--style>
/*@media (max-width: 760px) {
    .mystyle {
        height: 200px;
    }
}*/
.mystyle {
    width: 400px;
    height: 200px;
}
.speci {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style-->