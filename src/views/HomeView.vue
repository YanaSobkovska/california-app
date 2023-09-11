<script>
import Banner from '@/components/Banner.vue';
import Carousel from '@/components/Carousel.vue';
import Categories from '@/components/Categories.vue'
import Products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Carousel,
    Categories,
    Products
  }
}
</script>

<template>
  <div class="container">
    <Carousel />
    <Categories />
    <Products/>
  </div>
</template>
