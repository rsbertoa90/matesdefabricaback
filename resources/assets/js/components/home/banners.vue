<template>
    <div >
        <div class="row ml-1 ml-lg-0">
            <div class="col-12 col-lg-8 p-1">
                <router-link to="/cotizador" class="w-100 d-block">
                   <v-gif :images="gifImages" alt="cotizador" :speed="500" />
                </router-link>
            </div>
            <div class="col-12 col-lg-4 row p-1 pl-lg-4">
               <div class="col-12 p-1">
                     <div class="small-banner">
                        <router-link to="/regalos-empresariales" class="w-100 d-block">
                            <v-lazy-image src="/storage/images/app/regalos-empresariales.png" alt="regalos-empresariales" />
                        </router-link>
                     </div>
                </div>
                <div class="col-12 p-1">
                      <div class="small-banner ">
                        <router-link to="/sucursales" class="w-100 d-block">
                            <v-lazy-image src="/storage/images/app/sucursales.png" alt="sucursales" />
                        </router-link>
                    </div>
                </div>
                <div class="col-12 p-1">
                     
                    <div class="small-banner ">
                        <router-link to="/franquicia" class="w-100 d-block">
                            <v-lazy-image src="/storage/images/app/franquicia.png" alt="franquicia" />
                        </router-link>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
import vGif from './gif.vue';
export default {
    components: {vGif},
    data(){
        return{
            gifImages : [
                '/storage/images/app/cotizador1.png',
                '/storage/images/app/cotizador2.png'
            ]
        }
    }
}
</script>

<style scoped>
    .row, a{
        display: flex;
        justify-content: center;
        align-items: center;
    }

  
        .small-banner
        {
            width: 100%;
            /* padding : 5px 15px ; */
        }

          .custom-padded{
            padding:0px 2px 0px 17px;
        }
    @media(max-width: 990px){
        .small-banner{
            padding: 0;
            margin:15px 0px;
        }

         .custom-padded{
            padding:0px ;
        }


    }
</style>