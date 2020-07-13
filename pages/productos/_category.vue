<template>
    <div>
        <nuxt-child 
            :nombre="nombre"
            :costo="costo"
            :costo_mayoreo="costo_mayoreo"
            :desc="desc"
            :images="images"
        />
    </div>
</template>

<script>

export default {
    async asyncData({ app, params }) {
        var doc_id = params.producto.split("-");
        const res = await app.$fireStore.collection("productos").doc(doc_id[doc_id.length - 1]).get();
        var nombre = res.data().nombre;
        var costo = res.data().costo;
        var costo_mayoreo = res.data().costo_mayoreo;
        var desc = res.data().desc;
        var images = res.data().images ;
        return {nombre,costo, costo_mayoreo, desc, images };
    }       ,
        created(){
        console.log(this.$router)
    }
}
</script>

<style lang="scss" scoped>

</style>