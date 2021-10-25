<template>
  <header class="header">
    <div class="container d-flex justify-content-between align-items-center">
      <span class="logo">Where in The World?</span>
      <div @click="changeTheme()" class="themeChanger d-flex align-items-center">
        <svg
          id="moon-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="19.21"
          height="20"
          viewBox="0 0 19.21 20"
          class="mr-2"
        >
          <path
            id="Path_11"
            data-name="Path 11"
            d="M24.064,14A10.026,10.026,0,1,1,13.88,0,8.666,8.666,0,1,0,24.064,14Z"
            transform="translate(-4.854)"
          />
        </svg>

        <span >Dark Mode</span>
      </div>
    </div>
  </header>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    theme: String,
  },
  methods: {
    ...mapActions(['changeTheme']),
  },
}
</script>