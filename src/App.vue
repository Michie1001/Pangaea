<template>
  <div id="app">
    <div class="wrapper">
      <nav>
        <ul>
          <li class="logo">LUMIN</li>
          <li>Shop</li>
          <li>Learn</li>
          <li class="right-wing">Account</li>
          <li class="nav__cart">
            <button v-on:click="navigateTo('cart')">
              View cart
            </button>
            <span class="cart__count">{{cart.length}}</span>
            <button v-on:click="navigateTo('products')">
              x
            </button>
          </li>
        </ul>
        <div>{{list.title}}</div>
        <div class="heading">
          <h1>All Products</h1>
          <h2>A 360&deg; look at Lumin</h2>
        </div>
      </nav>

      <HelloWorld msg="Lumin" v-on:addProductToList="addProductToList" />

      <div v-if="page === 'cart'">
        <Cart :cart="cart" v-on:decrementItem="decrementItem" />
      </div>

      <div v-if="page === 'products'">
        <Products v-on:addItemToCart="addItemToCart" />
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Products from './components/Products.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Products,
    Cart,
  },
  data: ()=>{
    return{
      page: 'products',
      cart: [],
      list: []
    }
  },
  methods: {
    addProductToList(product) {
      this.list.push(product);
      console.log(this.list);
    },
    addItemToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
    decrementItem(product) {
      this.cart.splice(this.cart.indexOf(product), 1);
    },
    navigateTo(page){
      this.page = page;
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
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  margin: 10px 0;
}
a {
  color: #42b983;
}
.wrapper{
  background-color: #e2e6e3;
}
.cart-list{
  display: block;
}
.items{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.item{
  margin: 20px;
  padding: 20px;
}
.product__img{
  width: 310px;
  height: 170px;
  overflow: hidden;
  margin: 0 auto;
  background-color: #ccc;
}
.product__img img{
  width: 100%;
  height: 100%;
  object-fit: contain;
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
}
</style>
