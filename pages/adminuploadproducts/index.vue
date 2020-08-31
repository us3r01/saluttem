<template>
    <div>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="request.nombre" label="Nombre"></v-text-field>
                        <v-text-field v-model="request.costo" label="Costo"></v-text-field>
                        <v-text-field v-model="request.costo_mayoreo" label="Costo Mayoreo"></v-text-field>
                        <v-text-field v-model="request.sku" label="Sku"></v-text-field>
                        <v-text-field v-model="request.color" label="Color"></v-text-field>
                        <v-select :items="categorias" label="Categoría" outlined></v-select>
                        <v-textarea name="input-7-1" filled label="Descripcion" auto-grow v-model="request.desc"></v-textarea>
                        <v-text-field v-model="temp" label="Link imágen"></v-text-field>
                        <v-btn color ="#57C3BD" dark @click="add_image">Add image</v-btn>
                        <v-btn color ="black" dark @click="add_product">Agregar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categorias: [
                'Cubrebocas',
                'Sanitizadores',
                'Tapetes',
                'Gel antibacterial',
                'Caretas',
                'Guantes'
            ],
            request: {
                category: '',
                color: 'blanco',
                costo: '',
                costo_mayoreo: '',
                desc: '',
                images: [],
                nombre: '',
                sku: '3955317',
            },
            temp: ''
        }
    },
    methods: {
        add_image(){
            this.request.images.push(this.temp)
            this.temp = ''
        },
        async add_product(){
            try{
            await this.$fireStore.collection("productos").doc().set(this.request);
            alert("Articulo agregado con éxito")               
            }
            catch(e){
                alert(e)
            }

        }
    }

}
</script>

<style lang="scss" scoped>

</style>