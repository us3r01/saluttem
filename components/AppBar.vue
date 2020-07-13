<template>
    <div>
        <v-app-bar large color="white">
            <v-app-bar-nav-icon @click="toggleDrawer('drawer')"/>
      <v-btn
        :height="breakpoint ? '120' : 'auto'"
        text
        color="transparent"
        nuxt
        to="/"
      >
        <v-img
          src="/logo.png"
          width="50"
        />
      </v-btn>
      <v-toolbar-title>
        Saluttem
      </v-toolbar-title>
            <v-spacer/>
    
    <template v-if="breakpoint">
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        text
      >
        {{item.text}}
      </v-btn>
    </template>
    <v-menu v-else>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-card
        
      >
        <v-list color="transparent">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-title v-text="item.text" />
        </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data: () => ({
      isScrolling: false,
      isHydrated: false,
      items: [
        {
          to: '/',
          text: 'Inicio'
        },
        {
          to: '/contacto',
          text: 'Contácto'
        },
        {
          to: '/allproducts',
          text: 'Productos'
        },  
        {
          to: '/acercade',
          text: 'Acerca de'
        }
      ]
    }),
    methods: {
        ...mapActions({
            toggleDrawer: "auth/toggle_drawer", //also supports payload `this.nameOfAction(amount)` 
            signIn: "auth/sign_in",
            signOut: "auth/sign_out"
    })
    },
    computed: {
        breakpoint() {
            return this.isHydrated ? this.$vuetify.breakpoint.mdAndUp : { mdAndUp: '800', smAndDown: '540' }; // Any constant deault value would do here
        }
    },
  mounted() {
    this.isHydrated = true;
  },    
}
</script>

<style scoped>
.v-btn {
  text-transform:none !important;
  
}
</style>