<template>
  <div id="app">
    <div class="wrapper">
      <div id="overlay"></div>
      <nav>
        <ul>
          <li class="logo">LUMIN</li>
          <li>Shop</li>
          <li>Learn</li>
          <li class="right-wing">Account</li>
          <li class="nav__cart">
            <button v-on:click="openNav()">
              View Cart
              <span class="cart__count">( {{cart.length}} )</span>
            </button>
          </li>
        </ul>
        <div class="heading">
          <h1>All Products</h1>
          <h2>A 360&deg; look at Lumin</h2>
        </div>
      </nav>
      <Products v-on:addItemToCart="addItemToCart" />

      <div id="mySidebar" class="sidebar">
        <Cart :cart="cart" v-on:decrementItem="decrementItem" v-on:closeNav="closeNav" />
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
    }
  },
  methods: {
    addItemToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
    decrementItem(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
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

<style>

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
  margin: 0;
  padding: 0;
}
nav{
  background-color: #fff;
}
nav ul{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
nav ul li {
  padding: 20px;
  margin: 0;
}
nav ul li:hover {
  cursor: pointer;
  color: #555;
}
nav ul .logo{
  letter-spacing: 28px;
  font-size: 32px;
  transition: .2s all ease-in-out;
}
nav ul .logo:hover{
  color: green;
  font-size: 34px;
}
nav ul .right-wing{
  margin-left: auto;
}
.nav ul .nav__cart{
 background-color: green;
 color: #fff;
 font-weight: bold;
}
nav .heading{
  padding: 20px 100px 50px;
  text-align: left;
}
nav .heading h1{
  font-weight: 400;
  font-size: 32px;
}
nav .heading h2{
  font-weight: 400;
  font-size: 16px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  margin: 10px 0;
}
a {
  text-decoration: none;
}
.wrapper{
  background-color: #e2e6e3;
}
#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
}
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  background-color: #f1f3f0;
  opacity: 0;
  overflow-x: hidden;
  transition: 0.5s all ease-in-out;
}

.sidebar a {
  padding: 12px 8px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: green;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 36px;
  margin-right: 50px;
}

.cart-list{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;

  height: 100vh;
}
.cart-list .cart__head{
  text-align: center;
  position: relative;
  width: 100%;
}
.cart__head h3{
  color: #555;
  font-weight: 400;
  font-size: 16px;
  margin: 20px 0;
}
.cart-list .list{
  max-height: 60vh;
  overflow-y: auto;
  width: 100%;
}
.cart-list .cart__item{
  background-color: #fff;
  padding: 10px 30px 20px;
  margin-bottom: 20px;
  display: grid;
  align-items: end;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  font-size: 14px;
  color: #4b5548;
  font-weight: 500;
}
.cart-list .cart__item .cart__item--header{
  grid-column-start: 1;
  grid-column-end: -1;

  display: flex;
  justify-content: space-between;
}
.cart-list .cart__item .cart__item--header button{
  background-color: #fff;
  padding: 0;
  color: #4b5548;
}
.cart-list .cart__item .quantity__buttons{
  border: 1px solid #aaa;
  width: 80px;
  margin: 0 auto;
}
.quantity__buttons span{
  margin: 0 10px;
}
.quantity__buttons button{
  background-color: #fff;
  color: #4b5548;
  padding: 10px 8px;
}
.cart-list .product__img{
  width: 40px;
  height: 40px;
}
.cart__summary{
  margin-top: auto;
  border-top: 1px solid;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
}
.subtotal{
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart__summary button{
  width: 100%;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
}
.items{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.item{
  color: #111;
  margin: 20px;
  margin-bottom: 50px;
  padding: 20px;
  width: 250px;
  display: inline-block;
}
.product__img{
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin: 0 auto;
}
.product__img img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.product__name{
  margin-top: 60px;
}
.product__price{
  margin: 8px 0;
  font-weight: bold;
}
.product__price span{
  font-weight: 400;
}
button{
  background-color: #4b5548;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  font-weight: bold;
  outline: none;
  transition: .2s ease-in-out;
}
button:hover{
  background-color: #283224;
}
</style>
