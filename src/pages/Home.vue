<template>
    <div>
       Home!
    </div>
</template>

<script>
    export default {
        name: 'Profile',
        data() {
            return {
                id: this.$route.params.id
            }
        },
        // mounted() {
        //     this.$store.dispatch("header/setTitle", `Profile ${this.id}`)
        // },
        // destroyed() {
        //     this.$store.dispatch("header/resetTitle")
        // }
    }
</script>