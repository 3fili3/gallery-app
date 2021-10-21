<template>
  <div id="app" class="col-sm-12 d-flex justify-content-center content">
    <div class="col-sm-5 col content-body bg-white p-3" >
      <router-view />
    </div>
  </div>
</template>

<style>
.content {
  min-height: 100vh;
  max-height: 1000vh;
  background-color: #f0f3f4;
}
.content-body {
  min-height: 100vh;
  max-height: 1000vh;
}
</style>