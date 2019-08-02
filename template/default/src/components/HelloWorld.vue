<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>我是个组件</p>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data () {
        return {
            a: 1
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
