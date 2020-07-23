<template>
    <div>
        <v-main>
            <v-container :fluid="breakpoint ? true : false">
                <div class="text-justify text-overline" v-if="breakpoint">
                    Categorías
                </div>
                <v-row :class="breakpoint ? '' : 'ml-8'">
                    <v-col md="2" cols="6" sm="mx-auto">
                        <v-card max-width="200" height="600" v-if="breakpoint">
                            <v-card-text>
                                <ul style="list-style: none;">
                                    <li v-for="(items,i) in categorias" :key="i">
                                        <a @click="filter(i)">{{items}}</a>
                                    </li>
                                    <li>
                                        <a> <strong @click="filter_reset()">Quitar Filtro</strong> </a>
                                    </li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <!-- Menu en mobile -->
                    <div class="text-center">
                        <v-menu offset-y v-if="!breakpoint">
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              v-bind="attrs"
                              v-on="on"
                              text
                              class="text-overline"
                            >
                              Categorias
                            </v-btn>
                        </template>
                              <v-list>
                                <v-list-item
                                  v-for="(item, index) in categorias"
                                  :key="index"
                                  @click="filter(i)"
                                >
                                  <v-list-item-title>{{ item }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="filter_reset()">
                                    Quitar Filtros
                                </v-list-item>
                              </v-list>
                            </v-menu>
                        </div>
                    <!-- Menu en mobile -->
                    <v-col cols="12" sm="6" md="10">
                    <v-row dense >
                    <v-col v-for="(item, i) in cards" :key="i" class="text-center">
                        <v-hover v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" hover class="" max-width="240" :max-height="hover ? '367' :'330'" :to="`productos/${item.category}/${item.ruta}-${item.id}`">
                                <v-img :src="item.images[0]" max-widht="224" max-height="224">
                                </v-img>
                                <v-card-text class="text-h5 text-left black--text">$ {{item.costo}} <span class="text-caption justify-right green--text"> 5% OFF</span><br>
                                    <div class="text-body-1 font-weight-light">{{item.nombre}}</div>
                                    <div v-if="hover" class="text-body-1 font-weight-light grey--text">{{item.desc}}...</div>
                                </v-card-text>
    
                            </v-card>
                        </v-hover>
                    </v-col>
                    </v-row>
                </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    head() {
        return {
            title: 'Todos los productos',
            meta: [
                { vmid: 'description', name: 'description', content: 'Enlistado por categorías: Cubrebocas, Sanitizadores, Tapetes, Gel antibacterial, Caretas y Guantes' },
                { property: 'og:title', content: "Todos los productos"},
                { property: 'og:description', content: "Enlistado por categorías: Cubrebocas, Sanitizadores, Tapetes, Gel antibacterial, Caretas y Guantes"},
                { property: 'og:image', content: "https://i.ibb.co/6XvX6Jx/4.png"},
                { property: 'og:url', content: "https://www.saluttem.com/allproducts"},
                { property: 'og:type', content: "website"},
                { name:'keywords', content: 'comercio electronico saluttem, lista de productos de la empresa de salud, catalogo de ofertas saluttem'}
]
        }
    },
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
            cards: [],
            isHydrated: false
        }
    },
    computed: {
        ...mapGetters({
            all_products: 'products/allProducts'
        }),
        breakpoint() {
            return this.isHydrated ? this.$vuetify.breakpoint.mdAndUp : { mdAndUp: '800', smAndDown: '540' }; // Any constant deault value would do here
        }
    },
    methods: {
        ...mapActions({
            get_products: 'products/getProducts'
        }),
        filter(id) {
            var res = this.all_products.filter(cat => cat.category == this.categorias[id])
            this.cards = res
        },
        filter_reset() {
            this.cards = this.all_products
            const l = 30
            this.cards.forEach(element => {
                var trim = element.desc.substring(0, l)
                element.desc = trim
            });
        },
    },
    async created() {
        const l = 30
        await this.get_products()
        this.cards = await this.all_products
        this.cards.forEach(element => {
            var trim = element.desc.substring(0, l)
            element.desc = trim
            element.ruta = element.nombre
            element.ruta = element.ruta.replace(/\s+/g, '-').toLowerCase();
            element.ruta = element.ruta.replace(/,/g, "");
            element.ruta = element.ruta.replace(/\?/g,'');
            element.ruta = element.ruta.replace(/\¿/g,'');
            element.ruta = element.ruta.replace(/\(/g,'');
            element.ruta = element.ruta.replace(/\)/g,'');
            element.ruta = element.ruta.replace(/\s+/g, '-').toLowerCase();
            element.ruta  = element.ruta.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        });
    },
    mounted() {
        this.isHydrated = true;
    }

}
</script>

<style lang="scss" scoped>

</style>