<script setup>
defineProps({
    title: String,
    imageurl: String,
    score: Number,
    type: String
})

</script>

<template>
    <!--div class="col">
    <div class="card mb-3 bg-dark text-white" style="max-width: 400px;">
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
    <div class="col">
        <div class="card bg-dark">
            <div class="row">
                <div class="col">
                    <img :src="imageurl">
                </div>
                
            </div>
            <h1>{{title}}</h1>
            <p>Type: {{type}}, score={{score}}</p>
        </div>
    </div>
</template>