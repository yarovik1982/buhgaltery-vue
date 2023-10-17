<template>
   <div id="document" v-if="docId">
      <div class="container-fluid mt-1">
        <div class="documentHead">
          <h5 class="title text-center text-secondary m-0 p-0">{{ title }}ный документ</h5>
          <div class="docRow d-flex justify-content-end">
            <button class="btn-min"
              @click="saveDoc"
            >Записать</button>
          </div>
          <div class="docRow d-flex align-items-center">
            <label class="docLabel">Наименование</label>
            <input type="text" class="docInput px-2" :value="title" readonly >
          </div>
          <div class="docRow d-flex align-items-center">
            <label for="docDate" class="docLabel">Дата</label>
            <input type="text" class="docInput px-2" v-model="docDate" id="docDate" >
          </div>
          <div class="docRow d-flex align-items-center">
            <button class="btn-min" @click="addRow">Добавить</button>
          </div>
        </div>
        <div class="bg-secondary p-2">
          <div class="table-responsive">
          <table class="table table-bordered border-warning">
            <thead>
              <tr class="trHead">
                <th align="center" class="thHead text-center" scope="col"
                  
                  v-for="(item) in list"
                  :key="item"
                >{{item}}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tRow" v-for="(tRow, ind) in tRows" :key="ind">
                <td class="td text-center"
                  v-for="(_, index) in list"
                  :key="index"
                >
                <div v-if="list[index].includes('действия')">
                  actions
                </div>
                <span
                  v-if="list[index].includes('№')"
                >{{ind + 1}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
import {ref} from "vue"
import { getData } from '@/assets/helper'
export default {
   name:"app-document",
   props: ['docId','title', 'list'],
   setup(props) {
      const documents = getData()
      const docDate = ref(new Date().toLocaleString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }))
      const tRows = ref([])
      
      const saveDoc = () => {
        const data = {
          title:props.title,
          docDate: docDate.value
        }
        console.log(data);
      }

      const addRow = () => {
        tRows.value.push({})
      }

      return{
         props,documents,
         docDate, saveDoc,
         tRows, addRow
      }
   },
}
</script>