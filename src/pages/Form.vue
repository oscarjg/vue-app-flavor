<template>
    <div>
        Form step {{ step }}
    </div>
</template>

<script>
    export default {
        name: 'Form',
        computed: {
            step() {
                return this.$store.getters["form/currentPage"] 
            }
        },
        mounted() {
            this.$store.dispatch("header/setTitle", `Profile ${this.id}`)
        },
        destroyed() {
            this.$store.dispatch("header/resetTitle")
        }
    }
</script>