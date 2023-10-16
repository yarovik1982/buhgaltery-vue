<template>
  <div class="container ">
    <form class="bg-secondary p-3 mt-3" @submit.prevent="saveDocument">
      <div class="mb-1">
        <label for="inpTitle" class="form-label m-0"
          >Тип документа</label
        >
        <input
          type="text"
          class="form-control form-control-sm"
          id="inpTitle"
          v-model="typeDoc"
        />
      </div>
      <div class="mb-1" title="Введите названия столбцов через запятую(по-умолчанию будут созданы столбцы ['порядковый номер', 'наименование'])">
        <label for="inpTitleCols" class="form-label m-0">Названия столбцов</label>
        <input
          type="text"
          class="form-control form-control-sm"
          id="inpTitleCols"
          v-model="titleCols"
        />
      </div>
      <div class="mb-1 form-check">
        <input type="checkbox" class="form-check-input" id="calcSum" v-model="calcSum"/>
        <label class="form-check-label" for="calcSum"
          >Рассчитывать сумму</label
        >
      </div>
      <button type="submit" class="btn-min">Сохранить</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { getData } from '@/assets/helper'
export default {
  name: "app-form-element",
  setup() {
   const typeDoc = ref('')
   const titleCols = ref([])
   const calcSum   = ref(false)

   const saveDocument = () => {
      const documents = getData('documents')
      const obj = {
         id       : documents.length + 1,
         typeDoc: typeDoc.value,
         titleCols: (titleCols.value).split(',').map(item => item.trim()),
         calcSum  : calcSum.value,
      }

      documents.push(obj)
      localStorage.setItem('documents', JSON.stringify(documents))
      typeDoc.value = ''
      titleCols.value = ''
      calcSum.value = false
   }

   return{
      typeDoc, titleCols, calcSum,
      saveDocument,

   }

  },
};
</script>
