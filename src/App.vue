<template>
  <div id="app">
    <div class="wrapper">
      <div id="overlay" v-on:click="closeNav()"></div>
      <nav>
        <ul>
          <li class="logo">LUMIN</li>
          <li class="hide">Shop</li>
          <li class="hide">Learn</li>
          <li class="right-wing hide">Account</li>
          <li class="nav__cart">
            <button v-on:click="openNav()">
              View Cart
              <span class="cart__count">( {{cartQuantity}} )</span>
            </button>
          </li>
        </ul>
        <div class="heading">
          <h1>All Products</h1>
          <h2>A 360&deg; look at Lumin</h2>
        </div>
      </nav>

      <Products v-on:addItemToCart="addItemToCart" v-on:openNav="openNav"/>

      <div id="mySidebar" class="sidebar">
        <Cart :cart="cart" v-on:deleteItem="deleteItem" v-on:closeNav="closeNav" :sum="sum" :itemQuantity="itemQuantity" :productQuantity="productQuantity" />
      </div>

    </div>
  </div>
</template>

<script>
import Products from './components/Products.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    Products,
    Cart,
  },
  data: ()=>{
    return{
      cart: [],
      sum: 0,
      cartQuantity: 0,
      productQuantity: 1,
    }
  },
  methods: {
    addItemToCart(product) {
      this.cart.indexOf(product) === -1 ? this.cart.push(product) : this.productQuantity += 1;
      // this.cart.push(product);
      this.cartQuantity += 1;

      this.sum += product.price;
    },
    deleteItem(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
      this.sum -= product.price;
    },
    openNav() {
      document.getElementById("mySidebar").style.width = "450px";
      document.getElementById("mySidebar").style.opacity = "1";
      document.getElementById("overlay").style.display = "block";
    },

    closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("mySidebar").style.opacity = "0";
      document.getElementById("overlay").style.display = "none";
    }
  }
}

</script>

<style>@import './assets/main.css';</style>