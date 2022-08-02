<template>
    <div id="nav">
      <router-link :class="{ active: $route.name === 'HomeView' }" to="/">Home</router-link> 
      <router-link :class="{ active: $route.name === 'CartView' }" to="/CartView">Cart <sup>{{ totalItemsInCart }}</sup></router-link>
    </div>
  <router-view/>
</template>

<script>
  export default {
    mounted() { // Will fetch data that the component wil then render
      this.$store.commit('updateCartFromLocalStorage', this.product)
    },
    computed: {
      totalItemsInCart() {
        let products;
        let total = 0;

        products = this.$store.getters.cartItems; // Get all the items in the cart

       products.forEach(product => {
        total += product.quantity
       })

        return total
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: candara;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background-color: rgb(245, 245, 245);
}

#nav {
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: white;
  line-height: 30px;

  a {
    font-weight: bold;
    color: darkgray;
    text-decoration: none;
    margin: 0 5px 0 5px;
    font-size: 1.25rem;

    &.active {
      color: #2c3e50
    }
  }
}

.text-center {
  text-align: center;
}


</style>
