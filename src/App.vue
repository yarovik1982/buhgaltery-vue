<template>
  <div class="wrapper d-flex flex-column" style="min-height:100vh;">
    <app-header></app-header>
    <main class="main bg-warning bg-opacity-50" style="flex:1 auto;">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name:'app',
  components:{AppFooter, AppHeader},
  setup() {
    
  },
}
</script>

<style>


nav a.router-link-exact-active {
  color: rgb(255,193,7);
}
</style>
