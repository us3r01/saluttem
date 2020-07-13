<template>
    <div>
        <section class="grey lighten-3">
            <v-container>
                <section-header header="La salud es primero" sub-header="Tutoriales" text="El conocimiento y la prevención salvan vidas" />
                <v-row>
                    <v-col v-for="(propuestas, i) in cards" :key="i" cols="12" class="text-center mb-5" md="4">
                        <v-card @click.stop="propuestas.dialog = true" hover class="mx-auto" max-width="400" >
                            <v-img class="white--text align-center" height="200px"  :src="propuestas.image">
                            </v-img>
                                    <v-card-title>{{propuestas.titulo}}</v-card-title>
                            <v-card-subtitle class="text-left text-overline">
                                {{propuestas.subtitulo}}
                            </v-card-subtitle>
                            <v-card-text class="text-left">
                                {{propuestas.bullets[0]}}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="#57C3BD" dark @click.stop="propuestas.dialog = true" large>
                                    <v-icon>mdi-play</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-dialog v-model="propuestas.dialog" max-width="560" max-height="315" width="auto" height="auto">
                            <div class="video-container" v-if="propuestas.dialog">
                                <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${propuestas.link_id}`" v-if="propuestas.dialog" allowfullscreen></iframe>
                            </div>
                        </v-dialog>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
export default {

    data: () => ({
        dialog: false,
        dialog2: false,
        dialog3: false,
        on: true,
        cards: [{
                titulo: 'Cubrebocas KN95',
                subtitulo: 'Calidad garantizada',
                image: '/mask95_.jpg',
                bullets: [
                    'Mayor protección, filtración del 95% de agentes peligrosos, bio-compatibilidad'
                ],
                link_id: 'oBQd1cpOBf0',
                dialog: false,
                youtube: 'youtube1'

            },
            {
                titulo: 'Cómo desinfecar el dinero',
                subtitulo: 'Aprenda las buenas prácticas',
                image: '/des.jpg',
                bullets: [
                    'Contamos con sanitizadores especiales para este caso de uso',
                    '',
                    '',
                    ''
                ],
                link_id: 'sGreyqtGnVs',
                dialog: false,
                youtube: 'youtube2'

            },
            {
                titulo: 'Cómo desinfectar tu celular',
                subtitulo: 'Aprenda las buenas prácticas',
                image: '/cel_.jpg',
                bullets: [
                    'Contamos con sanitizadores especiales para este caso de uso',
                    '',
                    '',
                    ''                    
                ],
                link_id: 'WCvjkRM5Dlg',
                dialog: false,
                youtube: 'youtube3'
            }
        ]
    }),
    methods: {
        destroy() {
            this.on = false;
        },
    },
}
</script>

<style scoped>
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

iframe {
    width: 100%;
    max-width: 650px;
    /* Also helpful. Optional. */
}
</style>