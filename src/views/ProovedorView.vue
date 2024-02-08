<script setup>
  import ClientProo from '../components/ClientProo.vue'
</script>

<template>
  <ClientProo 
    title="Proovedores"
    boton="Alta Proovedor"
    url="/proovedores/altas"/>
</template>

<script>
export default {
  created(){
    this.$store.state.ruta = this.$route.name
  }
}
</script>