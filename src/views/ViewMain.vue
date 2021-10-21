<template>
  <div>
    <div class="col-sm-12 col">
      <button @click="changeRoute('save-image')" class="btn btn-success btn-sm form-control">Nueva Imagen</button>
      <div class="col-sm-12 text-start border-bottom py-2">
        <small>Imagenes Publicadas</small>
      </div>
      <div v-for="(gallery,index) in $store.state.publications" :key="index" class="col-sm-12 my-1">
        <img
          :src="gallery.data.linkImage"
          class="img-fluid"
          alt=""
        />
        <div class="col-sm-12 p-3 text-start">
          <span>{{gallery.data.description}}</span>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        changeRoute(route) {
            this.$router.push({name:route})
        }
    }
}
</script>