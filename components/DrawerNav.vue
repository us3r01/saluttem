<template>
    <v-navigation-drawer v-model="inputValue" fixed left temporary>
        <v-row align="center" class="ma-0 pa-3 flex-no-wrap">
            <v-img contain src="/drawer.png" width="70%" />
            <v-spacer></v-spacer>
            <v-btn aria-label="Close" class="ml-4" icon @click="toggleDrawer">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-row>
        <v-divider />
        <v-list>
            <v-list-item 
            v-for="(item, i) in drawer_items" 
            :key="i" 
            :to="{path: item.to}"
            >
                <v-icon class="pr-5">{{item.icon}}</v-icon>
                <v-list-item-title v-text="item.text" />
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapActions, mapGetters } from 'vuex'

export default {
    data: () => ({
        input: false,
        drawer_items: [{
                'to': '/',
                'text': 'Inicio',
                icon: 'mdi-home'
            },
            {
                'to': '/allproducts',
                'text': 'Productos',
                icon: 'mdi-shopping'
            },
            {
                'to': '/acercade',
                'text': 'Acerca de',
                icon: 'mdi-information'
            },
            {
                'to': '/contacto',
                'text': 'Contácto',
                icon: 'mdi-account'
            },
        ]
    }),

    computed: {
        ...mapGetters({
            isSigned: "auth/isSigned",
            drawer: "auth/drawer"
        }),
        inputValue: {
        get() {
            return this.drawer
        },
        set(val) {
            this.setDrawer(val)
        }
        }
    },

    methods: {
        ...mapActions({
            setDrawer: "auth/set_drawer",
            toggleDrawer: "auth/toggle_drawer" //also supports payload `this.nameOfAction(amount)` 
    })

    }
}
</script>
