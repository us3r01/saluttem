<template>
    <div>
        <section>
            <v-divider class="mt-5 mb-4 "  />
            <v-row>
                <v-col>
            <h1 class="text-center">
                Artículos
            </h1>
            </v-col>
            </v-row>
            <v-divider class="mt-5 mb-4 mx-auto"/>
            <v-container>
                <v-row v-for="item in posts" :key="item.titulo">
                    <v-col  sm="6">
                        <v-card>
                            <v-img :src="item.post_img" :atl="item.titulo" height="200px">
    
                            </v-img>
                            <v-card-title class="text-justify">
                                {{item.titulo}}
                            </v-card-title>
                            <v-card-subtitle class="text-left">
                                {{item.fecha_de_creacion}}
                            </v-card-subtitle>
                            <v-card-text class="text-justify">
                                {{item.preview_desc}}
                            </v-card-text>
                            <v-card-actions>
                                <v-btn :to="{path: '/blog/' + item.ruta, params: {doc_id: item.doc_id}}" nuxt dark color="#57C3BD">
                                    Leer
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    methods: {
        leer(doc_id, title) {
            /*             title = title.replace(/\s+/g, '-').toLowerCase();
                        title = purpose.replace(/,/g, "");
                        this.$router.push({ name: `blog/${title}`, params: { doc_id: doc_id } }) */
        }
    },
    async mounted() {
        const res = await this.$fireStore.collection("articulos").orderBy("fecha_de_creacion").limit(4).get();
        res.forEach((doc) => {
            var objeto_post = doc.data();
            objeto_post.doc_id = doc.id;
            objeto_post.ruta = objeto_post.titulo.replace(/\s+/g, '-').toLowerCase();
            objeto_post.ruta = objeto_post.titulo.replace(/,/g, "");
            objeto_post.ruta = objeto_post.ruta.replace(/\?/g,'');
            objeto_post.ruta = objeto_post.ruta.replace(/\¿/g,'');
            objeto_post.ruta = objeto_post.ruta.replace(/\(/g,'');
            objeto_post.ruta = objeto_post.ruta.replace(/\)/g,'');
            objeto_post.ruta = objeto_post.ruta.replace(/\s+/g, '-').toLowerCase();
            objeto_post.ruta  = objeto_post.ruta.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            objeto_post.ruta = objeto_post.ruta + "-" + objeto_post.doc_id;
            this.posts.push(objeto_post);
        });

    }
}
</script>

<style lang="scss" scoped>

</style>