<template>
    <div class="mt-4 row">
        <swiper :options="swiperOption" class="col-12">
            <swiper-slide
                v-for="category in categories" 
                :key="category.id" class="d-flex align-items-stretch">
                
                <div class="card" itemscope itemtype="https://schema.org/Product">
                    <router-link :to="category.slug"  class="d-block w-100 overflow-hidden" itemprop="url">
                        <div class="card-img-top overflow-hidden">
                            <v-lazy-image itemprop="image" class=" onhover" :src="category.image" 
                                                    :alt="category.name" />
                        </div>
                        <div class="card-body"> 
                            <h5 class="card-title" itemprop="name"> {{category.name | ucFirst}} </h5>
                            <p v-if="category.homedescription" class="texto card-text crop-text" itemprop="description"> {{category.homedescription}} </p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
     data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 15,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    computed : {
        categories(){
            return this.$store.getters.getCategories;
        }
    }
}
</script>

<style scoped>
.overflow-hidden{
    overflow: hidden;
}
      .card-img-top{
            overflow:hidden;
        }

            .onhover:hover{
                 transform: scale(1.2);
                transition: all 1s;
            }           
        



    .swiper-container {
    height: auto!important;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    height: 400px;
  }
</style>
