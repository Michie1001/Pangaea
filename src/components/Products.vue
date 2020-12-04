<template>
  <div>
    <div class="product--grid">
      <div v-for="product in products" :key="product.id" class="item">

        <div class="product__img">
          <img :src="product.image_url" :alt="product.name">
        </div>
        <p class="product__name">{{product.title}}</p>
        <p class="product__price">
          <span>From: </span> ${{product.price}}
        </p>
        <button v-on:click="addItemToCart(product); openNav()">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: 'Products',
  apollo: {
    products: gql`
      query {
        products{
          id
          __typename
          title
          image_url
          price (currency: USD)
        }
      }
    `
  },
  methods: {
    addItemToCart(product){
      this.$emit('addItemToCart', product);
    },
    openNav() {
      this.$emit('openNav');
    }
  }
}
</script>
