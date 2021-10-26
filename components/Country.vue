<template>
  <div class="col-12 col-md-3">
    <div class="country-card">
      <div
        class="country-flag"
        :style="backgroundImage(country.flags.png)"
      ></div>
      <div class="country-card-body">
        <div class="title">{{ country.name.common}}</div>
        <div class="info">
          <div class="info-item">
            <span>Population :</span> {{ Intl.NumberFormat().format(country.population) }}
          </div>
          <div class="info-item"><span>Region :</span> {{ country.region }}</div>
          <div class="info-item" v-if="country.capital"><span>Capital :</span> {{ country.capital[0] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    backgroundImage(url) {
      return 'background-image : url(' + url + ')'
    },
  },
  props: {
    country: Object,
  },
}
</script>