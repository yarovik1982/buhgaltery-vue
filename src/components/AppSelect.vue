<template>
  <select class="selectedMetaData" @change="handler" v-model="typeMetaData">
  <option value="">Выбор типа метаданных</option>
  <option value="guide">Справочник</option>
  <option value="document">Документ</option>
  <option value="report">Отчет</option>
</select>
</template>
<script>
import { ref } from "vue";
export default {
  name: "app-select",
  emits:['handler'],
  setup(_, {emit}) {
   const typeMetaData = ref("");
    const handler = () => {
      emit('handler', typeMetaData.value)
    }

    return{
      typeMetaData, handler
    }
  },
};
</script>
