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
            <button v-on:click="deleteItem(product)">X</button>
          </div>
          <div class="quantity__buttons">
            <button v-on:click="decrementItem(index)">-</button>
            <span>{{productQuantity}}</span>
            <button v-on:click="incrementItem(index)">+</button>
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
          <span>${{sum}}</span>
        </div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ["cart", "sum", "productQuantity"],
  methods: {
    deleteItem(index) {
      this.$emit('deleteItem',index);
    },
    closeNav() {
      this.$emit('closeNav');
    }
  }
}
</script>