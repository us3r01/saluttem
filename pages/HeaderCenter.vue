<template>
    <div>
        <v-sheet :height="breakpoint ? 'auto' : '90vh'">
            <v-img src="/landing.jpg" height="auto" :class="breakpoint ? '' : ''">
                <v-container class="fill-height" fluid>
                    <v-row align-center>
                        <v-col>
                            <div class="text-h2 mb-8 black--text" v-if="breakpoint">
                                El mejor equipo para cuidar tu <br> salud y la de tu familia
                            </div>
                            <v-responsive class="mb-5">
                                <h3 class="text-h4 black--text" v-if="breakpoint">
                                    ¡Contáctanos!
                                </h3>
                            </v-responsive>
                            <v-btn large class="px-5" color="#57C3BD" dark to="/productos" v-if="breakpoint">
                                Ver productos
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
            <v-main v-if="!breakpoint">
                <v-container>
                    <v-row  class="text-center ">
                        <v-col>
                            <h2 class="font-weight-bold  black--text">
                                El mejor equipo para cuidar tu salud y la de tu familia
                            </h2>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center ">
                            <v-btn  rounded class="px-5" color="#57C3BD" dark to="/allproducsts">
                                Ver productos
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                                <h3 class="text-subtitle-1 text-center">
                                    ¡Contáctanos!
                                </h3>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-sheet>
    </div>
</template>

<script>
export default {
    data() {
        return {
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

<style lang="scss" scoped>
.v-btn {
  text-transform:none !important;
  
}
</style>