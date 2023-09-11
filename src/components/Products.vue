<script>
import { mapState } from 'vuex';

export default {
  name: 'Products',
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['products'])
  }
}

</script>

<template>
  <div class="products">
    <div class="block-title">
      <h2 class='categories-title'>Save on our most selled items.</h2>
      <h5 class='categories-subtitle'>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</h5>
    </div>
    <div class="products-cards-wrapper ">
      <swiper-container class='my-swiper' :slides-per-view="3" loop="true" loopAdditionalSlides="2" navigation="true">
        <swiper-slide v-for="product in products" :key="product.id">
          <div class="product-card d-flex d-flex flex-column align-stretch pl-4 pr-4">
            <div class="product-img d-flex justify-center">
              <img :src="require(`@/assets/svg/${product.img}`)" :alt="product.name">
            </div>
            <div class="product-name pb-4">
              <h4>{{ product.name }}</h4>
            </div>
            <div class="product-description pb-6">
              {{ product.description }}
            </div>
            <v-spacer></v-spacer>
            <div class="product-price">
              $<span class='price'>{{ product.price }}</span>USD
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.my-swiper::part(button-prev),
.my-swiper::part(button-next) {
  color: #08090D;
  width: 18px;
  height: 28px;
}

.product-card {
  height: 400px;
}

.product-img {
  padding: 28px;

  img {
    max-width: 250px;
    width: 100%;
    height: auto;
  }
}

.product-description {
  color: #4B4B4B;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}

.product-price {
  text-transform: uppercase;
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;

  .price {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>