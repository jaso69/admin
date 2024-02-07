<script setup>
import BuscarTable from '@/components/BuscarTable.vue';
import FormCP from '@/components/FormCP.vue';
import IconNew from '@/components/icons/IconNew.vue';
</script>

<template>
  <section>
    <h1 class="text-white mt-4 text-center text-5xl font-bold p-2">Clientes</h1>
  </section>
  <section class="mt-6">    
    <RouterLink to="/clientes">
      <button class="text-white bg-[#09f] hover:text-white hover:bg-green-700 activate:translate-y-1 justify-center rounded-full flex mx-auto p-2"><IconNew  /><p class="p-3">Alta Cliente</p></button>
    </RouterLink>
  </section>
  <section>
    <BuscarTable />
  </section>
  <section class="flex flex-wrap gap-40 justify-center">
    <FormCP boton="edit" class="bg-blue-950 rounded-none w-96"/>
    <FormCP boton="edit" class="bg-blue-950 rounded-none w-96"/>
    <FormCP boton="edit" class="bg-blue-950 rounded-none w-96"/>
  </section>
</template>
