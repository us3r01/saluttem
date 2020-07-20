<template>
    <div>
        <v-main>
            <v-container>
                <v-carousel>
                    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" hide-delimiters hide-delimiter-background>
    
                        <v-row class="fill-height" align="center" justify="center">
                            <div>
                                <h1>Saluttem team!
                                </h1>
                            </div>
                        </v-row>
    
                    </v-carousel-item>
                </v-carousel>
                <div class="text-center mt-8 pt-8">
                    <section-header header="" sub-header="Empresa de Salud" text="" />
                    <p class="text-justify">
                        Somos una empresa comprometida con el bienestar de las personas. Nuestra visión es ser la principal elección de confianza para que las personas tengan el equipo necesario para cuidar de si mismos y de sus seres queridos. Brindamos atención a nuestros
                        clientes las 24 horas del día los 365 días del año a través de nuestros medios digitales.
                    </p>
                    <div class="text-left text-h6 mt-4 pt-4">
                        Productos originales y de alta calidad
                    </div>
                    <div class="text-justify">
                        Nuestro compromiso es brindar la confianza de que todos nuestros productos son buenos, de calidad. Nuestra oferta va desde equipo básico hasta el más complejo dependiendo de las necesidades de nuestros clientes. Tenga la seguridad y la confianza de que
                        estará satisfecho con su compra.
                    </div>
                </div>
            </v-container>
    
            <v-container id="highlighted-testimonial" class="pt-5 px-0 mb-n3" fluid tag="section">
                <v-parallax contain src="/home-parallax.png">
                    <v-overlay absolute class="px-3" opacity=".8">
                        <testimonial dark :testimonial="highlightedTestimonial" />
                    </v-overlay>
                </v-parallax>
            </v-container>
            <v-container>
                <section-header header="" sub-header="Testimonios" text="" />
                <v-row>
                    <v-col v-for="(testimonial, i) in testimonials" :key="i" cols="12" md="6">
                        <testimonial :testimonial="testimonial" />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import Testimonial from './Testimonial'

export default {
    head() {
        return {
            title: 'Acerca de nosotros',
            meta: [
                { vmid: 'description', name: 'description', content: 'Saluttem es una comercializadora de equipo para la salud son sede en Puebla, Puebla. Contamos con precios de menudeo y mayoreo y envíos a toda la república Mexicana' },
                { property: 'og:title', content: "Acerca de nosotros"},
                { property: 'og:description', content: "Saluttem es una comercializadora de equipo para la salud son sede en Puebla, Puebla. Contamos con precios de menudeo y mayoreo y envíos a toda la república Mexicana"},
                { property: 'og:image', content: "https://i.ibb.co/mtwh6F0/2.png"},
                { property: 'og:url', content: "https://www.saluttem.com/acercade"},
                { property: 'og:type', content: "website"},
                { name:'keywords', content: 'empresa de cubrebocas en puebla, saluttem puebla, proveedores de cubrebocas, mayoreo equipo de salud'}
            ]
        }
    },
    components: {
        Testimonial
    },
    data() {
        return {
            items: [{
                src: '/equipo.jpg'
            }],
            highlightedTestimonial: {
                blurb: 'Este año dos mil veinte nos ha enseñado que la unión es lo más importante. Juntos tendremos que superar la contingencia y que mejor que aportando nuestros mejores esfuerzos desde casa. Yo apuesto por la tecnología y por que las personas tengas más acceso a ella para poder seguir trabajando y adquiriendo los sumistros necesarios',
                person: 'Paulette C.',
                title: 'Directora de Ventas'
            },
            testimonials: [{
                    blurb: 'Su respuesta fue bastante rápida, necesitaba 100 cubrebocas urgentemente para el personal del hospital y en menos de dos horas pudimos concretar la venta y yo obtuve el producto. Gracias.',
                    person: 'Nancy Berthau',
                    title: 'Enfermera IMSS'
                },
                {
                    blurb: 'Me siento seguro de poder atender a mis clientes con las medidas necesarias de seguridad, todo mi personal y yo utilizamos careta, lentes y cubrebocas que compramos con Saluttem.',
                    person: 'Andrés Carretero',
                    title: 'Dueño de carnicería en Mercado Zapata'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>