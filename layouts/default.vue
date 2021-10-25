<template>
  <div class="app" :class="checkTheme(theme)">
    <Header />
    <main>
      <div class="container" :class="checkTheme(theme)">
        <div class="content">
          <Nuxt />
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState(['theme']),
  methods: {
    ...mapActions(['initTheme']),
    checkTheme(theme) {
      if (theme == 'dark') {
        return 'dark'
      }
    },
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