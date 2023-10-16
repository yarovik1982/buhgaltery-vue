<template>
   <div id="document" v-if="docId">
      <div class="container-fluid">
        <div class="documentHead">
          <h5 class="text-center"
            
          >{{ title }}</h5>
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
      const isactive = ref(null)
      const documents = getData()
      

      return{
         props,documents
      }
   },
}
</script>