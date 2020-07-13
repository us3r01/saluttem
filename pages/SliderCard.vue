<template>
    <div>
        <section class="">
            <v-container  grid-list-xl>
            <v-row>
                <v-col :cols="!breakpoint ? '12' : '6'">
                <v-card width="auto">
                    <v-row>
                    <v-col cols="6">
                    <v-card-title top class="text-left text-overline">Calidad</v-card-title>
                    <div top class="text-left text-h6 ml-4 mb-5">Productos importados</div>
                    </v-col>
                    <v-col cols="6">                            
                        <v-img src="https://i.ibb.co/GkYvsnr/2.jpg"/>
                    </v-col>
                    </v-row>
                </v-card>
                </v-col>
                <v-col :cols="!breakpoint ? '12' : '6'">
                <v-card auto>
                    <v-row>
                    <v-col cols="6">
                    <v-card-title top class="text-left text-overline">Seguridad</v-card-title>
                    <div top class="text-left text-h6 ml-4 mb-5">Certificaciones sanitarias</div>
                    </v-col>
                    <v-col cols="6">                            
                        <v-img src="https://i.ibb.co/Y33tGFD/1.jpg"/>
                    </v-col>
                    </v-row>
                </v-card>
                </v-col>
            </v-row>
            </v-container>
            
        </section>     
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                ['mdi-currency-btc', 'Criptomonedas', 'Clientes'],
                ['mdi-credit-card-check-outline', 'Tarjeta de crédito', 'Certificados'],
            ],            
            isHydrated: false
        }
    },
    computed: {
        breakpoint() {
            return this.isHydrated ? this.$vuetify.breakpoint.mdAndUp : { mdAndUp: '800', smAndDown: '540' }; // Any constant deault value would do here
        }
    },
    mounted() {
        this.isHydrated = true;
    }
}
</script>

<style lang="" scoped>

</style>