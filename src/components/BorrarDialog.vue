<script setup>
    import IconBorrar from '../components/icons/IconBorrar.vue'
</script>
<template>
    <div class="bg-slate-400 rounded-full border-red-500 border-4 p-2">
        <div class="card text-center">
        <h5 class="flex items-center justify-center text-zinc-800 font-bold"><IconBorrar />!!!! BORRAR !!!!<IconBorrar /></h5>
        <h5 class="text-red-600 text-2xl font-bold">{{ form_data.nombre }}</h5>
        <p class="text-zinc-800">Estas seguro?</p>
        <div class="flex justify-around">
            <button @click="borrar" class="bg-red-600 text-white hover:bg-white hover:text-red-600 font-bold p-2 m-2 border-2 rounded-2xl">Eliminar</button>
            <button @click="cancelar" class="bg-green-700 text-white hover:text-green-700 hover:bg-white font-bold p-2 m-2 border-2 rounded-2xl">Cancelar</button>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
