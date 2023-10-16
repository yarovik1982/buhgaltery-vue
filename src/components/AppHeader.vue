<template>
   <section id="header">
      <div class="header bg-secondary py-2">
         <div class="container-fluid">
            <div class="d-flex justify-content-center">
               <router-link class="router-link px-1" to="/">Приложение</router-link> | 
               <router-link class="router-link px-1" to="/configurator">Конфигуратор</router-link>
            </div>
         </div>
      </div>
      
   </section>
</template>
<script>
export default {
   name:"app-header",
   setup() {
      
   },
}
</script>
<style scoped>
a{
   text-decoration: none;
   color:black;
}
a:hover{
   color: rgb(255,193,7);
}
 a.router-link-exact-active {
  color: rgb(255,193,7);
}
</style>