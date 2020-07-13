<template>
  <div class="section-header text-center mb-12">
    <div
      class="text-uppercase caption mb-4 grey--text text--darken-2"
      v-text="header"
    />

    <h2
      class="display-1 font-weight-light"
      v-text="subHeader"
    />

    <v-divider class="mt-5 mb-4 mx-auto" />

    <p
      class="title font-weight-light mx-auto"
      style="max-width: 700px;"
      v-text="text"
    />
  </div>
</template>

<script>
  export default {
    props: {
      header: {
        type: String,
        default: ''
      },
      subHeader: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="sass">
  .section-header
    .v-divider
      border-width: 1px
      max-width: 50px
</style>
