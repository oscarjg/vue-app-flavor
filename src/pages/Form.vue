<template>
    <div>
        Form step {{ step }}
    </div>
</template>

<script>
    import { eventBus } from '../main'

    export default {
        name: 'Form',
        computed: {
            step() {
                return this.$store.getters["form/currentStep"] 
            }
        },
        methods: {
            submit() {
                console.log("Submit!")
            }
        },
        mounted() {
            this.$store.dispatch("header/setTitle", `Profile ${this.id}`)

            eventBus.$on('event-form:click:last-step', this.submit)
        },
        destroyed() {
            this.$store.dispatch("header/resetTitle")
        }
    }
</script>