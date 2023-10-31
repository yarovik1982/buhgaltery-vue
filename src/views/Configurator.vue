<template>
  <div class="configurator" style="height:calc(100vh - 122px);">
    <div class="container-fluid" style="height:calc(100vh - 122px);">
      <div class="content py-2 d-flex" style="height:calc(100vh - 122px);">
        <div class="sidebar" :class="{'show': isShow == true}">
          <button class="btn btn-secondary btn-sm" id="hideSidebar"
            @click=setVisible
          >
            <i class="bi bi-eye" v-if="isShow == true"></i>
            <i class="bi bi-eye-slash" v-else></i>
          </button>
          <app-select @handler="setTypeMetadata"></app-select>
        </div>
        <div class="side-content px-5">
          <div class="side-inner bg-secondary row">
            <app-side-menu></app-side-menu>
            <!-- <ul class="side-inner-menu menu col-3">
              <li class="menu-item">category-1</li>
              <li class="menu-item">category-2</li>
              <li class="menu-item">category-3</li>
              <li class="menu-item">category-4</li>
              <li class="menu-item">category-5</li>
              <li class="menu-item">category-6</li>
              <li class="menu-item">category-7</li>
            </ul> -->
            <div class="col-9">
              <app-form-documents v-if="typeForm === 'document'" :typeForm="typeForm"></app-form-documents>
              <app-form-report v-if="typeForm === 'report'" :typeForm="typeForm"></app-form-report>
              <app-form-guide v-if="typeForm === 'guide'" :typeForm="typeForm"></app-form-guide>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import AppSelect from '@/components/AppSelect.vue'
import AppFormGuide from '@/components/AppFormGuide.vue'
import AppFormReport from '@/components/AppFormReport.vue'
import AppFormDocuments from '@/components/AppFormDocuments.vue'
import { ref } from 'vue'
import AppSideMenu from '@/components/AppSideMenu.vue'
export default {
  name:'configurator',
  components:{AppFormGuide, AppSelect, AppFormReport, AppFormDocuments, AppSideMenu},
  setup() {
    const typeForm = ref(null)
    const isShow = ref(true)

    const setVisible = () => {
      isShow.value = !isShow.value
    }
    const setTypeMetadata = (typeMetaData) => {
      typeForm.value = typeMetaData
    }

    return{
      typeForm, setTypeMetadata,
      isShow, setVisible
    }
  },
}
</script>

