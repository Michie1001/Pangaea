<template>
  <div>
    <div class="items">
      <div v-for="(product, index) in products" :key="index" class="item">
        <!-- <div class="product__img">
          <img :src="product.image_url" :alt="product.name">
        </div> -->
        <p class="product__name">{{product.title}}</p>
        <p class="product__price">
          <span>From: </span> {{product.price}}
        </p>
        <button v-on:click="addItemToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      products:[
        {
          "id": 3,
          "title": "Premium-Grade Moisturizing Balm",
          "price": 29
        },
        {
          "id": 2,
          "title": "No-Nonsense Charcoal Cleanser",
          "price": 16
        },
        {
          "id": 42,
          "title": "Clarifying Body Wash",
          "price": 10
        }
      ]
    }
  },
  methods: {
    addItemToCart(product){
      this.$emit('addItemToCart', product);
    }
  }
}
</script>