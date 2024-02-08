<template>
    <section class="mt-4 bg-slate-800 rounded-full p-4">
    <div class="w-full max-w-lg m-auto">
        <div class="flex flex-wrap -mx-3 mb-3">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{empresatxt}}
            </label>
            <input :disabled="botones" v-model="form_data.empresa" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-cyan-400" placeholder="Pedro">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{ciftxt}}
            </label>
            <input :disabled="botones" v-model="form_data.cif" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-cyan-400" placeholder="Perez">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{nombretxt}}
            </label>
            <input :disabled="botones" v-model="form_data.nombre" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-cyan-400" placeholder="Pedro">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{apellido1txt}}
            </label>
            <input :disabled="botones" v-model="form_data.apellido1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-cyan-400" placeholder="Perez">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{apellido2txt}}
            </label>
            <input :disabled="botones" v-model="form_data.apellido2" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Garcia">
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{mailtxt}}
            </label>
            <input :disabled="botones" v-model="form_data.mail" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="pedro@pedro.es">
          </div>
          <div class="w-full md:w-1/2 px-3 py-2">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{telefono1txt}}
            </label>
            <input :disabled="botones" v-model="form_data.telefono1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="91 677 77 77 77">
          </div>
          <div class="w-full md:w-1/2 px-3 py-2">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{telefono2txt}}
            </label>
            <input :disabled="botones" v-model="form_data.telefono2" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="677 777 777">
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{direcciontxt}}
            </label>
            <input :disabled="botones" v-model="form_data.direccion" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Calle la Flor">          
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{ciudadtxt}}
            </label>
            <input :disabled="botones" v-model="form_data.cuidad" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Madrid">
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{provinciatxt}}
            </label>
            <div class="relative">
                <input :disabled="botones" v-model="form_data.provincia" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Madrid">
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{codigoPostaltxt}}
            </label>
            <input :disabled="botones" v-model="form_data.codigoPostal" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="28003">
          </div>
        </div>
        <div class="flex justify-around">
            <button v-if="!botones" @click="guardar" class="mt-4 p-2 rounded-full font-bold text-white bg-[#09f] hover:text-[#09f] hover:bg-white active:translate-y-1">{{ botonGuardartxt }}</button>
            <button v-if="!botones" @click="cancelar" class="mt-4 p-2 rounded-full font-bold text-white bg-orange-600 hover:text-orange-600 hover:bg-white active:translate-y-1">{{ botonCancelartxt }}</button>
            <button v-if="botones" @click="editar" class="mt-4 p-2 rounded-full font-bold text-white bg-green-900 hover:text-green-900 hover:bg-white active:translate-y-1">{{ botonEditartxt }}</button>
            <button v-if="!botones && eliminarBoton" class="mt-4 p-2 rounded-full font-bold text-white bg-[#f02] hover:text-[#f02] hover:bg-white active:translate-y-1">{{ botonEliminartxt }}</button>
          </div>
      </div>
</section>
</template>

<script>
    import formCP from '../helpers/formTxt'
    import form_data from '../helpers/form.js';
    import nuevoCliente from '../helpers/api/clientNuevo'
    import proovedorNuevo from '../helpers/api/proovedorNuevo'

    const { empresatxt, ciftxt,nombretxt, apellido1txt, apellido2txt, mailtxt, telefono1txt, telefono2txt, direcciontxt, ciudadtxt, provinciatxt, codigoPostaltxt, botonGuardartxt, botonCancelartxt, botonEditartxt, botonEliminartxt} = formCP
    export default {
      props:{
        boton: String,
        cliente: []
      },
      created(){
        if (this.boton) {
          this.botones = true;
          this.form_data = {...this.cliente}
        }
        if(this.$route.name === 'proovedoresAltas' || this.$route.name === 'clientes') this.eliminarBoton = false
      },
        data(){
            return {
                empresatxt, ciftxt, nombretxt, apellido1txt, apellido2txt, mailtxt, telefono1txt, telefono2txt, direcciontxt, ciudadtxt, provinciatxt, codigoPostaltxt, botonGuardartxt, botonCancelartxt, botonEditartxt, botonEliminartxt, 
                form_data,
                botones: false,
                enabled: 'disabled',
                add : false,
                eliminarBoton: true,
                editarBoton: false,
            }
        },
        methods: {
          async guardar(){
            
            if(this.editarBoton) this.guardarEditar();

            let resp;
            this.add = false

            if(this.$store.state.ruta === 'home') {
              const data = await nuevoCliente(this.form_data);
              resp = await data.json();
            }

            if(this.$store.state.ruta === 'proovedores') {
              const data = await proovedorNuevo(this.form_data);
              resp =await data.json()
            }

            if(resp.msg === 'success') this.add = true
            
            if (!this.add) alert('Error al guardar los datos')
            
            this.$router.back()
          },
          editar(){
            this.botones = false;
            this.editarBoton = true;
          },
          cancelar(){
            if(this.$route.name === 'proovedoresAltas' || this.$route.name === 'clientes') this.$router.back()
            this.botones = true;
          },
          guardarEditar(){
            //TODO: check
          }
        }
    }
</script>