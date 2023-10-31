<template>
   <form class="bg-secondary" :data-typeForm="typeForm">
      <div class="d-flex justify-content-center align-items-center">
         <strong style="line-height:34px;">{{titleForm}}</strong>
         <span> ({{titleMetaData}})</span>
      </div>
   </form>
</template>
<script>
import { ref } from 'vue'
export default {
   props:['typeForm'],
   name:'app-form-guide',
   setup(props) {
      const titleForm = ref('Справочник')
      const titleMetaData = ref('*Новый')
      return{
         props, titleForm,
         titleMetaData
      }
   },
}
</script>