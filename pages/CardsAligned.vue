<template>
    <div>
        <section class="grey lighten-3">
            <v-container>
                <v-card width="auto" class="mb-5">
                    <v-row>
                        <v-col v-for="([icon, number, name], i) in experiences" :key="i" cols="6" md="3">
                            <div class="text-center">
    
                            </div>
                            <v-col cols="12" md="10">
                                <v-row>
                                    <v-col :cols="!breakpoint ? '12' : ''">
                                    <v-icon class="mb-3 ml-4" color="#57C3BD" large>{{icon}}</v-icon>
                                    </v-col>
                                    <v-col :cols="!breakpoint? '12' : ''">
                                        <div class="text-subtitle-1 mb-2" v-text="number" />
                                        <div class="text-body-2" v-text="name" />
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-card>
                <v-divider class="mt-5 mb-4 text-left" />
                <div class="text-h5">
                    Lo más vendido
                </div>
                <v-divider class="mt-5 mb-4 mx-auto" />
                <v-row>
                    <v-col v-for="(item, i) in cards" :key="i" cols="12" class="text-center mb-5" md="4">
                        <v-hover v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }"  hover class="mx-auto" data-aos="fade-up" max-width="240" 
                            :max-height="hover ? '367' :'330'" :to="`productos/${item.category}/${item.nombre}-${item.id}`">
                                <v-img :src="item.images[0]" max-widht="224" max-height="224">
                                </v-img>
                                <v-card-text class="text-h5 text-left black--text">$ {{item.costo}} <span class="text-caption justify-right green--text"> 5% OFF</span><br>
                                    <div class="text-body-1 font-weight-light">{{item.nombre}}</div>
                                    <div v-if="hover" class="text-body-1 font-weight-light grey--text">{{item.desc}}...</div>
                                </v-card-text>
                                <v-card-text class="pt-6" style="position: relative;">
                                    <v-btn absolute color="white" class="green--text" fab small right top>
                                        <v-icon>mdi-cart</v-icon>
                                    </v-btn>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
    
            </v-container>
        </section>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data: () => ({
        on: true,
        isHydrated: false,
        test: {},
        experiences: [
            ['mdi-currency-btc', 'Criptomonedas', 'Rápido y seguro'],
            ['mdi-credit-card-check-outline', 'Tarjeta de crédito', 'Mensualidades'],
            ['mdi-cash-multiple', 'Efectivo, depósito', 'Pago en persona'],
            ['mdi-account-cash', 'Facturamos', 'Seguridad y confianza']
        ],
        cards: [

        ]
    }),
    methods: {
        ...mapActions({
            get_products: 'products/getProductsLimit'
        }),
    },
    computed: {
        ...mapGetters({
            all_products: 'products/allProducts'
        }),
        breakpoint() {
            return this.isHydrated ? this.$vuetify.breakpoint.mdAndUp : { mdAndUp: '800', smAndDown: '540' }; // Any constant deault value would do here
        }        
    },
    async created() {
        const l = 30
        await this.get_products()
        this.cards = await this.all_products
        this.cards.forEach(element => {
            var trim = element.desc.substring(0, l)
            element.desc = trim
        });
    },
    mounted() {
        this.isHydrated = true;
    }
}
</script>

<style scoped>
.v-btn--fab.v-size--small.v-btn--absolute.v-btn--top {
    top: -100px;
}
</style>