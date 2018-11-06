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
      products: [
        {name: '马云', price: '200'},
        {name: '马化腾', price: '140'},
        {name: '马冬梅', price: '20'},
        {name: '马蓉', price: '10'}
      ]
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
