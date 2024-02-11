<script setup>
    import IconSearch from '@/components/icons/IconSearch.vue';
    import IconNew from '@/components/icons/IconNew.vue';
    import FormMat from '../components/FormMat.vue'
</script>
<template>
    <div class="flex items-center justify-around mt-4">
        <h1 class="text-white text-5xl text-center font-bold mt-4 p-2">{{ titletxt }}</h1>
        <RouterLink :to=pathAltas>
            <button class="text-white bg-[#09f] hover:text-white hover:bg-green-700 activate:translate-y-1 justify-center rounded-full flex mx-auto p-2"><IconNew  /><p class="p-3">{{ botonAddtxt }}</p></button>
        </RouterLink>
    </div>
    <section>
        <div class="flex flex-row mb-3 mt-10 w-auto ml-10">   
            <IconSearch class="mr-4" />
            <input v-model="temp" type="text" id="search" class="appearance-none block w-full mr-10 rounded-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Buscar">          
        </div>
    </section>
    <section v-for="material in materiales" :key="material._id">
        <FormMat :material=material @refresh="refreshPage()"/>
    </section>
</template>
<script>
    import matConfig from '../helpers/materialesConfig'
    import materialesTodos from '../helpers/api/materialesTodos'
    import materialSearch from '@/helpers/searchs/materialSearch';

    export default {
        created(){
            this.getMateriales()
        },
        data(){
            return {
                materiales: [],
                ...matConfig,
                pathAltas: '/materiales/altas',
                temp: '',
            }
        },
        methods: {
            async getMateriales(){
                this.materiales = await materialesTodos();
            },
            async buscar(){
                await this.getMateriales()
                if(this.temp){
                    const busqueda = materialSearch(this.materiales, this.temp)
                    this.materiales = busqueda
                }
    },
            refreshPage(){
                this.getMateriales()
            }
        },
        watch: {
            temp: function (value) {
                this.temp = value
                this.buscar()
            }
        }      
    }
</script>
