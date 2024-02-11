<script setup>
import IconSearch from './icons/IconSearch.vue';
import FormCP from '@/components/FormCP.vue';
import IconNew from '@/components/icons/IconNew.vue';
</script>

<template>
  <section class="flex items-center justify-around mt-4">
    <h1 class="text-white mt-4 text-center text-5xl font-bold p-2">{{ title }}</h1>
    <RouterLink :to=url>
      <button class="text-white bg-[#09f] hover:text-white hover:bg-green-700 activate:translate-y-1 justify-center rounded-full flex mx-auto p-2"><IconNew  /><p class="p-3">{{ boton }}</p></button>
    </RouterLink>
  </section>
  <section>
    <div class="flex flex-row mb-3 mt-10 w-auto ml-10">   
        <IconSearch class="mr-4" />
        <input v-model="temp" type="text" id="search" class="appearance-none block w-full mr-10 rounded-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Buscar">          
    </div>
  </section>
  <section class="flex flex-wrap gap-40 justify-center">
    <div v-for="cliente in clientesTodos" :key=cliente._id>
      <FormCP boton="edit" :cliente=cliente @refresh="refreshPage()"  class="bg-blue-950 rounded-none w-96"/>
    </div>
  </section>
</template>

<script>
  import clientes from '../helpers/api/clientTodos.js'
  import proovedores from '../helpers/api/proovedorTodos.js'
  import clienteSearch from '../helpers/searchs/clienteSearch.js'

  export default {
  props: {
    title: String,
    boton: String,
    url: String,
  },
  created(){
    this.getElements()
  },
  data() {
    return {
      clientesTodos: [],
      temp: '',
    }
  },

  methods: {

    async getElements(){
      if (this.title === 'Clientes'){ this.clientesTodos = await clientes()}
      if (this.title === 'Proovedores'){ this.clientesTodos = await proovedores()}
    },
   
    async buscar(){
        this.clientesTodos = await clientes()
      if(this.temp){
        const busqueda = clienteSearch(this.clientesTodos, this.temp)
        this.clientesTodos = busqueda
      }
    },
    
    refreshPage(){
      this.getElements()
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