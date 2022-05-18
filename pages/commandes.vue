<script setup>
 import Produit from '@/components/Produit.vue';
        const produits = [{
            name: 'pizza', price: 2.00
        },{
            name: 'choux', price: 3.00
        }];

        const commandes = await useFetch('/api/commandes');

  // Define params wherever, through `defineProps()`, `useRoute()`, etc.
 // const { data: post, refresh } = await useAsyncData('post', () => $fetch(`https://api.nuxtjs.dev/posts/${params.id}`) )
  // Or instead - useFetch is a convenience wrapper around useAsyncData when you're just performing a simple fetch
 // const { data: post, refresh } = await useFetch(`https://api.nuxtjs.dev/posts/${paramsÌ.id}`)


</script>



<template>
<div>
<!--  <Navbar/> -->
    <div class="container">
        <h1 class="display-1">
           test
           <Test/>
        </h1>
     <ul id="example-1">
  <li v-for="produit in produits" :key="produit.name">
    {{ produit.name }}   {{produit.price}}
  </li>
</ul>
         <Produit  v-for="produit in produits"
  v-bind:price="produit.price"
   v-bind:name="produit.name"
  v-bind:key="produit.name"/>
    </div>

>>>> {{commandes}}     >>>>
</div>
</template>



<style scopted>

</style>