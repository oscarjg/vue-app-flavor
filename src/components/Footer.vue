<template>
    <!-- begin #footer -->
    <div class="footer">
        <div v-on:click="goToHome">Home</div>
        <div v-on:click="gotToList">List</div>
        <div v-on:click="gotToForm">Form</div>
    </div>
    <!-- end #footer -->
</template>

<style lang="scss">
    .footer {
        display: flex;
        justify-content: space-around;
        padding: 18px;
        background: rgba(255, 255, 255, 0.705);
    }
</style>

<script>
    export default {
        name: 'Footer',
        methods: {
            gotToList() {
                this.$router.push({name: "list"})
            },
            goToHome() {
                this.$router.push({name: "home"})
            },
            gotToForm() {
                this.$router.push({name: "form"})
            },
        }
    }
</script>