<script>

export default {
  name: 'ProductCard',
}
</script>

<template>
  <v-row class='d-flex align-stretch justify-space-between' no-gutters>
    <template v-for='product in products'>
      <v-col cols='3' class='' :key='product.id'>
        <div class="product-card d-flex flex-column  pl-4 pr-4">
          <div class="product-img d-flex justify-center">
            <img :src="require(`@/assets/svg/${product.img}`)" :alt="product.name">
          </div>
          <div class="product-name pb-4">
            <h4>{{ product.name }}</h4>
          </div>
          <div class="product-description pb-6">
            {{ product.description }}
          </div>
          <div class="flex-grow-1"></div>
          <div class="product-price">
            $<span class='price'>{{ product.price }}</span>USD
          </div>
        </div>
      </v-col>
    </template>
  </v-row>
</template>

<style lang="scss" scoped>

</style>


