<template>
  <div class="app" :class="theme">
    <div class="container">
      <Header :theme="theme" />

      <div class="content">
        <Nuxt />
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      themeCode: '',
    }
  },
  computed: mapState(['theme']),
  methods: {
    ...mapActions(['initTheme']),
  },
  mounted() {
    if (localStorage.theme) {
      this.initTheme({ theme: localStorage.theme })
    } else {
      localStorage.setItem('theme', 'light')
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName
    },
  },
}
</script>