<template>
    <section class="px-3">
        <section-header header="¡No te quedes atrás!" sub-header="Entérate de nuestras promociones" text="Suscríbete para recibir información de nuevos productos, descuentos y ofertas" />
    
        <v-card outlined class="pa-4 mx-auto mb-8" max-width="500">
            <v-form v-if="!suscribed">
                <v-text-field outlined label="Nombre" v-model="name" />
                <v-text-field outlined label="Email" v-model="email"/>
                <v-btn color="#57C3BD" block depressed large tile dark @click="suscribe">
                    Suscribirse
                </v-btn>
            </v-form>
            <h1 class="text-center" v-if="suscribed">
              Se ha suscrito exitosamente!
            </h1>
        </v-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            suscribed: false
        }
    },
    methods: {
        async suscribe() {
            try {
                await this.$fireStore.collection("leads_email").doc().set({
                    name: this.name,
                    email: this.email
                })
                this.suscribed = true
            } catch (e) {}
        }
    }
}
</script>