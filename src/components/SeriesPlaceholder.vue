<template>
    <div class="col">
        <div class="card mycard">
            <div class="row">
                <div class="col myfixed">
                    <div class="myimg bg-secondary"></div>"
                </div>
                <div class="col">
                    <div class="card-body mybody">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-8"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-6"></span>
                        </p>
                        <p class="card_text placeholder-glow">
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-12"></span>
                            <span class="placeholder col-9"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.mycard {
    min-width: 360px;
    height: 265px;
}
.myimg {
    width: 185px;
    height: 265px;
}
.myfixed {
    flex: 0 0 185px;
    width: 185px;
    height: 265px;
}
.mybody {
    padding: 8px 8px;
}
</style>