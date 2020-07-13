<template>
  <v-fab-transition>
    <v-btn
      v-show="isActive"
      v-scroll="scroll"
      bottom
      color="#57C3BD"
      fab
      fixed
      right
      small
      dark
      :style="{
        marginBottom: '50px'
      }"
      @click="$vuetify.goTo(0)"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
  export default {
    data: () => ({
      isActive: false
    }),

    methods: {
      scroll (val) {
        this.isActive = window.pageYOffset > 50
      }
    }
  }
</script>
