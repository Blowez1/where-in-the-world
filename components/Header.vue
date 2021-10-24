<template>
    <header class="d-flex justify-content-between align-items-center">
        <h1>Theme</h1>
        <h4 :class="theme" @click="changeTheme({ theme })" class="btn changeBtn">Değiştir</h4>
    </header>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: {
        theme : String
    },
    methods : {
        ...mapActions(['changeTheme'])
    }
}
</script>