<template>
    <div class="row" v-if="products">
        <div v-for="product in products" :key="product.id"
                 class="col-12 mt-3 row" itemscope itemtype="https://schema.org/Product">
                <hr>
                <div class="card col-12 col-lg-4">
                    <v-lazy-image v-if="product.images[0]" class="card-img-top" :alt="product.name"
                    :src="product.images[0].url" 
                    @click="show(product)"
                    :title="product.name"
                    itemprop="image" />
                    <v-lazy-image v-else src="/storage/images/app/no-image.png" 
                        class="card-img-top" alt="no hay foto" />
                    <div class="card-img-overlay" v-if="product.offer">
                        <span class="badge bg-focus white-bold "> Oferta! </span>
                    </div>
                </div>
                <div class="col-12 col-lg-8 d-flex flex-column justify-content-around align-items-between">
                        <div class="h-25 p-2 d-flex flex-column justify-content-between">
                            <h5 itemprop="name" clasS="font-weight-bold">{{product.name | ucFirst}}</h5>
                            <h5 v-if="config && !config.hide_prices">${{product.price}}</h5>

                        </div>
                        <div itemprop="description" class="h-50 d-flex align-items-end ml-2">
                            <p> {{product.description}} </p>
                        </div>
                        <div class="h-25">
                            <div class="col-4 d-flex align-items-base">
                                <router-link itemprop="url" :to="getUrl(product)" class="btn btn-outline-focus">Ver mas</router-link>
                               <shopButton :product="product"></shopButton>
                            </div>
                        </div>
                
                </div>
                <hr>
        </div>   
         <carousel v-if="carouselProduct" ref="modal" :product ="carouselProduct"></carousel>
    </div>
</template>

<script>
import shopButton from '../category/product/shop-button.vue';
 import carousel from '../cotizer/Carousel.vue';
export default {
    components:{carousel,shopButton},
    props:['products'],
    data(){
        return {
            carouselProduct : null
        }
    },
    methods:{
         getUrl(product){
            if(this.categories){
                let cat = this.categories.find(c=>{
                    return c.id == product.category_id;
                })
            let slug =  '/'+cat.slug+'/'+product.slug;
            slug = slug.replace('//','/');
            return slug;
            }
        },
         show(product){
                this.carouselProduct = product;
                this.showCarousel = true;

                let element = this.$refs.modal.$el;
              
                $(element).modal('show');
            }
    },
        computed : {
             categories(){
               return this.$store.getters.getCategories; 
            },  
            config(){
                return this.$store.getters.getConfig;
            }
        },
}
</script>

<style lang="scss" scoped>
    a{
        &:hover{
            text-decoration: none;
            color: inherit;
        }
    }
    img:hover{
        cursor: pointer;
    }
   .card-title,.card-subtitle{
       text-align: center;

   }
   .badge{
       margin-right: 80%;
       margin-top:2%;
       padding: 5px;
   }
</style>

