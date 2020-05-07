<template>
    <div>
        List page!
    </div>
</template>

<script>
    export default {
        name: 'List',
        data() {
            return {
                id: this.$route.params.id
            }
        }
    }
</script>