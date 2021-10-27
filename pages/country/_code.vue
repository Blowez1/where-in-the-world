<template>
  <section>
    <Loader />
    <nuxt-link to="/" class="d-inline-block back-btn">
      <span class="d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="28"
          viewBox="0 0 32 28"
          class="me-2"
        >
          <path
            id="redo"
            d="M32,18a15.961,15.961,0,0,1-5.417,12l-2.646-3A12,12,0,1,0,7.515,9.515L12,14H0V2L4.687,6.687A16,16,0,0,1,32,18Z"
            transform="translate(0 -2)"
          />
        </svg>
        <span>Back</span>
      </span>
    </nuxt-link>

    <div class="row country-single-page align-items-center">
      <div class="col-12 col-md-6">
        <img :src="country.flag" />
      </div>
      <div class="col-12 col-md-6">
        <h1>{{ country.name }}</h1>

        <div class="row mt-4">
          <div class="col-6">
            <div class="spec-item">
              <span>Native Name: </span>{{ country.nativeName }}
            </div>
            <div class="spec-item">
              <span>Population: </span
              >{{ Intl.NumberFormat().format(country.population) }}
            </div>
            <div class="spec-item">
              <span>Region: </span>{{ country.region }}
            </div>
            <div class="spec-item" v-if="country.subregion">
              <span>Sub Region: </span> {{ country.subregion }}
            </div>
            <div class="spec-item" v-if="country.capital">
              <span>Capital: </span> {{ country.capital }}
            </div>
          </div>
          <div class="col-6">
            <div class="spec-item" v-if="country.topLevelDomain">
              <span>Top Level Domain: </span>{{ country.topLevelDomain[0] }}
            </div>
            <div class="spec-item" v-if="country.currencies">
              <span>Currencies: </span>{{ country.currencies[0].name }}
            </div>
            <div class="spec-item">
              <span>Languages: </span>
              <div
                class="d-inline language-item"
                v-for="language in country.languages"
                :key="language.code"
              >
                {{ language.name }}
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4" v-if="country.borders">
          <span class="me-1">Border Countries :</span>
          <span 
            class="border-item"
            v-for="border in country.borders"
            :key="border"
            >{{ border }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['country']),
  mounted() {
    this.$store.dispatch('getCountryByCode', { code: this.$route.params.code })
  },
}
</script>