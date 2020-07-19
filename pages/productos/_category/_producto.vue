<template>
    <div>
        <v-main>
            <v-container>
                <v-card width="auto">
                    <v-row>
                        <v-col v-if="breakpoint">
                            <div class="ma-3">
                            <v-card v-for="(item, i) in images" :key="i" max-width="52" max-height="52" class="product-img"  @click="select_image(i)" hover >
                                <v-img :src="item" class="pa-3" v-bind:class="{activeimg:  model==i}" text-xs-center/>
                            </v-card>
                            </div>
                        </v-col>
                        <v-row v-else class="ml-5">
                            <v-card v-for="(item, i) in images" :key="i" max-width="52" max-height="52" class="product-img ma-2"  @click="select_image(i)" tile flat >
                                <v-img :src="item" class="pa-3" v-bind:class="{activeimg:  model==i}" text-xs-center/>
                            </v-card>    
                        </v-row>                        
                        <v-col>
                            <v-img :src="this.images[model]" max-width="410" />
                        </v-col>
                        <v-col class="ma-3">
                            <div class="text-h5">
                                {{this.nombre}}
                            </div>
                            <v-row class="grey--text">
                            <v-rating v-model="rating" color="yellow darken-3"  background-color="grey darken-1" class="ml-3 mt-2" empty-icon="$ratingFull"
                             half-increments hover small dense></v-rating> 
                            </v-row>
                            <div class="text-h4 font-weight-light mt-2">
                                $ {{costo}}
                            </div>
                            <div class="text-h5 font-weight-thin mt-2">
                                IVA Incluido
                            </div>
                            <div class="mt-2">
                            <v-text-field
                                v-model="pedido"
                                label="Unidades"
                                max="500"
                                min="1"
                                step="1"
                                style="width: 125px"
                                type="number"
                            ></v-text-field>
                            </div>
                            <div class="mt-2">
                                <v-btn class="white--text" color="#2968C7" max-width="219" :href="`https://api.whatsapp.com/send?phone=522228319799&text=%C2%A1Hola, quisiera comprar: *${pedido}* unidades de ${nombre}`" target="_blank">
                                    Comprar ahora
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                    <v-divider />
                    <div class="ma-3 text-h5 font-weight-regular">
                        Descripción
                    </div>
                    <div class="ma-3 text-body-2">
                        {{desc}}
                    </div>
                    <v-divider class="mt-5"/>
                </v-card>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    props: ['nombre', 'costo', 'costo_mayoreo', 'desc', 'images'],
    head() {
        return{
            title: this.nombre,
        // eslint-disable-next-line no-useless-concat
  meta: [
    { vmid: 'description', name: 'description', content: this.desc },
    { property: 'og:title', content: this.nombre},
    { property: 'og:description', content: this.desc},
    { property: 'og:image', content: this.images[0]},
    { property: 'og:url', content: `'https://saluttem.com'${this.$route.path}`},
    { property: 'og:type', content: 'website'},
    { name:'keywords', content: ''},
    { name:'geo.region' ,content:'MX-PUE'},
    { name:'geo.placename', content:'Puebla'},
    { name:'geo.position', content:'19.001559;-98.202893'},
    { name:'ICBM', content:'19.001559, -98.202893'},
  ],

        }
    },
  jsonld() {
    return     {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": this.name,
      "image": [
        this.images[0],
        this.images[1],
        this.images[2]
       ],
      "description": this.desc,
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "Saluttem"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fred Benson"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      },
        "offers": {
          "@type": "AggregateOffer",
          "offerCount": "1",
          "lowPrice": this.costo,
          "highPrice": this.costo,
          "priceCurrency": "MXN"
        }

    }

  },
    data() {
        return {
            isHydrated: false,
            rating: 4.5,
            model: 0,
            pedido: 0,
        }
    },
        computed: {
        breakpoint() {
            return this.isHydrated ? this.$vuetify.breakpoint.mdAndUp : { mdAndUp: '800', smAndDown: '540' }; // Any constant deault value would do here
        }
    },
    mounted() {
        this.isHydrated = true;
    },
    methods: {
        select_image(i) {
            this.model = i
        }
    }
}
</script>

<style  scoped>
.product-img{
  cursor: pointer;
  margin-top: 10px;
}
.activeimg{
  border: 2px solid #3483FA;
}
.v-btn {
  text-transform:none !important;
  
}
</style>