<template>
    <Header>
        <template slot="header-left" v-if="currentStep > 1">
            <button class="btn btn-default btn-sm" v-on:click="handlePrev">Prev</button>
        </template>
        <template slot="header-right">
            <button class="btn btn-sm" v-bind:class="{ 
				'btn-success': currentStep == steps,
                'btn-default': currentStep != steps,
			}"
            v-on:click="handleNext">
            {{ buttonText() }}
            </button>
        </template>
    </Header>
</template>

<script>
    import Header from './Header'
    import { eventBus } from '../main'

    export default {
        name: 'HeaderForm',
        components: {
            Header
        },
        data() {
            return {
                steps: 3,
            }
        },
        computed: {
            currentStep() {
                return this.$store.getters["form/currentStep"] 
            }
        },
        created() {
            this.$store.dispatch('form/resetCurrentStep')
        },
        methods: {
            buttonText() {
                if (this.currentStep === this.steps) {
                    return 'Save'
                }

                return 'Next'
            },
            handleNext() {
                if (this.currentStep < this.steps) {
                    this.$store.dispatch('form/next')
                } else if (this.currentStep === this.steps) {
                    eventBus.$emit('event-form:click:last-step')
                }
            },
            handlePrev() {
                if (this.currentStep > 1) {
                    this.$store.dispatch('form/prev')
                }
            }
        }
    }
</script>