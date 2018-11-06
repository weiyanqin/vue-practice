<template>
  <div id="app">
    <ProductListOne v-bind:products="products"/>
    <ProductListTwo v-bind:products="products"/>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne"
import ProductListTwo from "./components/ProductListTwo"

export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: { ProductListOne,ProductListTwo }
}
</script>

<style>
 body{
   font-family: Ubuntu;
   color: #555;
 } 
</style>
