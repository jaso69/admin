
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
        <div class="flex flex-wrap -mx-3 mb-2">
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

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full px-3">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{direcciontxt}}
            </label>
            <input :disabled="botones" v-model="form_data.direccion" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Calle la Flor">          
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{ciudadtxt}}
            </label>
            <input :disabled="botones" v-model="form_data.cuidad" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Madrid">
          </div>
          <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{provinciatxt}}
            </label>
            <div class="relative">
                <input :disabled="botones" v-model="form_data.provincia" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="Madrid">
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
            <label class="block tracking-wide text-white text-xs font-bold mb-2">
              {{codigoPostaltxt}}
            </label>
            <input :disabled="botones" v-model="form_data.codigoPostal" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-cyan-400" placeholder="28003">
          </div>
        </div>
        <div v-if="modalEliminar" class="bg-slate-400 rounded-full border-red-500 border-4 p-2">
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
        <div class="flex justify-around">
            <button v-if="!botones" @click="guardar" class="mt-4 p-2 rounded-full font-bold text-white bg-[#09f] hover:text-[#09f] hover:bg-white active:translate-y-1">{{ botonGuardartxt }}</button>
            <button v-if="!botones" @click="cancelar" class="mt-4 p-2 rounded-full font-bold text-white bg-orange-600 hover:text-orange-600 hover:bg-white active:translate-y-1">{{ botonCancelartxt }}</button>
            <button v-if="botones" @click="editar" class="mt-4 p-2 rounded-full font-bold text-white bg-green-900 hover:text-green-900 hover:bg-white active:translate-y-1">{{ botonEditartxt }}</button>
            <button v-if="!botones && eliminarBoton" @click="eliminar" class="mt-4 p-2 rounded-full font-bold text-white bg-[#f02] hover:text-[#f02] hover:bg-white active:translate-y-1">{{ botonEliminartxt }}</button>
          </div>
      </div>
</section>
  
</template>

<script>
    import IconBorrar from '../components/icons/IconBorrar.vue'
    import formCP from '../helpers/formTxt'
    import form_data from '../helpers/form.js';
    import nuevoCliente from '../helpers/api/clientNuevo'
    import proovedorNuevo from '../helpers/api/proovedorNuevo'
    import clienteUpdate from '../helpers/api/clientUpdate'
    import proovedorUpdate from '../helpers/api/proovedorUpdate'
    import clienteBorrar from '../helpers/api/clientBorrar'
    import proovedorBorrar from '../helpers/api/proovedorBorrar'

    const { empresatxt, ciftxt,nombretxt, apellido1txt, apellido2txt, mailtxt, telefono1txt, telefono2txt, direcciontxt, ciudadtxt, provinciatxt, codigoPostaltxt, botonGuardartxt, botonCancelartxt, botonEditartxt, botonEliminartxt} = formCP
    export default {
    props: {
        boton: String,
        cliente: []
    },
    created() {
        if (this.boton) {
            this.botones = true;
            this.form_data = { ...this.cliente };
        }
        if (this.$route.name === 'proovedoresAltas' || this.$route.name === 'clientes')
            this.eliminarBoton = false;
    },
    data() {
        return {
            empresatxt, ciftxt, nombretxt, apellido1txt, apellido2txt, mailtxt, telefono1txt, telefono2txt, direcciontxt, ciudadtxt, provinciatxt, codigoPostaltxt, botonGuardartxt, botonCancelartxt, botonEditartxt, botonEliminartxt,
            form_data,
            botones: false,
            enabled: 'disabled',
            add: false,
            eliminarBoton: true,
            editarBoton: false,
            modalEliminar: false,
        };
    },
    methods: {
        async guardar() {
            if (this.editarBoton)
                this.guardarEditar();
            let resp;
            this.add = false;
            if (this.$store.state.ruta === 'home') {
                resp = await this.guardarClientes();
                return;
            }
            if (this.$store.state.ruta === 'proovedores') {
                resp = await this.guardarProovedores();
                return;
            }
            this.goBack(resp);
            this.$router.back();
        },
        async guardarClientes() {
            let resp;
            const data = await nuevoCliente(this.form_data);
            resp = await data.json();
            return resp;
        },
        async guardarProovedores() {
            let resp;
            const data = await proovedorNuevo(this.form_data);
            resp = await data.json();
            return resp;
        },
        editar() {
            this.botones = false;
            this.editarBoton = true;
        },
        cancelar() {
            if (this.$route.name === 'proovedoresAltas' || this.$route.name === 'clientes')
                this.$router.back();
            this.botones = true;
            this.modalEliminar = false;
        },
        eliminar() {
            this.modalEliminar = true;
        },
        async borrar() {
            let resp;
            let data;
            if (this.$store.state.ruta === 'home')
                data = await clienteBorrar(this.form_data);
            if (this.$store.state.ruta === 'proovedores')
                data = await proovedorBorrar(this.form_data);
            resp = await data.json();
            this.modalEliminar = false;
            this.goBack(resp);
            this.refresh();
        },
        async guardarEditar() {
            let resp;
            let data;
            if (this.$store.state.ruta === 'home') {
                data = await clienteUpdate(this.form_data);
            }
            if (this.$store.state.ruta === 'proovedores') {
                data = await proovedorUpdate(this.form_data);
            }
            resp = await data.json();
            this.goBack(resp);
            this.refresh();
        },
        async goBack(resp) {
            if (resp.msg === 'success')
                this.add = true;
            if (!this.add)
                alert('Error al guardar los datos');
            this.botones = true;
        },
        refresh() {
            this.$emit('refresh');
        }
    },
    components: { IconBorrar }
}
</script>