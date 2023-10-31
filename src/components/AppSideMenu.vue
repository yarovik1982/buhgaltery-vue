<template>
   <ul class="side-inner-menu menu col-3">
      <li class="menu-item"
      :class="{'active': item.id === isActive}"
      v-for="item in list"
      :data-title="item.title"
      :key="item.id"
      @click="setAction(item)"
   >{{item.title}}</li>
   </ul>
</template>
<script>
import { ref } from 'vue'
import {appSideMenuList} from "@/assets/helper"
export default {
   name:'app-side-menu',
   setup() {
      const isActive = ref(null)
      const list = appSideMenuList

      const setAction = (item) => {
         isActive.value = item.id
         
      }
      return{
         list,
         isActive,
         setAction
      }
   },
}
</script>