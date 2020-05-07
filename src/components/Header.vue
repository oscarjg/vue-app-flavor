<template>
<div class="header">
    <div class="menu">
        <div class="menu__item left">
            <slot name="header-left">
                <span v-if="displayBack" v-on:click="goBack">Back</span>
            </slot>
        </div>
        <div class="menu__item">
            <slot name="header-center">{{ centerText }}</slot>
        </div>
        <div class="menu__item right">
            <slot name="header-right">
                Right
            </slot>
        </div>
    </div>
</div>
</template>

<style lang="scss">
    .header {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
        height: 58px;
        margin: 0px;
        background: rgb(255, 255, 255);
    }
    .header .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    .menu__item {
        width: 100%;
        text-align: center;
        padding: 5px 5px;
        
        &.right {
            text-align: right;
        }

        &.left {
            text-align: left;
        }
    }
</style>

<script>
    export default {
    name: 'Header',
    computed: {
        displayBack() {
            return this.$route.name !== 'home'
        },
        centerText() {
            return this.$t(this.$route.meta.title) || this.$store.getters["header/title"] 
        }
    },
    methods: {
        goBack() {
            const backRoute = this.$route.meta.backRoute || 'home' 
            this.$router.push({ name: backRoute })
        }
    }
    }
</script>
