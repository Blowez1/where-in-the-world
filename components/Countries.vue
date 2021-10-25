<template>
  <div class="row countries">
    <Country
      :country="country"
      v-for="country in countries"
      :key="country.name"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['countries']),
}
</script>