<template>
  <section>
    <Loader />
    <div class="d-flex">
        <div class="search-input">
      <span class="d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="26"
          viewBox="0 0 29.61 28.776"
        >
          <path
            id="search"
            d="M30.667,28.224l-1.885,1.885-5.847-5.847,1.836-1.935,5.9,5.9ZM12.891,1.333a11.818,11.818,0,0,1,9.63,18.69L20.294,22.37a11.824,11.824,0,1,1-7.4-21.037Zm0,21a9.167,9.167,0,1,0-9.167-9.167A9.177,9.177,0,0,0,12.891,22.333Z"
            transform="translate(-1.057 -1.333)"
          />
        </svg>
        <input type="text" placeholder="Search for a country..." />
      </span>
    </div>
    </div>
    <Countries />
  </section>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getAllCountries')
  },
}
</script>
