<script setup>
    import FormMat from '../components/FormMat.vue'
</script>

<template>
    <div class="flex items-center justify-center mt-4">
        <h1 class="text-white text-5xl text-center font-bold mt-4 p-2">{{ titleAltastxt }}</h1>
    </div>
    <section>
        <FormMat />
    </section>
</template>

<script>
    import matConfig from '../helpers/materialesConfig'

    export default {
        data() {
        return {
            ...matConfig,
        }
       } 
    }

</script>
