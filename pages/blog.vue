<template>
    <div>
        <nuxt-child 
        :titulo="titulo" 
        :desc="preview_desc"
        :p_img="post_img"
        :ultima_edicion="ultima_edicion"
        :articulo="articulo"
        />
    </div>
</template>

<script>
export default {
    async asyncData({ app, params }) {
        var doc_id = params.id.split("-");
        const res = await app.$fireStore.collection("articulos").doc(doc_id[doc_id.length - 1]).get();
        var titulo = res.data().titulo;
        var preview_desc = res.data().preview_desc;
        var post_img = res.data().post_img;
        var ultima_edicion = res.data().fecha_de_creacion;
        var articulo = res.data().body;
        return {titulo,preview_desc, post_img, ultima_edicion, articulo };
    }
    
}
</script>

<style lang="scss" scoped>

</style>