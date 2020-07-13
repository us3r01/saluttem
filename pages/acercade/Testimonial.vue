<template>
    <div class="v-testimonial">
        <v-row class="mb-4">
            <v-col class="hidden-sm-and-down shrink">
                <v-icon color="#5FC7C2" x-large>
                    mdi-format-quote-open
                </v-icon>
            </v-col>
            <v-col class="v-testimonial__blurb body-1" cols="12" md="10">
                <div>
                    {{testimonial.blurb}}
                </div>
            </v-col>
        </v-row>
    
        <footer class="text-right">
            <v-divider class="white ml-auto mb-3 v-testimonial__divider" />
            <h4 class="headline font-weight-medium">
                {{testimonial.person}}
            </h4>
            <div class="grey--text headline font-weight-light">
                {{testimonial.title}}
            </div>
        </footer>
    </div>
</template>

<script>
export default {

    props: {
        testimonial: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="sass">
  .v-testimonial
    margin: 0 auto
    max-width: 450px

    .v-testimonial__divider
      max-width: 120px
      border-width: 2px

    .v-testimonial__blurb
      line-height: 2

    &.theme--dark
      color: white
</style>
