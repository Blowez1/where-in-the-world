<template>
  <div class="app" :class="checkTheme()">
    <Header />
    <main>
      <div class="container">
        <div class="content">
          <Nuxt />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['initTheme']),
    ...mapGetters(['checkTheme'])
  },
  mounted() {
    if (localStorage.theme) {
      this.initTheme({ theme: localStorage.theme })
    } else {
      localStorage.setItem('theme', 'light')
    }
  },
}
</script>