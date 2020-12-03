<template>
  <div class="hello">
   

    <div v-for="product in products" :key="product.id" class="item">
      <div v-bind:list="{title: product.title, price: product.price}"></div>
      <div v-if="list != ''">
        <button v-on:click="addProductToList(product)">Add to list</button>
        <p>{{list}}</p>
      </div>

      <div class="product__img">
        <img :src="product.image_url" :alt="product.name">
      </div>
      <p class="product__name">{{product.title}}</p>
      <p class="product__price">
        <span>From: </span> {{product.price}}
      </p>
      <button>Add to Cart</button>
    </div>

    <!-- <ApolloQuery :query="require('..listProducts.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="data">
          <div v-for="product in data.products" :key="product.id">
           {{product.title}}
          </div>
        </div>
      </template>
    </ApolloQuery> -->
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: 'HelloWorld',
  props: ["list"],
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
    addProductToList(product){
      this.$emit('addProductToList', product);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
a {
  color: #42b983;
}
.item{
  color: #111;
  margin: 20px;
  border: 1px solid #777;
  padding: 20px;
  display: inline-block;
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
