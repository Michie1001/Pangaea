<template>
  <div>
    <div class="cart-list">
      <div v-for="(product, index) in cart" :key="index">
        <!-- <div class="product__img">
          <img :src="product.image_url" :alt="product.name">
        </div> -->
        <p class="product__name">{{product.title}}</p>
        <p class="product__price">
          <span>From: </span> {{product.price}}
        </p>
        <button v-on:click="decrementItem(product)">-</button>
        <span>0</span>
        <button v-on:click="incrementItem(product)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart"],
  methods: {
    decrementItem(index) {
      this.$emit('decrementItem',index);
    }
  }
}
</script>