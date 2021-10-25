<template>
  <div :class="checkLoading()" class="loader-blowez d-flex justify-content-center align-items-center">
    <div class="loader"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    methods : {
         ...mapGetters(['checkLoading'])
    }
}
</script>