<template>
  <div class="home">
    <div
      class="tools border border-top-2 border-warning bg-secondary"
      v-if="documents && documents.length > 0"
    >
      <div class="container">
        <ul id="menu" class="tools d-flex align-items-center m-0 p-0">
          <li
            class="tools-item p-1"
            :style="{ background: selectedDocument === doc.id? '#fff' : '' }"
            v-for="doc in documents"
            :key="doc.id"
            @click="selectDocument(doc)"
          >
            {{ doc.typeDoc }}
          </li>
        </ul>
      </div>
    </div>
    <app-document :docId="selectedDocument" :list="list" :title="title"></app-document>

  </div>
</template>

<script>
import { ref, watch } from "vue";
import { getData } from "@/assets/helper";
// import AppDocument from '@/components/AppDocument.vue';

export default {
  name: "HomeView",
  // components: {AppDocument},
  setup() {
    const documents = ref(getData('documents'))
    const selectedDocument = ref(null)
    const title = ref('')
    const list = ref(null)
    const defaultCols = ref(["№", "Наименование"])

    const selectDocument = (doc) => {
      selectedDocument.value = doc.id;
      title.value = doc.typeDoc
      list.value = [...defaultCols.value, ...doc.titleCols]
      list.value.push('действия')
    }
    watch(selectDocument => console.log(selectedDocument.value))
    return {
      documents,
      selectedDocument,
      selectDocument,
      list,title,
    };
  },
};
</script>
