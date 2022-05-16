<script setup>
defineProps({
    id: String,
    label: String,
    start: Number
})
</script>

<script>
export default {
    data() {
        return {
            status: this.start
        }
    },
    methods: {
        clicked() {
            this.status = (this.status + 1) % 3
            this.$emit('sort', this.id, this.status)
        }
    },
    computed: {
        myclass() {
            switch(this.status) {
                case 0:
                    return 'fa-sort'
                case 1:
                    return 'fa-sort-desc'
                case 2:
                    return 'fa-sort-asc'
            }
        },
        mycolor() {
            if (this.status === 0)
                return 'inactive'
            else
                return 'active'
        }
    }
}
</script>

<template>
    <div>
        <a class="btn" :class="mycolor" href="#" :onclick="clicked">
            <i class="fa fa-2x" :class="myclass" aria-hidden="true"></i>
        </a>
        <label class="form-check-label" :onclick="clicked">{{label}}</label>
    </div>
</template>

<style scoped>
.btn {
    font-size: large;
}
.active {
    color: green;
}
.inactive {
    color: white;
}
.btn:hover {
    background: #3a2c5a;
}
label::selection {
    background: #3a2c5a;
}
</style>