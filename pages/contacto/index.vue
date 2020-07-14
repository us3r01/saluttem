<template>
    <div>
    <v-sheet>
        <v-main>
            <section id="contact" class="py-5">
                <v-container>
                    <v-row>
                        <v-col xs12 md6>
                            <v-form>
                                <v-container pa-0>
                                    <v-row>
                                        <v-col cols="12" class="mb-4 black--text text-h5">
                                            Ingresa tus datos
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-text-field outlined label="Nombre*" v-model="nombre" />
                                        </v-col>
    
                                        <v-col cols="12" md="6">
                                            <v-text-field outlined label="Apellido*" v-model="apellido" />
                                        </v-col>
    
                                        <v-col cols="12" md="6">
                                            <v-text-field outlined label="Email*" v-model="email" />
                                        </v-col>
    
                                        <v-col cols="12" md="6">
                                            <v-text-field label="Celular*" outlined v-model="celular" />
                                        </v-col>
    
                                        <v-col cols="12">
                                            <v-text-field label="Asunto" outlined v-model="asunto" />
                                        </v-col>
    
                                        <v-col cols="12">
                                            <v-textarea label="Mensaje" outlined v-model="mensaje" />
                                        </v-col>
    
                                        <v-col cols="12">
                                            <v-btn :block="$vuetify.breakpoint.xsOnly" color="#57C3BD" dark depressed x-large :href="`https://api.whatsapp.com/send?phone=522228319799&text=%C2%A1Asunto: *${asunto}* Nombre: ${nombre}, ${apellido}. ${mensaje} Correo: ${email} Celular: ${celular}.`">
                                                Enviar Mensaje
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-col>
    
                        <v-col cols="12" md="6">
                            <v-container fluid pa-0>
                                <v-row>
                                    <v-col cols="12" md="4" class="pa-0">
                                        <v-card-title>Ubicacion</v-card-title>
                                        <v-card-text>
                                            <div> Av 5 Ote 612</div>
                                            <div>Centro, 72000</div>
                                            <div>Puebla, Pue.</div>
                                        </v-card-text>
                                    </v-col>
    
                                    <v-col cols="12" md="4" class="pa-0">
                                        <v-card-title>Hablemos</v-card-title>
                                        <v-card-text>
                                            <div>+522228319799</div>
                                            <div>
                                                <a href="#" rel="nofollow">ventas@saluttem.com</a>
                                            </div>
                                        </v-card-text>
                                    </v-col>
                                    <v-col cols="12" md="4" class="pa-0">
                                        <v-card-title>Redes Sociales</v-card-title>
                                        <v-card-text>
                                            <div>
                                                <v-icon>mdi-facebook</v-icon>
                                                <a href="https://www.facebook.com/saluttem/" target="_blank" rel="nofollow">@Saluttem</a>
                                            </div>
                                        </v-card-text>
                                    </v-col>
    
                                    <v-col cols="12">
                                        <div class="iframe-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15086.110219248847!2d-98.1949433!3d19.040529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x95e88f116d594dcb!2sWork%C3%B3sfera%20Coworking%205%20de%20mayo!5e0!3m2!1sen!2smx!4v1591984475967!5m2!1sen!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-col>
                    </v-row>

                </v-container>
            </section>
        </v-main>
    </v-sheet>
    <v-tooltip left >
    <template v-slot:activator="{ on }"
    >
        <v-btn
      v-show="isActive"
      v-scroll="scroll"
          dark
          fab
          bottom
          fixed
          small
          right
          target="_blank"
          href="https://api.whatsapp.com/send?phone=52228319799&text=%C2%A1Hola, visité su página web y quisiera mayores informes!"
          color="green"
          v-on="on"
                :style="{
        marginBottom: '100px'
      }"
        >
        <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
    </template>
    <span>¡Hablemos!</span>
    </v-tooltip>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Hablémos',
            meta: [
                { vmid: 'description', name: 'description', content: 'Contáctanos por whatsapp al 2228319799 o por email ventas@saluttem.com. Si lo prefires en nuestra página de facebook @saluttem podemos atenderte también (;' },
                { property: 'og:title', content: "Hablémos"},
                { property: 'og:description', content: "Contáctanos por whatsapp al 2228319799 o por email ventas@saluttem.com. Si lo prefires en nuestra página de facebook @saluttem podemos atenderte también (;"},
                { property: 'og:image', content: "https://i.ibb.co/H7jm1ps/Por-un-mundo-m-s-sano.png"},
                { property: 'og:url', content: "https://www.saluttem.com/contacto"},
                { property: 'og:type', content: "website"},
                { name:'keywords', content: 'Contacto dueños saluttem, correo electronico saluttem, contacto para comprar cubrebocas, datos de contacto saluttem, numero saluttem'}                
            
            ]
        }
    },
    data: () => ({
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        asunto: '',
        mensaje: '',
        isActive: false

    }),
    methods: {
      scroll (val) {
        this.isActive = window.pageYOffset > 50
      }
    }
}
</script>

<style scoped>
.iframe-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
}

.iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>