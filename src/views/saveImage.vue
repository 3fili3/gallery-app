<template>
  <main>
    <div class="col-sm-12">
      <button @click="changeRoute('view-main')" class="btn btn-primary btn-sm">
        Regresar
      </button>
      <div class="col-sm-12 border mt-2">
        <div class="col-sm-12 p-3">
          <label for="image-public" class="col-sm-12 col-12">
            <div
              v-if="objectImagen === null"
              role="button"
              class="text-empty-image text-center border border-primary"
            >
              <span class="text-primary">Presiona Para Agregar Imagen</span>
            </div>
          </label>

          <img v-if="objectImagen != null" :src="image" class="img-fluid" />
          <input
            @change="asingImage"
            type="file"
            id="image-public"
            class="d-none"
          />
          <div class="col-sm-12 mt-2">
            <textarea
              placeholder="Descripción de tu Imagen"
              class="form-control"
              rows="5"
              v-model="descriptionImagen"
            ></textarea>
          </div>
        </div>
      </div>
      <div v-if="this.messageSave != ''" class="col-sm-12 text-center my-2" >
          <span>{{messageSave}}</span>
      </div>
      <div v-if="messageSave === ''" class="col-sm-12 text-center my-2">
        <button @click="savePublication" class="btn btn-success">
          Agregar Imagen
        </button>
      </div>
    </div>
  </main>
</template>
<style scoped>
.text-empty-image {
  line-height: 150px;
  height: 150px;
}
</style>
<script>
import { modelGallery } from "../model/ModelGallery";
import { storageImages } from "../storage/storage"
export default {
  data() {
    return {
      objectImagen: null,
      image: "",
      descriptionImagen: "",
      messageSave:''
    };
  },
  methods: {
    changeRoute(route) {
      this.$router.push({ name: route });
    },
     asingImage(event) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.image = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.objectImagen = event.target.files[0];
    },
    async savePublication() {
      if (this.descriptionImagen === "") {
        alert("Debes agregar una descripción");
        return;
      }
      if (this.objectImagen === null) {
        alert("Debes de agregar una imagen");
        return;
      }
      this.messageSave = 'Espera, estamos subiendo tu publicación...';
      const linkImage = await storageImages(this.objectImagen);
      const model = {
        description: this.descriptionImagen,
        linkImage:linkImage
      };
     const key = (await modelGallery.add(model)).id;
     if(key != undefined) {
         this.messageSave = 'Publicación fue con exito';
         this.$router.push({name:'view-main'})
         return;
     }
     this.messageSave = 'Ocurrio un error al subir tu publicación';
    },
  },
};
</script>