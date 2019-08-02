<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleAddNum">我是num{{num}}</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'home',
    components: {
        HelloWorld
    },
    computed: {
        ...mapGetters('home', ['num'])
    },
    methods: {
        ...mapActions('home', ['addNum']),
        handleAddNum () {
            this.addNum()
        }
    }
}
</script>
