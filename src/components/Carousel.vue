<script>
import Banner from '@/components/Banner.vue'

export default {
  name: 'Carousel',
  components: {
    Banner,
  },
  data() {
    return {
      slides: [
        {
          component: "Banner",
        },
        {
          component: "Banner",
        },
        {
          component: "Banner",
        },

      ],

    }
  },
}
</script>

<template>
  <div class="carousel-wrapper">
    <!-- <v-col cols='12'>
            <VueSlickCarousel width='100%' v-bind="settings" @init="onInitCarousel">
                <div v-for='(slide, i) in slides' :key='i' :is='slide.component'>
                </div>
                <template #prevArrow="arrowOption">
                    <div class="custom-arrow arrow-prew">
                        <img src="../assets/icon/arrow_left.svg" alt="">
                    </div>
                </template>
                <template #nextArrow="arrowOption">
                    <div class="custom-arrow arrow-next">
                        <img src="../assets/icon/arrow_right.svg" alt="">
                    </div>
                </template>
            </VueSlickCarousel>
        </v-col> -->
    <swiper-container class='my-swiper' effect='coverflow' :space-between='10' :autoplay='true' autoplay-delay="3000"
      loop="true" navigation="true" pagination="true">
      <swiper-slide v-for='(slide, i) in slides' :key='i'>
        <component :is='slide.component' />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang='scss' scoped>
.carousel-wrapper {
  position: relative;
}

.my-swiper::part(button-prev),
.my-swiper::part(button-next) {
  color: #08090D;
  width: 18px;
  height: 28px;
}

.my-swiper::part(pagination) {
  padding-bottom: 16px;
}

.my-swiper::part(bullet),.my-swiper::part(bullet-active) {
  width: 194px;
  height: 2px;
  background-color: #08090D;
  opacity: 1;
  margin: 0 20px;
  border-radius: 0;
   @media (max-width: 1200px) {
   width: 150px;
  }
   @media (max-width: 960px) {
   width: 100px;
   margin: 0 40px;
  }
   @media (max-width: 600px) {
    margin: 0 20px;
   width: 60px;
  }
}

.my-swiper::part(bullet-active) {
  background-color: #707070;;
}


</style>