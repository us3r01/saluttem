<template>
  <v-app light>
    <NavBar />
    <DrawerNav/>
    <nuxt />
    <Footer />
    <CoreFab />
  </v-app>
</template>

<script>
import NavBar from '@/components/AppBar'
import DrawerNav from '@/components/DrawerNav'
import Footer from '@/components/Footer'
import CoreFab from '@/components/CoreFab'

export default {
  components: {
    NavBar,
    DrawerNav,
    Footer,
    CoreFab
  },
  data () {
    return {
    }
  }
}
</script>
