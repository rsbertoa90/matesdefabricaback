<template>
    <nav v-if="user && user.role_id < 3" class="navbar navbar-expand-lg navbar-dark bg-primary font-weight-bold">
           <router-link class="navbar-brand " to="/admin">
                <img style="width:50px" src="/storage/images/app/logo.png" alt="Bazar Mayorista Maju">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/cotizador">Cotizador</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/admin">Administrar Productos</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/admin/pedidos">Pedidos</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/admin/busquedas">Busquedas</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link class="nav-link text-white" to="/admin/metadata">Metadatas</router-link>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="/logout">Salir</a>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
    computed:{
        user(){
            return this.$store.getters.getUser;
        }
    }
}
</script>


<style lang="scss">
    .text-white{
        color:#fff;
       
    }
    .navbar{
        width:100vw;
        padding: 0 30px;
    }

    @media(max-width: 600px)
    {
        .navbar{
            margin: 0 -4%;
        }
    }
</style>