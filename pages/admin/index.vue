<template>
    <div>
        <v-main>
            <v-container>
                <client-only>
                                    <v-row align="center" justify="center" responsive>
                    <v-col align="center" justify="center" responsive>
                        <v-progress-circular v-if="flag_progress" :rotate="360" :size="100" :width="15" :value="value" dark>
                            {{ value }}
                        </v-progress-circular>
                    </v-col>
                </v-row>
                    <v-row v-if="!flag_progress">
                        <v-col cols="12" sm="6">
                            <v-text-field label="Título" outlined v-model="titulo"></v-text-field>
                            <v-text-field label="url de imagen preview" outlined v-model="img_url"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-textarea outlined name="input-7-4" label="Descripción preview" value="" v-model="preview_desc"></v-textarea>
                        </v-col>
                    </v-row>
                    <mavon-editor v-if="!flag_progress" language="en" v-model="handbook" />
                    <v-row v-if="!flag_progress">
                        <v-col cols="12" sm="6">
                            <v-btn @click="create_post">
                                Postear
                            </v-btn>
                        </v-col>
                    </v-row>
                </client-only>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            handbook: "",
            titulo: "",
            preview_desc: "",
            img_url: "",
            flag_progress: false,
            value: 0,
            interval: {}
        };
    },
    methods: {
        async interval_set(){
                        this.interval = setInterval(() => {
                if (this.value === 100) {
                    return (this.value = 0)
                }
                this.value += 25
            }, 1000)
        },
       async set_route(titulo){
            titulo = titulo.replace(/\s+/g, '-').toLowerCase();
            titulo = titulo.replace(/,/g, "");
            titulo = titulo.replace(/\?/g,'');
            titulo = titulo.replace(/\¿/g,'');
            titulo = titulo.replace(/\(/g,'');
            titulo = titulo.replace(/\)/g,'');
            titulo = titulo.replace(/\s+/g, '-').toLowerCase();
            titulo = titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            return titulo
        },
        async create_post() {
            try {
                this.flag_progress = true;
                await this.interval_set()
                var route = await this.set_route(this.titulo)
                await this.$fireStore.collection("articulos").doc().set({
                    body: this.handbook,
                    fecha_de_creacion: "marzo-2020",
                    post_img: this.img_url,
                    preview_desc: this.preview_desc,
                    titulo: this.titulo,
                    route: `/blog/${route}`
                })

                var res = await this.$fireStore.collection("articulos").where("titulo", "==", this.titulo).get()
                var docId = ''
                res.forEach((doc)=> {
                    docId = doc.id
                })
                this.flag_progress = false;
                this.$router.push(`blog/${route}-${docId}`)
            } catch (e) {
                this.flag_progress = false;
                alert(e); 
            }
        }
    }

};
</script>

<style scoped>
.mavonEditor {
    width: 100%;
    height: 100%;
}
</style>