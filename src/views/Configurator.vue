<template>
  <div class="configurator" style="height: calc(100vh - 122px)">
    <div class="container-fluid" style="height: calc(100vh - 122px)">
      <div class="content py-2 d-flex" style="height: calc(100vh - 122px)">
        <div class="sidebar" :class="{ show: isShow == true }">
          <button
            class="btn btn-secondary btn-sm"
            id="hideSidebar"
            @click="setVisible"
          >
            <i class="bi bi-eye" v-if="isShow == true"></i>
            <i class="bi bi-eye-slash" v-else></i>
          </button>
          <app-select @handler="setTypeMetadata"></app-select>
        </div>
        <div class="side-content px-5" v-if="typeMeta">
          <div class="side-inner bg-secondary row">
            <app-side-menu></app-side-menu>
            <div class="col-9 px-0">
              <form class="p-0">
                <div class="form-header">
                  <div class="d-flex align-items-center justify-content-center" style="padding-bottom:2px;">
                    <strong>{{ typeMeta }} </strong>
                    <span> ({{ subName }})</span>
                  </div>
                </div>
                <div class="form-body">
                  <div class="form-row">
                    <label for="inpName" class="form-label">Имя</label>
                    <input type="text" 
                      class="form-input" 
                      id="inpName" 
                      :placeholder="typeMeta"
                      v-model="inpName"
                      @change="setName"
                    >
                  </div>
                  <div class="form-row">
                    <label for="inpSynonim" class="form-label">Синоним</label>
                    <input type="text" class="form-input" id="inpSynonim">
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { metaParams, setCapitalize } from "@/assets/helper";
import AppSelect from "@/components/AppSelect.vue";
import AppSideMenu from "@/components/AppSideMenu.vue";
export default {
  name: "configurator",
  components: { AppSelect, AppSideMenu },
  setup() {
    const isShow = ref(true);
    const typeMeta = ref("");
    const subName = ref("Новый");
    const inpName = ref('')

    const setName = () => {
      subName.value = inpName.value
    }

    const setVisible = () => {
      isShow.value = !isShow.value;
    };
    const setTypeMetadata = (typeMetaData) => {
      if (metaParams.metaObjects[typeMetaData]) {
        typeMeta.value = setCapitalize(
          metaParams.metaObjects[typeMetaData].ruName
        );
      } else {
        typeMeta.value = "";
      }
    };

    return {
      setTypeMetadata,
      isShow,
      setVisible,
      typeMeta,
      subName,
      inpName,
      setName,
    };
  },
};
</script>
