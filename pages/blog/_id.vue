<template>
    <div>
        <v-main>
            <v-container>
                <v-row :class="!breakpoint ? '' : 'px-5 mx-5'">
                    <v-col :class="!breakpoint ? '' : 'px-5 mx-5'">
                <v-card flat>
<!--                     <v-card-title :style="!breakpoint ? '' : 'font-size: 38.4px'">
                        {{this.titulo}}
                    </v-card-title> -->
                    <h1>
                        {{this.titulo}}
                    </h1>
                    <v-card-subtitle class="font-weight-bold">
                        Última edición: {{this.ultima_edicion}}
                    </v-card-subtitle>
                    <v-divider></v-divider>
                         <div  :class="!breakpoint ? '' : 'pa-5 mx-5'" v-html="$md.render(this.articulo)"></div>
                </v-card>
                <v-divider></v-divider>
                <Disqus shortname="saluttem" :identifier="this.titulo" :url="`http://saluttem.com/${this.$route.path}`"></Disqus>
                 </v-col>
                 </v-row>
            </v-container>
           
        </v-main>
    </div>
</template>

<script>

export default {
props: ['titulo', 'desc', 'p_img', 'ultima_edicion', 'articulo'],
    head() {
        return {       
            titleTemplate: '%s - ' + 'Saluttem',
            title: this.titulo,
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', content: this.desc },
                { property: 'og:title', content: this.titulo },
                { property: 'og:description', content: this.desc},
                { property: 'og:image', content: this.p_img},
                { property: 'og:url', content: `https://www.saluttem.com${this.$route.path}` },
                { property: 'og:type', content: 'website' }

               /*TODO:Add Keywords  { name: 'keywords', content: "this.keys" } */
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
        }
    },
    data() {
        return {
           isHydrated: false,
        }
    },
    computed: {
            breakpoint() {
      return this.isHydrated ? this.$vuetify.breakpoint.mdAndUp : { mdAndUp: '800', smAndDown: '540' }; // Any constant deault value would do here
    },
    },
      mounted() {
    this.isHydrated = true;
  },
}
</script>

<style>
img {
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
body{
    line-height: 1.6;
}
 body {
        font-size: 16px;
    }
    @media (max-width: 1024) {
        body {
            font-size: 18px;
        }
    }
    @media (min-width: 768px) {
        body {
            font-size: 20px;
        }
    }
    @media (min-width: 420px) {
        body {
            font-size: 19.2px;
        }
    }

</style>