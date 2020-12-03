<template>
  <div>
    <div class="cart-list">
      <div class="cart__head">

        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">×</a>
        <h3>Your Cart</h3>
      </div>

      <div class="list">
        <div v-for="(product, index) in cart" :key="index" class="cart__item">
          <div class="cart__item--header">
            <p>{{product.title}}</p>
            <button v-on:click="decrementItem(product)">X</button>
          </div>
          <div class="quantity__buttons">
            <button v-on:click="decrementItem(product)">-</button>
            <span>1</span>
            <button v-on:click="incrementItem(product)">+</button>
          </div>
          <p>
            ${{product.price}}.00
          </p>
          <div class="product__img">
            <img :src="product.image_url" :alt="product.name">
          </div>
        </div>
      </div>
      <div class="cart__summary">
        <div class="subtotal">
          <span>Subtotal</span>
          <span>900</span>
        </div>
        <button>Proceed to Checkout</button>
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
    },
    closeNav() {
      this.$emit('closeNav');
    }
  }
}
</script>