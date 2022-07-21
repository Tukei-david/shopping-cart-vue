<template>
  <div class="home">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
    />

    <div class="product-cards-container">
      <ProductSummaryCard 
        v-for="product in items"
        :key="product.id"
        :product="product" 
        v-on:view-product="viewProduct($event)"
      />
    </div>


  </div>
</template>

<script>

import items from '../data/items.js'
import ProductSummaryCard from '../components/ProductSummaryCard.vue'
import ProductDescriptionDrawer from '../components/ProductDescriptionDrawer.vue'

export default {
  name: 'HomeView',
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer
  },
  data () {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: false,
      }
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      console.log(this.product);
    }
  }
}
</script>

<style lang="scss">
  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
