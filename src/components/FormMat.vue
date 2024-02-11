<template>
    <section class="mt-4 bg-slate-800 rounded-full p-4">
        <div class="">
            <div class="flex justify-center items-center mb-3">
                <div class="mx-4">
                    <label class="block tracking-wide text-white text-xs font-bold mb-2">
                        {{ labelProotxt }}
                    </label>
                    <select  :disabled="botones" v-model="proovedorSel" class="appearance-none block w-40 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:border-cyan-400" placeholder="ABM">
                        <option v-if="botones">{{ proovedorSel }}</option>
                        <option v-for="proo in proovedores" :key="proo._id">{{proo.nombre}}</option>
                    </select>
                </div>
                <div class="mx-4">
                    <label class="block tracking-wide text-white text-xs font-bold mb-2">
                    {{ labelCodigotxt }}
                    </label>
                    <input :disabled="botones" v-model="matData.codigo" class="appearance-none block w-40 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-cyan-400" placeholder="CC25">
                </div>
                <div class="mx-4">
                    <label class="block tracking-wide text-white text-xs font-bold mb-2">
                    {{ labelDesctxt }}
                    </label>
                    <input :disabled="botones" v-model="matData.descripcion" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-cyan-400" placeholder="Cable cobre 2.5">
                </div>
                <div class="mx-4">
                    <label class="block tracking-wide text-white text-xs font-bold mb-2">
                        {{ labelCantidadtxt }}
                    </label>
                    <input :disabled="botones" v-model="matData.cantidad" class="appearance-none block w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-cyan-400" placeholder="100">
                </div>
                <div class="mx-4">
                    <label class="block tracking-wide text-white text-xs font-bold mb-2">
                    {{ labelPrecioComptxt }}
                    </label>
                    <input :disabled="botones" v-model="matData.precioCompra" class="appearance-none block w-24 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-cyan-400" placeholder="2.5">
                </div>
                <div class="mx-4">
                    <label class="block tracking-wide text-white text-xs font-bold mb-2">
                    {{ labelPrecioVtxt }}
                    </label>
                    <input :disabled="botones" v-model="matData.precioVenta" class="appearance-none block w-24 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-cyan-400" placeholder="3">
                </div>
                <div v-if="modalEliminar" class="bg-slate-400 rounded-full border-red-500 border-4 p-">
                    <div class="card text-center p-6">
                        <h5 class="flex items-center justify-center text-zinc-800 font-bold"><IconBorrar />BORRAR !!<IconBorrar /></h5>
                        <h5 class="text-red-600 text-2xl font-bold">{{ matData.codigo }}</h5>
                        <p class="text-zinc-800">Estas seguro?</p>
                        <div class="flex justify-around">
                        <button @click="borrar" class="bg-red-600 text-white hover:bg-white hover:text-red-600 font-bold p-2 m-2 border-2 rounded-2xl">Eliminar</button>
                        <button @click="cancelar" class="bg-green-700 text-white hover:text-green-700 hover:bg-white font-bold p-2 m-2 border-2 rounded-2xl">Cancelar</button>
                        </div>
                    </div>
                </div>
                <div class="flex justify-around">
                    <button v-if="!botones" @click="guardar" class="mt-4 mr-4 p-2 rounded-full font-bold text-white bg-[#09f] hover:text-[#09f] hover:bg-white active:translate-y-1"> {{ botonGuardartxt }} </button>
                    <button v-if="!botones" @click="cancelar" class="mt-4 mr-4 p-2 rounded-full font-bold text-white bg-orange-600 hover:text-orange-600 hover:bg-white active:translate-y-1">{{ botonCancelartxt }}</button>
                    <button v-if="botones" @click="editar" class="mt-4 mr-4 p-2 rounded-full font-bold text-white bg-green-900 hover:text-green-900 hover:bg-white active:translate-y-1">{{ botonEditartxt }}</button>
                    <button v-if="!botones && eliminarBoton" @click="eliminar" class="mt-4 p-2 rounded-full font-bold text-white bg-[#f02] hover:text-[#f02] hover:bg-white active:translate-y-1">{{ botonEliminartxt }}</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import matConfig from '../helpers/materialesConfig'
import matData from '../helpers/matData'
import materialNuevo from '@/helpers/api/materialNuevo'
import materialUpdate from '@/helpers/api/materialesUpdate'
import proovedores from '../helpers/api/proovedorTodos.js'
import materialBorrar from '@/helpers/api/materialBorrar'
import IconBorrar from "@/components/icons/IconBorrar.vue";
export default {
    props:{
        material: [],
    },
    async created(){
       await this.init(); 
    },

    data(){
        return {
            ...matConfig,
            matData,
            botones: true,
            proovedorSel: '',
            proovedores: null,
            eliminarBoton: true,
            modalEliminar: false, 
        }
    },
    methods:{
        async init(){
            if(this.material){
                this.proovedorSel = this.material.proovedor[0].nombre
                this.matData = {...this.material}
                this.botones = true
            } else{
                this.botones = false
                this.eliminarBoton = false;
                await this.getProovedores();
                this.proovedorSel = this.proovedores[0].nombre
            }
        },
        eliminar(){
            this.modalEliminar = true
        },
        async borrar(){
            const resp = await materialBorrar(this.matData);
            const data = await resp.json()
            this.alertError(data)
            this.refresh();
        },

        async guardar(){
            if(this.material){ await this.update(); return}
            this.ProoId()
            const resp = await materialNuevo(this.matData)
            const data = await resp.json()
            this.alertError(data)
            this.$router.back();
        },
        async update(){
            console.log(this.matData)
            this.ProoId()
            const resp = await materialUpdate(this.matData)
            const data = await resp.json()
            this.alertError(data)
            this.cancelar();
            this.refresh();
        },
        cancelar(){
            this.botones = true;
            this.eliminarBoton = false;
            this.modalEliminar = false;
            if(!this.material) this.$router.back();
        },
        async getProovedores(){
            this.proovedores = await proovedores()
        },
        async editar(){
            await this.getProovedores();
            this.botones = false;
            this.eliminarBoton = true;
        },
        ProoId(){
            this.matData.proovedor = this.proovedores.filter(proo => proo.nombre === this.proovedorSel)
        },
        alertError(data){
            if(!data.msg === 'success') alert('Error al guardar los datos')  
        },
        refresh() {
            this.$emit('refresh');
        },
    },
    components: { IconBorrar }
}
</script>
