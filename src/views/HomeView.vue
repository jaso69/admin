<script setup>
  import ClientProo from '../components/ClientProo.vue'
</script>

<template>
  
  <ClientProo 
    title="Clientes"
    boton="Alta Cliente"
    url="/clientes/altas"/>
</template>

<script>
export default {
  created(){
    this.$store.state.ruta = this.$route.name
    //console.log( this.$store.state.ruta )
  }
}
</script>