<template>
    <div>
        <v-footer 
        v-if="breakpoint" 
        color="#EEEEEE"
        >        
          <v-row class="ma-0">
          <v-col
          cols="12"
          md="3"
          >
        <ul class=" pl-0" style="list-style: none;">
       
        <v-row align="center" justify="center" responsive>
        <v-col align="center" justify="center" responsive>
         <li class="mb-3">
           Saluttem 
        </li>
        <li style="list-style: none;font-size:12px">
        hablemos - ventas@saluttem.com
        </li>
                </v-col>
        </v-row>
        </ul>                      
        </v-col>
        <v-spacer></v-spacer>
        <v-col
        class=""
        md="3"
        cols="12"
        >
        <ul class="font-weight-medium pl-0" style="list-style: none; font-size:15px">
        <li class="mb-3">
        <v-btn text to="/acercade">
        Acerca de
        </v-btn>
        </li>
        <li class="mb-3">
        <v-btn text to="/contacto">
        Contácto
        </v-btn>
        </li>
        <li class="mb-3">
        <v-btn text to="/allproducts">
        Productos
        </v-btn>
        </li>
        </ul>                       
        </v-col>
        <v-col
        class="pr-5"
        md="3"
        cols="12"
        >                   
        </v-col>

        </v-row>
      <v-col
        cols="12"
        
      >
      <v-divider></v-divider>
      <v-row>
        <v-col
        cols="12"
        md="8"
        >
        <div class="mt-4 text-right pr-12 mr-12">
        {{ new Date().getFullYear() }} — <strong>Saluttem</strong> 
        <v-icon>mdi-bitcoin</v-icon>
        <v-icon>mdi-credit-card-outline</v-icon>
        <v-icon>mdi-lumx</v-icon>
        </div>
      </v-col>
      <v-col
        cols="6"
        md="4"
        >
      <div class="mt-4 text-right">
        Made with <v-icon>mdi-heart</v-icon> by <strong><a href="https://jesuslb.com" target="_blank">JTech</a></strong> 
      </div>
      </v-col>
      </v-row>
      </v-col>
        </v-footer>
<v-bottom-navigation
    v-model="bottomNav"
    v-else
    app
    color="secondary"

  >
    <v-btn to="/">
      <span>Inicio</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="/contacto">
      <span>Contácto</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>

    <v-btn to="/allproducts">
      <span>Productos</span>
      <v-icon>mdi-shopping</v-icon>
    </v-btn>

    <v-btn to="/acercade">
      <span>Acerca de</span>
      <v-icon>mdi-information</v-icon>
    </v-btn>
  </v-bottom-navigation>
    </div>
</template>

<script>

  export default {
    data() {
        return {
            isHydrated: false,
        bottomNav: 'recent',
        showMe: false
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

<style scoped>
.v-btn {
  text-transform:none !important;
  left: 12px;
}
</style>