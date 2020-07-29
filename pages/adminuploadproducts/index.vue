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
                        <v-textarea name="input-7-1" filled label="Images"  background-color="#57C3BD" class="text-white" auto-grow></v-textarea>
                        <v-btn color ="#57C3BD" dark>Crop Images and push</v-btn>
                        <v-btn color ="black" dark>Agregar</v-btn>
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
            }
        }
    },

}
</script>

<style lang="scss" scoped>

</style>